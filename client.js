
// --------------------------------------------------------------------------------------------------- //
// Algorithm Constants - This is where the magic essence is stored
// --------------------------------------------------------------------------------------------------- //
const genreMap = {
  'Action': {
    id: 28,
    acousticness: [0, 0.6],
    danceability: [0, 0.8],
    energy: [0.4, 1],
    instrumentalness: [0, 1],
    liveness: [0, 0.6],
    mode: null,
    speechiness: [0, 1],
    tempo: [65, 200],
    valence: [0, 1],
    genre: ['Rock', 'Alt-Rock', 'Alternative', 'Heavy Metal', 'Dubstep', 'Blues', 'Breakbeat', 'Chicago House', 'Club', 'Dancehall', 'Death Metal', 'Deep-house', 'Disco', 'Electro', 'Electronic', 'Garage', 'Goth', 'Grunge', 'Guitar', 'Hard Rock', 'Hardcore', 'Hardstyle', 'Hip-hop', 'Indie pop', 'Industrial', 'Iranian', 'Metal', 'Metal-misc', 'Movies', 'Party', 'Power-pop', 'Psych-rock', 'Punk-rock', 'R-N-B', 'Rock', 'SKA', 'Soundtracks']},
  'Adventure': {
    id: 12,
    acousticness: [0, 1],
    danceability: [0, 1],
    energy: [0, 1],
    instrumentalness: [0, 1],
    liveness: [0, 1],
    mode: null,
    speechiness: [0, 1],
    tempo: [40, 200],
    valence: [0, 1],
    genre: ['Acoustic', 'Alt-Rock', 'Bossanova', 'Disney', 'Folk', 'Funk', 'Groove', 'Happy', 'Heavy Metal', 'J-pop', 'Movies',  'Classical', 'MPB', 'New-age', 'Opera', 'Pop-film', 'Rainy-day', 'Show-tunes', 'Soundtracks']},
  'Animation': {
    id: 16,
    acousticness: [0, 1],
    danceability: [0, 1],
    energy: [0.4, 1],
    instrumentalness: [0, 1],
    liveness: [0, 1],
    mode: null,
    speechiness: [0, 1],
    tempo: [0, 1],
    valence: [0, 1],
    genre: ['Anime', 'Children', 'Disney', 'French', 'Holidays', 'J-idol', 'Kids', 'Movies', 'Show-tunes', 'Soundtracks']},
  'Comedy': {
    id: 35,
    acousticness: [0, 0.8],
    danceability: [0, 1],
    energy: [0.4, 1],
    instrumentalness: [0, 0.8],
    liveness: [0, 1],
    mode: 1,
    speechiness: [0, 1],
    tempo: [100, 200],
    valence: [0, 1],
    genre: ['Alt-Rock', 'British', 'Comedy', 'Dancehall', 'Disco', 'Funk', 'German', 'Gospel', 'Holidays', 'Indian', 'Kids', 'Movies', 'Reggaeton', 'Rock-N-Roll', 'Show-tunes', 'Soul', 'Soundtracks']},
  'Crime': {
    id: 80,
    acousticness: [0, 0.9],
    danceability: [0, 1],
    energy: [0.4, 1],
    instrumentalness: [0, 0.8],
    liveness: [0, 1],
    mode: 0,
    speechiness: [0, 1],
    tempo: [100, 200],
    valence: [0, 1],
    genre: ['Blues', 'Breakbeat', 'Chicago House', 'Club', 'Funk', 'Garage', 'Gospel', 'Grunge', 'Guitar', 'Hard Rock', 'Hardstyle', 'Hip-hop', 'Honky-Tonk', 'Industrial', 'Movies', 'Power-pop', 'Psych-rock', 'Punk', 'R-N-B', 'Reggae', 'Rock', 'Rockabilly', 'Soundtracks']},
  'Documentary': {
    id: 99,
    acousticness: [0, 0.8],
    danceability: [0, 1],
    energy: [0, 0.6],
    instrumentalness: [0, 1],
    liveness: [0, 1],
    mode: 0,
    speechiness: [0, 1],
    tempo: [40, 100],
    valence: [0, 1],
    genre:  ['Acoustic', 'Afrobeat', 'Alternative', 'Ambient', 'Chill', 'Classical', 'Folk', 'French', 'Hip-hop', 'Malay', 'MPB', 'New-age', 'Opera', 'Piano', 'Soundtracks']},
  'Drama': {
    id: 18,
    acousticness: [0, 0.8],
    danceability: [0, 0.6],
    energy: [0, 0.6],
    instrumentalness: [0, 1],
    liveness: [0, 1],
    mode: 0,
    speechiness: [0, 1],
    tempo: [40, 100],
    valence: 0,
    genre:  ['Acoustic', 'Blues', 'Bossanova', 'British', 'Chill', 'Classical', 'EMO', 'French', 'Happy', 'Honky-Tonk', 'Indie', 'Indie pop', 'Jazz', 'Movies', 'New-age', 'Opera', 'Piano', 'Power-pop', 'Punk', 'Punk-rock', 'Rainy-day', 'Romance', 'Sad', 'Singer-songwriter', 'Sleep', 'Soundtracks']},
  'Family': {
    id: 10751,
    acousticness: [0, 1],
    danceability: [0, 0.75],
    energy: [0, 0.75],
    instrumentalness: [0, 1],
    liveness: [0, 1],
    mode: null,
    speechiness: [0, 1],
    tempo: [40, 180],
    valence: [0, 1],
    genre:  ['Acoustic', 'Brazil', 'British', 'Children', 'Country', 'Disco', 'Forro', 'Groove', 'Happy', 'Holidays', 'Indian', 'Iranian', 'Jazz', 'Kids',  'Latin', 'Movies', 'Rock-N-Roll', 'Show-tunes', 'Soundtracks']},
  'Fantasy': {
    id: 14,
    acousticness: [0, 1],
    danceability: [0, 0.33],
    energy: [0, 0.4],
    instrumentalness: [0, 1],
    liveness: [0, 1],
    mode: null,
    speechiness: [0, 1],
    tempo: [40, 105],
    valence: [0, 1],
    genre:  ['Acoustic', 'Bossanova', 'Chill', 'Dance', 'Disney', 'EMO', 'Folk', 'Happy', 'Heavy Metal', 'New-age', 'Piano', 'Show-tunes', 'Soundtracks', 'Movies' ]},
  'History': {
    id: 36,
    acousticness: [0, 1],
    danceability: [0, 0.33],
    energy: [0, 0.4],
    instrumentalness: [0, 1],
    liveness: [0, 1],
    mode: null,
    speechiness: [0, 1],
    tempo: [40, 105],
    valence: [0, 1],
    genre:  ['Ambient', 'Chill', 'Folk', 'French', 'Indie', 'Iranian', 'Malay', 'Movies', 'New-age', 'Opera', 'Show-tunes', 'Soundtracks']},
  'Horror': {
    id: 27,
    acousticness: [0, 1],
    danceability: [0, 0.33],
    energy: [0, 0.4],
    instrumentalness: [0, 1],
    liveness: [0, 1],
    mode: 0,
    speechiness: [0, 1],
    tempo: [40, 105],
    valence: [0, 1],
    genre:  ['Ambient', 'Breakbeat', 'Club', 'Death Metal', 'EMO',  'Grindcore', 'Heavy Metal', 'Metal', 'Metalcore', 'Movies', 'Rock', 'Soundtracks']},
  'Music': {
    id: 10402,
    acousticness: [0, 1],
    danceability: [0.45, 1],
    energy: [0.45, 1],
    instrumentalness: [0, 1],
    liveness: [0, 1],
    mode: null,
    speechiness: [0, 1],
    tempo: [120, 200],
    valence: [0, 1],
    genre:  ['Blues', 'Acoustic', 'Afrobeat', 'Bossanova', 'Chill', 'Classical', 'Dance', 'Dancehall', 'Forro', 'Funk', 'Gospel',  'Groove', 'Happy', 'Hip-hop', 'Indian', 'J-idol', 'Jazz', 'Kids', 'Latin', 'Movies', 'MPB', 'Pagode', 'Party', 'R-N-B', 'Reggae', 'Reggaeton', 'Rock', 'Rock-N-Roll', 'Rockabilly', 'Salsa', 'Samba', 'Show-tunes', 'Soul', 'Soundtracks']},
  'Mystery': {
    id: 9648,
    acousticness: [0, 1],
    danceability: [0, 0.45],
    energy: [0, 0.4],
    instrumentalness: [0, 1],
    liveness: [0, 1],
    mode: null,
    speechiness: [0, 1],
    tempo: [40, 200],
    valence: [0, 1],
    genre:  ['Ambient', 'Club', 'Blues', 'Classical', 'Electro', 'Funk', 'Garage', 'Goth', 'Hard Rock', 'Industrial', 'Jazz', 'Movies', 'Psych-rock', 'Punk', 'Soundtracks', 'Rock-N-Roll']},
  'Romance': {
    id: 10749,
    acousticness: [0, 1],
    danceability: [0, 0.45],
    energy: [0, 0.4],
    instrumentalness: [0, 1],
    liveness: [0, 1],
    mode: 1,
    speechiness: [0, 1],
    tempo: [40, 200],
    valence: [0, 1],
    genre:  ['Blues', 'Acoustic', 'Bossanova', 'Brazil', 'British', 'Cantopop', 'Chill', 'Classical', 'Country', 'Dance', 'Disco', 'Disney', 'Forro', 'French', 'Happy', 'Holidays', 'Indian', 'J-pop', 'Jazz', 'K-pop', 'Latin', 'Latino', 'Mandopop', 'Movies', 'MPB', 'Pagode', 'Party', 'Philippines-OPM', 'Piano', 'Pop', 'Rainy-day', 'Reggaeton', 'Rock-N-Roll', 'Romance', 'Sad', 'Salsa', 'Samba', 'Sertanejo', 'Sleep', 'Soundtracks', 'Summer']},
  'Science Fiction': {
    id: 878,
    acousticness: [0, 1],
    danceability: [0, 0.45],
    energy: [0, 1],
    instrumentalness: [0, 0.3],
    liveness: [0, 0.3],
    mode: null,
    speechiness: [0, 1],
    tempo: [40, 200],
    valence: [0, 1],
    genre:  ['Alt-Rock', 'Alternative', 'Ambient', 'Breakbeat', 'Club', 'Detroit-techno', 'Drum-and-bass', 'Dub', 'Dubstep', 'EDM', 'Electro', 'Electronic', 'Goth', 'Groove', 'Guitar', 'Hardstyle', 'House', 'IDM', 'Indie', 'Industrial', 'Iranian', 'J-dance', 'J-rock', 'Metal', 'Metal-misc', 'Minimal-techno', 'Movies', 'Party', 'Post-dubstep', 'Power-pop', 'Progressive-house', 'Psych-rock', 'Rock', 'Rockabilly', 'Soundtracks']},
  'TV Movie': {
    id: 10770,
    acousticness: [0, 1],
    danceability: [0.45, 1],
    energy: [0.45, 1],
    instrumentalness: [0, 1],
    liveness: [0, 1],
    mode: null,
    speechiness: [0, 1],
    tempo: [120, 200],
    valence: [0, 1],
    genre:  ['Acoustic', 'Alt-Rock', 'Bossanova', 'Brazil', 'Cantopop', 'Chill', 'Country', 'Dance', 'Disco', 'Groove', 'Happy', 'Jazz',  'Latin', 'Latino', 'Movies', 'Pop', 'Pop-film', 'Reggaeton', 'Samba', 'Sertanejo', 'Soul', 'Soundtracks']},
  'Thriller': {
    id: 53,
    acousticness: [0, 1],
    danceability: [0, 0.45],
    energy: [0, 0.4],
    instrumentalness: [0, 1],
    liveness: [0, 1],
    mode: 0,
    speechiness: [0, 1],
    tempo: [40, 105],
    valence: [0, 1],
    genre:  ['Ambient', 'Club', 'Electro', 'EMO', 'Garage', 'Goth', 'Grunge', 'IDM', 'Movies', 'Punk-rock', 'Soundtracks']},
  'War': {
    id: 10752,
    acousticness: [0, 1],
    danceability: [0, 0.45],
    energy: [0, 1],
    instrumentalness: [0, 0.3],
    liveness: [0, 0.3],
    mode: 0,
    speechiness: [0, 1],
    tempo: [40, 200],
    valence: [0.5, 1],
    genre:  ['Acoustic', 'Breakbeat', 'Classical', 'Country', 'Drum-and-bass', 'Grindcore', 'Grunge', 'Hard Rock', 'Metal', 'Movies', 'Power-pop', 'Rock', 'Soundtracks']},
  'Western': {
    id: 37,
    acousticness: [0, 1],
    danceability: [0, 1],
    energy: [0, 1],
    instrumentalness: [0, 1],
    liveness: [0, 1],
    mode: null,
    speechiness: [0, 1],
    tempo: [40, 200],
    valence: [0, 1],
    genre:  ['Bluegrass', 'Country', 'Forro', 'Honky-Tonk', 'Movies', 'Sertanejo', 'Soundtracks']}
}


// --------------------------------------------------------------------------------------------------- //
// Authentication - in case of use authentication, creates web player instance
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

// --------------------------------------------------------------------------------------------------- //
// Service Logic - HTTP calls to backend
// --------------------------------------------------------------------------------------------------- //
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

function getFeatures(songId, artistId, artistName, trackName) {
  let trackEl = '';
  genreScores = {};
  movieResults = [];
  $.get('/features?id=' + songId, function(track) {
      // trackEl += '<li>' + 
      // 'acousticness: ' + track.acousticness +  '<br>' +              
      // 'danceability: ' + track.danceability + '<br>' +
      // 'energy: ' + track.energy + '<br>' +
      // 'instrumentalness: ' + track.instrumentalness + '<br>' +
      // 'liveness: ' + track.liveness + '<br>' +
      // 'mode: ' + track.mode + '<br>' +
      // 'speechiness: ' + track.speechiness + '<br>' +
      // 'tempo: ' + track.tempo + '<br>' +
      // 'valence: ' + track.valence  + '<br>';
    
      $.get('/artist-info?id=' + artistId, function(info) {
        // trackEl += 'genres: ' + info.genres.join(',') + '<br>';

          $.get('/track-lyrics?artist=' + artistName + '&name=' + trackName, function(lyrics) {
            let lyricsList = sortByFrequency(lyrics).slice(0, 10); 
            // trackEl += 'lyrics: ' + lyricsList.join(',') + '</li>';
            // $(trackEl).appendTo('#top-analysis');
            let trackAnalysis = {
              acousticness: track.acousticness,
              danceability: track.danceability,
              energy: track.energy,
              instrumentalness: track.instrumentalness,
              liveness: track.liveness,
              mode: track.mode,
              speechiness: track.speechiness,
              tempo: track.tempo,
              valence: track.valence,
              genres: info.genres,
              lyrics: lyricsList
            }
            
            prepareMovieSearch(trackAnalysis);
          });     
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
  });
 }

function discoverMovies(relevantGenres, irrelevantGenres) {
  $.get('/discover-movies?relevantGenres=' + relevantGenres.join('|') + '&irrelevantGenres=' + irrelevantGenres + '&page=1', function(movies1) {  
    $.get('/discover-movies?relevantGenres=' + relevantGenres.join('|') + '&irrelevantGenres=' + irrelevantGenres + '&page=2', function(movies2) {  
      $.get('/discover-movies?relevantGenres=' + relevantGenres.join('|') + '&irrelevantGenres=' + irrelevantGenres + '&page=3', function(movies3) { 
        $.get('/discover-movies?relevantGenres=' + relevantGenres.join('|') + '&irrelevantGenres=' + irrelevantGenres + '&page=4', function(movies4) {
          $.get('/discover-movies?relevantGenres=' + relevantGenres.join('|') + '&irrelevantGenres=' + irrelevantGenres + '&page=5', function(movies5) {  
            rankMovies(movies1.results.concat(movies2.results, movies3.results, movies4.results, movies5.results));
          });
        });
      });
    });
  });
 }

function getMovieKeywords(movies) {
  movies.forEach((movie) => {  
    $.get('/get-movie-keywords?movieId=' + movie.id, function(keywords) {  
      movie['keywords'] = keywords;
    });
  });
 }
  
// --------------------------------------------------------------------------------------------------- //
// Controller Logic - Frontend unicorns and rainbows below
// --------------------------------------------------------------------------------------------------- //$(function() {
  let trackID = '';
  let searchQuery = '';
  let resultIDs = [];
  let genreScores = {};
  let movieResults = [];

  $('form').submit(function(event) {
    
    event.preventDefault();
    
    searchQuery = '/search?query=' + $('input').val();
    
    $.get(searchQuery, function(data) {
      
      $('#results').empty();
      data.tracks.items.forEach(function(track, index) {
        resultIDs.push(track.id);
        let newEl = $('<li class="text-black" onClick="getFeatures(&apos;' + track.id + '&apos;,&apos;' + track.artists[0].id + '&apos;,&apos;' + track.artists[0].name.replace('\'', '') + '&apos;,&apos;' + track.name.replace('\'', '') + '&apos;)"></li>').text(track.name + '   |   ' + track.artists[0].name);
        $('#results').append(newEl);
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
  
function prepareMovieSearch(trackAnalysis) {
  let irrelevantGenres = [];
  let relevantGenres = [];
  let relevantGenresMap = [];
  
  for (var key in genreMap) {
    if (genreMap.hasOwnProperty(key)) {
        let stepper = false;
        for(let i = 0; i < genreMap[key].genre.length; i++) {
          if(trackAnalysis.genres.includes(genreMap[key].genre[i].toLowerCase())) {
            stepper = true;
            relevantGenres.push(genreMap[key].id);
            relevantGenresMap.push({name: key, id: genreMap[key].id, score: 0});
            break;
          }
        }
        if(!stepper) {
          irrelevantGenres.push(genreMap[key].id);
        } else {
          stepper = false;
        }
    }
  }
  
  relevantGenresMap.forEach((genre) => {
    if(genreMap[genre.name].acousticness[0] < trackAnalysis.acousticness && trackAnalysis.acousticness < genreMap[genre.name].acousticness[1]) {
      genre.score += 1;
    }
    
    if(genreMap[genre.name].danceability[0] < trackAnalysis.danceability && trackAnalysis.danceability < genreMap[genre.name].danceability[1]) {
      genre.score += 1;
    }

    if(genreMap[genre.name].energy[0] < trackAnalysis.energy && trackAnalysis.energy < genreMap[genre.name].energy[1]) {
      genre.score += 1;
    }
    
    if(genreMap[genre.name].instrumentalness[0] < trackAnalysis.instrumentalness && trackAnalysis.instrumentalness < genreMap[genre.name].instrumentalness[1]) {
      genre.score += 1;
    }

    if(genreMap[genre.name].liveness[0] < trackAnalysis.liveness && trackAnalysis.liveness < genreMap[genre.name].liveness[1]) {
      genre.score += 1;
    }
    
    if(genreMap[genre.name].speechiness[0] < trackAnalysis.speechiness && trackAnalysis.speechiness < genreMap[genre.name].speechiness[1]) {
      genre.score += 1;
    }
    
    if(genreMap[genre.name].tempo[0] < trackAnalysis.tempo && trackAnalysis.tempo < genreMap[genre.name].tempo[1]) {
      genre.score += 1;
    }
    
    if(genreMap[genre.name].mode == trackAnalysis.mode || genreMap[genre.name].mode == null) {
      genre.score += 1;
    }
  });
  genreScores = relevantGenresMap;
  discoverMovies(relevantGenres, irrelevantGenres);
}

function rankMovies(movies) {
  if(movies['type'] != 'error') {
    movies.forEach((movie) => {
      let score = 0
      for (var key in genreScores) {
        if (genreScores.hasOwnProperty(key)) {
          if(movie.genre_ids.includes(genreScores[key].id)) {
            score += genreScores[key].score;
          }
        }
      }
      movie['score'] = score;
      movieResults.push(movie);
    });
  }
  
  // sort descendingly
  movieResults.sort(function(a, b) {
    return b.score - a.score;
  });
  //getMovieKeywords(movieResults);
}

function sortByFrequency(string) {
  let filteredString = string.replace(',', ' ');
  filteredString = filteredString.replace('.', ' ');
  filteredString = filteredString.replace(':', ' ');
  filteredString = filteredString.replace(/\n/g, ' ' );
  filteredString = filteredString.replace(')', ' ');
  filteredString = filteredString.replace('(', ' ');
  filteredString = filteredString.replace('?', ' ');
  filteredString = filteredString.toLowerCase();


  let array = filteredString.split(' ');
  
	var frequency = {};
	// set all initial frequencies for each word to zero
	array.forEach(
		function(value) { frequency[value] = 0; }
	);
	// create new array with words and their frequencies
	var uniques = array.filter(
		function(value) { return ++frequency[value] == 1; }
	);
  
  var filtered = [];
  
  uniques.forEach((word) => {
    if(word.length > 3 && word != 'them' && word != 'because') {
      filtered.push(word);
    }
  });
  
	// sort words by abc order
	return filtered.sort(
		function(a, b) { return frequency[b] - frequency[a]; }
	);
};