console.log('Service worker');

self.addEventListener('install', function(e) {
    console.log('install');
})

self.addEventListener('activate', function(e) {
    console.log('activate');
})

self.addEventListener('fetch', function(e) {
    console.log('fetch');
    return fetch(e.request.url);
})