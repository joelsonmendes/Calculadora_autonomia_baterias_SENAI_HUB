const CACHE='baterias-solar-v9';
const FILES=[
 './','./index.html','./manifest.json','./icon-192.png','./icon-512.png',
 './logo-senai-hub.webp','./chumbo-acido.webp','./agm.webp','./opzs.webp','./opzv.webp','./lifepo4.webp'
];

self.addEventListener('install',event=>{
 event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)));
 self.skipWaiting();
});

self.addEventListener('activate',event=>{
 event.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(key=>key!==CACHE?caches.delete(key):null))));
 self.clients.claim();
});

self.addEventListener('fetch',event=>{
 event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request)));
});
