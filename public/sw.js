const CACHE_NAME = 'v1'

const PRE_CACHE_ASSETS = [
    "/offline",
    // "/fallback.html",
]

/* Install service worker */
self.addEventListener('install', e => {
  self.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => {
        cache.addAll(PRE_CACHE_ASSETS)
    })
  )
})

/* Activate service worker */ 
self.addEventListener('activate', e => {
    /* Delete old caches */
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if(cache !== CACHE_NAME) {
                        console.log('SW: Deleted old caches');
                        return caches.delete(cache)
                    }
                })
            )
        })
    )
})

/* Fetching */
self.addEventListener('fetch', e => {
     // Ignore chrome-extension requests
     if (e.request.url.startsWith('chrome-extension://')) {
        return;
    }

    e.respondWith(
        fetch(e.request)
        .then(res => {
            const resClone = res.clone()
            caches
            .open(CACHE_NAME)
            .then(cache => {
                cache.put(e.request, resClone)
            })
            return res
        })
        // .catch(() => caches.match(e.request).then(res => res))
        .catch(() => {
            return caches.match(e.request)
                .then(cachedResponse => {
                    return cachedResponse || caches.match('/offline');
                });
        })
    )
})