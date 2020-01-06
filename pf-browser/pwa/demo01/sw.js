// 作为服务工作线程的 JavaScript 文件

console.log('Yet another sw.js')

var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/main.css',
  '/main.js'
];

// 
self.addEventListener('install', function(event) {
  console.log('install');
  // Perform install steps
  // 1. 打开缓存
  // 2. 缓存文件
  // 3. 确认所需要的资产是否已经缓存
  // event.waitUntil(
  //   caches.open(CACHE_NAME)
  //     .then(function(cache) {
  //       console.log('Opened cache');
  //       return cache.addAll(urlsToCache);
  //     })
  // );
});

// 缓存与读取
// self.addEventListener('fetch', function(event) {
//   console.log('fetch');
  // event.respondWith(
  //   caches.match(event.request)
  //     .then(function(response) {
  //       // Cache hit - return response
  //       if(response) {
  //         return response;
  //       }
  //       return fetch(event.request);
  //     })
  // );
// })

// 更新 service worker
self.addEventListener('activate', function(event) {
  console.log('activate')


  // var cacheWhitelist = ['pages-cache-v1', 'blog-posts-cache-v1'];

  // event.waitUntil(
  //   caches.keys().then(function(cacheNames) {
  //     return Promise.all(
  //       cacheNames.map(function(cacheName) {
  //         if (cacheWhitelist.indexOf(cacheName) === -1) {
  //           return caches.delete(cacheName);
  //         }
  //       })
  //     )
  //   })
  // )


})