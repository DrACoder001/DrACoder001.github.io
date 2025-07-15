// 35.2176665°N 80.831473°W -> 35.2176665,-80.831473

var map = L.map("map", {
  center: [35.2176665,-80.831473],
  zoom: 10
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let centralMarker = L.marker([35.2176665,-80.831473], {title: "CPCC Central Campus"}).addTo(map);
let levineMarker = L.marker([35.11, -80.69], {title: "CPCC Levine Campus"}).addTo(map);
let catoMarker = L.marker([35.2648627, -80.73116], {title: "CPCC CATO Campus"}).addTo(map);
let harperMarker = L.marker([35.12, -80.93], {title: "CPCC Harper Campus"}).addTo(map);
let harrisMarker = L.marker([35.22, -80.92], {title: "CPCC Harris Campus"}).addTo(map);
let merancasMarker = L.marker([35.39, -80.84], {title: "CPCC Merancas Campus"}).addTo(map);
