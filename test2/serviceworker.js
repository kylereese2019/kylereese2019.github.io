/* Chap 4

self.addEventListener("install", function() {
  console.log("install");
});

self.addEventListener("activate", function() {
  console.log("activate");
});

self.addEventListener("fetch", function(event) {
  if (event.request.url.includes("style2.css")) {
    console.log("Fetch request for:", event.request.url);
    event.respondWith(
      new Response(
        ".title {background: yellow!important;}",
        { headers: { "Content-Type": "text/css" }}
      )
    );
  }
});

---------
*/


var CACHE_NAME = "my-cache2";
var CACHED_URLS = [
  "/test2/test2-offline.html",
  "/test2/css/style2.css"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(CACHED_URLS);
    })
  );
});


self.addEventListener("fetch", function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match("/test2/test2-offline.html");
    })
  );
});







/* Chap 3
var CACHE_NAME = "my-cache";
var CACHED_URLS = [
  "/test2/test2-offline.html",
  "/test2/css/style2.css"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(CACHED_URLS);
    })
  );
});


self.addEventListener("fetch", function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match("/test2/test2-offline.html");
    })
  );
});
*/







/*
self.addEventListener("fetch", function(event) {
  console.log("Fetch request for: ", event.request.url);

  if (event.request.url.includes("style2.css")) {
    event.respondWith(
      new Response(
        ".title {background: red!important;}",
        { headers: { "Content-Type": "text/css" }}
      )
    )
  };
  
  event.respondWith(
    fetch(event.request).catch(function() {
      return new Response("You're offline.");
    })
  );
});
*/
