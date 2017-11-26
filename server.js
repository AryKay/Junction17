// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var stringSimilarity = require('string-similarity');

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
const MovieDB = require('moviedb')(process.env.MOVDB_ID);

// Initialize Lyrics Wikia API Wrapper
var l = require("lyric-get");

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

app.get("/track-lyrics", function(request, response) {
l.get(request.query.artist.replace(/ /g,"_"), request.query.name.replace(/ /g,"_"), function(err, res){
    if(err){
        response.send('');
    }
    else{
        response.send(res);
    }
});
});

app.get("/discover-movies", function (request, response) {
  MovieDB.discoverMovie({ with_genres: request.query.relevantGenres, without_genres: request.query.irrelevantGenres, language: 'en-US', sort_by: 'popularity.desc', include_adult: false, include_video: false, page: request.query.page }, (err, res) => {
    if(err){
        response.send({results: []});
    }
    else{
        response.send(res);
    }
  });
});

app.get("/get-movie-keywords", function (request, response) {
  MovieDB.movieKeywords({  }, (err, res) => {
    if(err){
        response.send({results: []});
    }
    else{
        response.send(res.keywords);
    }
  });
});

//------------------------ WEB SERVER -------------------------//

// Listen for requests to our app
// We make these requests from client.js
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
