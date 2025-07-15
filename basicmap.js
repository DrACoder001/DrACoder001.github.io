// 35.2176665°N 80.831473°W -> 35.2176665,-80.831473

var map = L.map("map", {
  center: [35.2176665,-80.831473],
  zoom: 10
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
