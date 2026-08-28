const CACHE = 'animal-garden-v1';
const ASSETS = [
  './', './index.html', './manifest.json', './icon-192.png', './icon-512.png',
  './assets/SOURCES.txt', './assets/images/SOURCES.txt',
  './assets/cat.mp3', './assets/dog.mp3', './assets/rooster.mp3', './assets/cow.mp3',
  './assets/duck.mp3', './assets/horse.mp3', './assets/sheep.mp3', './assets/owl.mp3',
  './assets/bird.mp3',
  './assets/images/cat.png', './assets/images/dog.png', './assets/images/owl.png',
  './assets/images/rooster.jpg', './assets/images/cow.jpg', './assets/images/duck.jpg',
  './assets/images/sheep.jpg', './assets/images/horse.jpg', './assets/images/bird.jpg'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy));
      return res;
    }).catch(() => cached))
  );
});