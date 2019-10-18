self.addEventListener("install", function(event) {
  console.log("creation du cache au moment de l'install");
  event.waitUntil(
    caches.open("test2-cache").then(function(cache) {
      return cache.add("/test2/test2-offline.html").then(function() {
        return cache.add("/test2/css/style2.css");
      });
    })
  );
});

/*
self.addEventListener("fetch", function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match("/test2/test2-offline.html");
    })
  );
});

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
