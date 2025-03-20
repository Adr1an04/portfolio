const CACHE_NAME = 'portfolio-cache-v1';
const ONE_HOUR = 60 * 60 * 1000;
const urlsToCache = [
  '/',
  '/index.html',
  '/assets',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (
    event.request.url.includes('fonts.googleapis.com') ||
    event.request.url.includes('fonts.gstatic.com')
  ) {
    return fetch(event.request);
  }
  
  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cachedResponse = await cache.match(event.request);
      const now = Date.now();

      if (cachedResponse) {
        const headerDate = cachedResponse.headers.get('sw-cache-date') || cachedResponse.headers.get('date');
        if (headerDate) {
          const cachedTime = new Date(headerDate).getTime();
          if (now - cachedTime > ONE_HOUR) {
            return fetchAndCache(event.request, cache);
          }
        } 
        // Cache is still fresh
        return cachedResponse;
      } else {
        // No cache yet fetch
        return fetchAndCache(event.request, cache);
      }
    })
  );
});

function fetchAndCache(request, cache) {
  return fetch(request).then((networkResponse) => {
    if (!networkResponse || networkResponse.status !== 200) {
      return networkResponse;
    }
    const clonedResponse = networkResponse.clone();
    const newHeaders = new Headers(clonedResponse.headers);
    newHeaders.set('sw-cache-date', new Date().toUTCString());
    const responseWithTimestamp = new Response(clonedResponse.body, {
      status: clonedResponse.status,
      statusText: clonedResponse.statusText,
      headers: newHeaders
    });
    cache.put(request, responseWithTimestamp.clone());
    return networkResponse;
  }).catch(() => {
    return cache.match(request);
  });
}