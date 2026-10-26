// UFC방 게임센터 홈 화면 앱 — 늘 인터넷에서 새로 받음 (게임 사이트 주소가 바뀌어도 고정 주소 페이지가 넘겨줌)
self.addEventListener("install", e => self.skipWaiting());
self.addEventListener("activate", e => self.clients.claim());
self.addEventListener("fetch", e => {
  if (e.request.mode !== "navigate") return;
  e.respondWith(fetch(e.request).catch(() => new Response(
    '<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><body style="background:#0f1115;color:#e9ecf2;font-family:sans-serif;text-align:center;padding:40px">'
    + '<h2>연결이 안 돼요</h2><p>인터넷 연결을 확인하고 다시 열어 주세요.</p></body>', {headers: {"Content-Type": "text/html; charset=utf-8"}})));
});