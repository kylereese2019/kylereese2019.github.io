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
