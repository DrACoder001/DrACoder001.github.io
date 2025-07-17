// 3.2028° N, 73.2207° E
let coordinates = [3.2028, 73.2207];

let map = L.map("map", {
  center: coordinates,
  zoom: 18
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
