// Authentication: 

// Get the hash of the url
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

const authEndpoint = 'https://accounts.spotify.com/authorize';

// Replace with your app's client ID, redirect URI and desired scopes
const clientId = '36589942a9084b449dc8d5fdfabe2644';
const redirectUri = 'https://psychedelic-millennium.glitch.me';
const scopes = ['streaming', 'user-modify-playback-state', 'user-read-birthdate', 'user-read-email', 'user-read-private', 'user-top-read'];

// If there is no token, redirect to Spotify authorization
if (!_token) {
  window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token`;
}


// --------------------------------------------------------------------------------------------------- //
// --------------------------------------------------------------------------------------------------- //

// Initialise the Web Playback SDK

let player, deviceId;

window.onSpotifyWebPlaybackSDKReady = function () {
  var accessToken = _token;
  player = new Spotify.Player({
    name: 'Junction 🇫🇮',
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
    updateCurrentTrack(e.track_window.current_track)
  });

  // Ready
  player.on('ready', function (data) {
    transferPlayback(data.device_id);
  });

  // Connect to the player!
  player.connect();
}
