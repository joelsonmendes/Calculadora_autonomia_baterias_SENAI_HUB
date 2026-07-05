const CACHE='baterias-solar-v6';
const FILES=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png','./logo-senai-hub.webp','./chumbo-acido.webp','./agm.webp','./opzs.webp','./opzv.webp','./lifepo4.webp'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k!==CACHE?caches.delete(k):null))));self.clients.claim();});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});
