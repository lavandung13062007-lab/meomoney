// Tăng số version này mỗi khi muốn ép app đã cài (PWA) bỏ toàn bộ bản cache cũ
// và tải lại code mới. iOS thường giữ bản cũ rất dai khi cài vào màn hình chính.
const CACHE_NAME = "meomoney-v3";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./app.js",
  "./style.css",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Network-first cho MỌI request (kể cả trang index.html): luôn ưu tiên bản mới nhất khi có mạng
// (app cập nhật liên tục), chỉ dùng cache khi mất mạng — tránh việc app đã cài bị kẹt ở bản cũ.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return res;
      })
      .catch(() => caches.match(event.request))
  );
});
