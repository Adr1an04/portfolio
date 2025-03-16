self.addEventListener('install', (event) => {
  event.waitUntil(
      caches.open('portfolio-cache-v1').then((cache) => {
          return cache.addAll([
              '/',
              '/index.html',
              '/assets/style.css'
          ]);
      })
  );
});

self.addEventListener('fetch', (event) => {
  if (
    event.request.url.includes('fonts.googleapis.com') ||
    event.request.url.includes('fonts.gstatic.com')
  ) {
    return fetch(event.request);
  }
  event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
          return cachedResponse || fetch(event.request).then((response) => {
              return caches.open('portfolio-cache-v1').then((cache) => {
                  cache.put(event.request, response.clone());
                  return response;
              });
          });
      })
  );
});