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


//-------------------------------------------------------------//
//------------------------- API CALLS -------------------------//
//-------------------------------------------------------------//


app.post('/transfer', function (req, res) {
  spotifyApi.setAccessToken(req.query.token);
  console.log(req.query)
  
  // Transfer playback to specified device
  spotifyApi.transferMyPlayback({device_ids: [req.query.device_id]})
    .then(function(data) {
      res.sendStatus(200);
    }, function(err) {
      console.error(err);
    });
});

app.post('/play', function (req, res) {
  spotifyApi.setAccessToken(req.query.token);
  
  // Play specified tracks
  spotifyApi.play({uris: req.query.uris.split(',')})
    .then(function(data) {
      res.sendStatus(200);
    }, function(err) {
      console.error(err);
    });
});

app.get('/top-tracks', function (req, res) {
  spotifyApi.setAccessToken(req.query.token);
  
  // Get the current user's top tracks
  spotifyApi.getMyTopTracks({limit: 5, time_range: 'medium_term'})
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
