/* v0.7: retire v0.3/v0.4 cached files within this app's scope only.
   No response interception. Study notes continue to use localStorage. */
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil((async()=>{
 for (const name of await caches.keys()) {
  if (!/^dc-handbook-v0\.[34]/.test(name)) continue;
  const cache=await caches.open(name);
  for(const req of await cache.keys()) {
   if(req.url.startsWith(self.registration.scope)) await cache.delete(req);
  }
  if(!(await cache.keys()).length) await caches.delete(name);
 }
 await self.clients.claim();
 await self.registration.unregister();
})()));
