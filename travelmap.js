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

let circleMarker01 = L.circle(coordinates, {
  color: "black",
  fillColor: "green",
  fillOpacity: 0.5,
  radius: 100
}).bindPopup(`<center>
             <h3>Hello from the Maldives!</h3>
            <iframe width="200" height="100" src="https://www.youtube.com/embed/W4YfDg-dKzk?si=LsBxWZXswQvPhopL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
             </center>`).addTo(map);
