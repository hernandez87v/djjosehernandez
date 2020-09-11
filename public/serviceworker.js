const cacheName = 'version-1';
const self = this;
// Install SW
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installed');
});
// Activate the SW
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activated');
  // Remove unwanted caches
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          console.log('Service Worker: Clearing Old Cache');
          if (cache !== cacheName) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
// Listen for requests
self.addEventListener('fetch', (event) => {
  console.log('Service Worker: Fetching...');
  event.respondWith(
    fetch(event.request)
      .then((res) => {
        // Make clone of response
        const resClone = res.clone();
        // Open Cache
        caches.open(cacheName).then((cache) => {
          // Add response to cache
          cache.put(event.request, resClone);
        });
        return res;
      })
      .catch((err) => caches.match(event.request).then((res) => res))
  );
});
