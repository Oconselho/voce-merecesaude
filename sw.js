const CACHE_NAME = 'merecesaude-pwa-v3';
const urlsToCache = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './manifest.json'
];

self.addEventListener('install', (event) => {
    // Força a atualização imediata no aparelho do cliente
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('activate', (event) => {
    // Toma controle da página imediatamente
    event.waitUntil(self.clients.claim());

    // Deleta QUALQUER cache antigo que não seja o v3 atual
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Estratégia "Network First" (Puxa sempre a versão mais nova da internet primeiro. Se estiver sem 4G/Wi-Fi, usa o Cache).
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(function () {
            return caches.match(event.request);
        })
    );
});
