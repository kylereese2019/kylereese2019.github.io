window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
  }
}

window.addEventListener('online', function(e) {
    // Resync data with server.
    console.log("You are online");
}, false);

window.addEventListener('offline', function(e) {
    // Queue up events for server.
    console.log("You are offline");
}, false);

// Check if the user is connected.
if (navigator.onLine) {
    console.log("Connected");
} else {
    // Show offline message
    console.log("No Internet access");
}
