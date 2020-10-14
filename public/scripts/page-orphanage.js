const options ={
    dragging: false,
    touchZoom: false,
    doubleClickZoom:false,
    scrollWheelZoom: false,
    zoomControl: false
}

//create map
const map = L.map('mapid', options).setView([-7.2290248,-35.902706], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

//create and add marker
L.marker([-7.2290248,-35.902706], {icon})
    .addTo(map)
 
   