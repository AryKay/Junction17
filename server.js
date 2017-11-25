// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/index.html');
});

// Initialize Spotify API wrapper
var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi({
  clientId : process.env.CLIENT_ID,
  clientSecret : process.env.CLIENT_SECRET,
});

spotifyApi.clientCredentialsGrant()
  .then(function(data) {
    console.log('The access token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);

    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body['access_token']);
  }, function(err) {
    console.log('Something went wrong when retrieving an access token', err.message);
});


// Initialize TheMovieDB API Wrapper
const MovieDB = require('moviedb')('164ad7474a23d25a1c60930b77f4f6aa');


//-------------------------------------------------------------//
//------------------------- API CALLS -------------------------//
//-------------------------------------------------------------//

app.get('/audio-analysis-multi', function(req, res) {
  spotifyApi.getAudioFeaturesForTracks(req.query.uris.split(','))
  .then(function(data) {
    res.send(data.body.audio_features)
  }, function(err) {
    console.error(err);
  });
});

app.get("/features", function (request, response) {
  spotifyApi.getAudioFeaturesForTrack(request.query.id)
  .then(function(data) {
    response.send(data.body);
  }, function(err) {
    console.log(err)
  });
});

app.get("/artist-info", function (request, response) {
  spotifyApi.getArtist(request.query.id)
  .then(function(data) {
    console.log(data.body);
    response.send(data.body);
  }, function(err) {
    console.log(err)
  });
});

app.get('/top-tracks', function (req, res) {
  spotifyApi.setAccessToken(req.query.token);
  
  // Get the current user's top tracks
  spotifyApi.getMyTopTracks({limit: 50, time_range: 'medium_term'})
    .then(function(data) {
      res.send(data.body.items);
    }, function(err) {
      console.error(err);
    });
});

app.get("/search", function (request, response) {
  spotifyApi.searchTracks(request.query.query, { limit: 10 })
  .then(function(data) {
    console.log(data.body);
    response.send(data.body);
  }, function(err) {
    console.log(err)
  });
});


//------------------------ WEB SERVER -------------------------//

// Listen for requests to our app
// We make these requests from client.js
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
