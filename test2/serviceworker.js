self.addEventListener("fetch", function(event) {
  console.log("Fetch request for: ", event.request.url);

  /*
  if (event.request.url.includes("style2.css")) {
    event.respondWith(
      new Response(
        ".title {background: red!important;}",
        { headers: { "Content-Type": "text/css" }}
      )
    );
  */
  
  event.respondWith(
    fetch(event.request).catch(function() {
      return new Response("You're offline.");
    })
  );
});
