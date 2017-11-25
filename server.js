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
spotifyApi = new SpotifyWebApi();

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


//------------------------ WEB SERVER -------------------------//

// Listen for requests to our app
// We make these requests from client.js
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
