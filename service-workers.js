// from https://web.dev/codelab-make-installable/
const VERSION = 'v1';
const CACHE_NAME = `link477-${VERSION}`;
// const OFFLINE_URL = '/index.html';
const assets = [
  '/index.html',
  '/assets/main.css',
  '/assets/css/styles.css',
  '/assets/images/tom.jpg',
  '/assets/js/dark_mode_picker.js',
  '/assets/images/link477.png',
  '/service-workers.js',
  '/assets/images/ChartTheStockMarket.jpg',
  '/assets/images/HealthCostPredictions.jpg',
  '/assets/images/CatAndDogImageClassifier.jpg',
  '/assets/images/SMSClassifier.jpg',
  '/assets/images/XKCDReader.jpg',
  '/assets/images/SWTKGClassRelationships.jpg',
  '/assets/js/snow.js',
];

self.addEventListener('install', function (event) {
  console.log('[ServiceWorker] Install');

  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      // Setting {cache: 'reload'} in the new request will ensure that the response
      // isn't fulfilled from the HTTP cache; i.e., it will be from the network.
      await cache.addAll(assets); // new Request(assets, {cache: 'reload'}));
    })()
  );

  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activate');
  event.waitUntil(
    (async () => {
      // Remove old caches
      const names = await caches.keys();
      await Promise.all(
        names.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );

      // Enable navigation preload if it's supported.
      // See https://developers.google.com/web/updates/2017/02/navigation-preload
      if ('navigationPreload' in self.registration) {
        await self.registration.navigationPreload.enable();
      }
    })()
  );

  // Tell the active service worker to take control of the page immediately.
  self.clients.claim();
});

self.addEventListener('fetch', function (event) {
  // console.log('[Service Worker] Fetch', event.request.url);
  /*if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const preloadResponse = await event.preloadResponse;
        if (preloadResponse) {
          return preloadResponse;
        }

        const networkResponse = await fetch(event.request);
        return networkResponse;
      } catch (error) {
        console.log('[Service Worker] Fetch failed; returning offline page instead.', error);

        const cache = await caches.open(CACHE_NAME);
        // const cachedResponse = await cache.match(OFFLINE_URL);
        // return cachedResponse;
        const cachedResponse = await cache.match(event.request, {ignoreSearch: true});
        if (cachedResponse) {
          // return if it is available
          return cachedResponse;
        }
        return new Response(null, { status: 404 });
      }
    })());
  }*/

  const req = event.request;
  event.respondWith(networkFirst(req));
  // if (url.origin === location.origin) {
  //   // use the network first
  //
  //   try
  // }
});

async function networkFirst(req) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const res = await fetch(req);
    if (res.ok && res.status !== 206) {
      cache.put(req, res.clone());
    }
    return res;
  } catch (err) {
    const cachedResponse = await cache.match(req, { ignoreSearch: true });
    return cachedResponse || new Response(null, { status: 404 });
  }
}
