/* eslint-disable no-restricted-globals */
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('ecommerce-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/styles.css',  // Update with your CSS file
          '/main.js',     // Update with your JS file
          '/favicon.ico',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  