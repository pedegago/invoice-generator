var CACHE_NAME = "invoice-gen";
var CACHE_VERSION = "0.0.1";
var CACHE = CACHE_NAME + "-v" + CACHE_VERSION;

self.addEventListener("install", function (e) {
    console.log("[SW] Hello from the service worker 🚧");

    e.waitUntil(
        caches.open(CACHE).then((cache) => {
            console.log("saving critial files");
            return cache.add("/images/favicon.ico");
        }),
    );
});

self.addEventListener("activate", (e) => {
    e.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(
                keyList.map((key) => {
                    if (key !== CACHE) {
                        return caches.delete(key);
                    }
                }),
            );
        }),
    );
});

// network first strategy
self.addEventListener("fetch", function (event) {
    if (event.request.headers.has("range")) {
        return;
    }

    event.respondWith(
        fetch(event.request)
            .then(function (res) {
                return caches.open(CACHE).then(function (cache) {
                    cache.put(event.request, res.clone());

                    return res;
                });
            })
            .catch(function () {
                return caches.match(event.request);
            }),
    );
});
