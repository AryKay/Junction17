// --------------------------------------------------------------------------------------------------- //
// --------------------------------------------------------------------------------------------------- //
 const hash = window.location.hash
  .substring(1)
  .split('&')
  .reduce(function (initial, item) {
    if (item) {
      var parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
  window.location.hash = '';

  // Set token
  let _token = hash.access_token;

  if (!!_token) {
    loginAsUser();

    let player, deviceId;

    window.onSpotifyWebPlaybackSDKReady = function () {
      var accessToken = _token;
      player = new Spotify.Player({
        name: 'Junction',
        getOAuthToken: function (callback) { callback(accessToken); }
      });

      // Error handling
      player.on('initialization_error', function (e) { console.log('Initialization Error', e); });
      player.on('authentication_error', function (e) { console.log('Authentication Error', e); });
      player.on('account_error', function (e) { console.log('Account Error', e); });
      player.on('playback_error', function (e) { console.log('Playback Error', e); });

      // Playback status updates
      player.on('player_state_changed', function (e) {
        console.log("Player state changed", e);
        //updateCurrentTrack(e.track_window.current_track)
      });

      // Ready
      player.on('ready', function (data) {
        //transferPlayback(data.device_id);
        getTopTracks();
      });

      // Connect to the player!
      player.connect();
    }
  }
// Initialise the Web Playback SDK

// Service Logic
let topTrackUris;
let topTrackIds;
let topTrackCombinedAnalysis;

function loginAsUser() {
  const authEndpoint = 'https://accounts.spotify.com/authorize';

  // Replace with your app's client ID, redirect URI and desired scopes
  const clientId = '36589942a9084b449dc8d5fdfabe2644';
  const redirectUri = 'https://psychedelic-millennium.glitch.me';
  const scopes = ['user-read-birthdate', 'user-read-email', 'user-read-private', 'user-top-read'];
  // If there is no token, redirect to Spotify authorization
  if (!_token) {
    window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token`;
  }
}

function getFeatures(songId, artistId) {
  let trackEl = '';
  
  $.get('/features?id=' + songId, function(track) {
      trackEl += '<li>' + 
      'acousticness: ' + track.acousticness +  '<br>' +              
      'danceability: ' + track.danceability + '<br>' +
      'energy: ' + track.energy + '<br>' +
      'instrumentalness: ' + track.instrumentalness + '<br>' +
      'liveness: ' + track.liveness + '<br>' +
      'mode: ' + track.mode + '<br>' +
      'speechiness: ' + track.speechiness + '<br>' +
      'tempo: ' + track.tempo + '<br>' +
      'valence: ' + track.valence  + '<br>';
      $.get('/artist-info?id=' + artistId, function(info) {
        trackEl += 'genres: ' + info.genres.join(',') + '</li>';
          console.log(trackEl);
        $(trackEl).appendTo('#top-analysis');
        topTrackCombinedAnalysis = {
          acousticness: track.acousticness,
          danceability: track.danceability,
          energy: track.energy,
          instrumentalness: track.instrumentalness,
          liveness: track.liveness,
          mode: track.mode,
          speechiness: track.speechiness,
          tempo: track.tempo,
          valence: track.valence,
          genres: info.genres
        }
      });  
    
                       
  });
  


}

function getTopTracks() {
  $.get('/top-tracks?token=' + _token, function(tracks) {
    console.log(tracks)
    let uris = [];
    let ids = [];
    
    tracks.forEach(function(track) {
      // let trackEl = $('<li>' + track.name + '</li>') ;
      // trackEl.appendTo('#top-tracks');
      uris.push(track.uri);
      ids.push(track.id);
    });
    
    topTrackUris = uris.join(',');
    topTrackIds = ids.join(',');
    analyzeTracks(topTrackIds);
  });
}

function analyzeTracks(uris) {
  $.get('/audio-analysis-multi?uris=' + uris + '&token=' + _token, function(tracks) {
        console.log(tracks);
  
    topTrackCombinedAnalysis = getAverageAnalysis(tracks);
    
    // tracks.forEach(function(track) {
    //   let trackEl = $('<li>' + 
    //   'acousticness: ' + track.acousticness +  '<br>' +              
    //   'danceability: ' + track.danceability + '<br>' +
    //   'energy: ' + track.energy + '<br>' +
    //   'instrumentalness: ' + track.instrumentalness + '<br>' +
    //   'liveness: ' + track.liveness + '<br>' +
    //   'mode: ' + track.mode + '<br>' +
    //   'speechiness: ' + track.speechiness + '<br>' +
    //   'tempo: ' + track.tempo + '<br>' +
    //   'valence: ' + track.valence 
    //                   + '</li>') ;
    //   trackEl.appendTo('#top-analysis');
    // });
  });
 }
  
// Controller Logic
$(function() {
  let trackID = '';
  let searchQuery = '';
  let resultIDs = [];
  
  $('form').submit(function(event) {
    
    event.preventDefault();
    
    searchQuery = '/search?query=' + $('input').val();
    
    $.get(searchQuery, function(data) {
      
      $('#results').empty();
    
      data.tracks.items.forEach(function(track, index) {
        resultIDs.push(track.id);
        let newEl = $('<li class="text-black" onClick="getFeatures(&apos;' + track.id + '&apos;,&apos;' + track.artists[0].id + '&apos;)"></li>').text(track.name + '   |   ' + track.artists[0].name);
        $('#results').append(newEl);
      }); 
      
    });
    
  });
}); 

  function getAverageAnalysis(tracks) {
    
      let trackAnalysis = {
        acousticness: 0,
        danceability: 0,
        energy: 0,
        instrumentalness: 0,
        liveness: 0,
        mode: 0,
        speechiness: 0,
        tempo: 0,
        valence: 0,
        genres: []
      };

      tracks.forEach(function(track) {
      trackAnalysis.acousticness += track.acousticness;
      trackAnalysis.danceability += track.danceability;
      trackAnalysis.energy += track.energy;
      trackAnalysis.instrumentalness += track.instrumentalness;
      trackAnalysis.liveness += track.liveness;
      trackAnalysis.mode += track.mode;
      trackAnalysis.speechiness += track.speechiness;
      trackAnalysis.tempo += track.tempo;
      trackAnalysis.valence += track.valence;
    });
    
    // take average analysis of the songs
    trackAnalysis.acousticness = trackAnalysis.acousticness/tracks.length;
    trackAnalysis.danceability = trackAnalysis.danceability/tracks.length;
    trackAnalysis.energy = trackAnalysis.energy/tracks.length;
    trackAnalysis.instrumentalness = trackAnalysis.instrumentalness/tracks.length;
    trackAnalysis.liveness = trackAnalysis.liveness/tracks.length;
    trackAnalysis.mode = trackAnalysis.mode/tracks.length;
    trackAnalysis.speechiness = trackAnalysis.speechiness/tracks.length;
    trackAnalysis.tempo = trackAnalysis.tempo/tracks.length;
    trackAnalysis.valence = trackAnalysis.valence/tracks.length;
    
      let trackEl = $('<li>' + 
      'acousticness: ' + trackAnalysis.acousticness +  '<br>' +              
      'danceability: ' + trackAnalysis.danceability + '<br>' +
      'energy: ' + trackAnalysis.energy + '<br>' +
      'instrumentalness: ' + trackAnalysis.instrumentalness + '<br>' +
      'liveness: ' + trackAnalysis.liveness + '<br>' +
      'mode: ' + trackAnalysis.mode + '<br>' +
      'speechiness: ' + trackAnalysis.speechiness + '<br>' +
      'tempo: ' + trackAnalysis.tempo + '<br>' +
      'valence: ' + trackAnalysis.valence 
                      + '</li>') ;
      trackEl.appendTo('#top-analysis');
    
    return trackAnalysis;
  }
  
  let musicData = {
    genres: ['Rock', 'Pop', 'Alternative Rock'],
    acousticness: 0.17,
    danceability: 0.17,
    energy: 0.17,
    instrumentalness: 0.17,
    liveness: 0.17,
    mode: 1,
    speechiness: 0.17,
    tempo: 120,
    valence: 0.17
  }
  
  function discoverMovies(musicData) {
    let movieGenres = [];

    if(musicData.mode == 1) {
      movieGenres.push('1123','2323');
    } else {
      movieGenres.add();
    }
  }
  
  function rankMovie(movie) {
    let score = 0;
    
    // magic algorithm
    
    return (movie, score);
  }
