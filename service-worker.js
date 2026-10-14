// Fichier Service Worker : Indispensable pour forcer iOS à reconnaître l'application PWA

const CACHE_NAME = 'digisat-cache-v1';

// Installation : on prend le contrôle immédiatement
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

// Activation
self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// Réseau : on laisse passer toutes les requêtes normalement
self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request).catch(() => {
        // Ignorer silencieusement les erreurs réseau
    }));
});
