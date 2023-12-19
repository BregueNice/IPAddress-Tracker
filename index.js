let ip = document.getElementById('ip');
let search = document.getElementById('search');

let address = document.getElementById('ipAdress');
let localize = document.getElementById('location');
let timezone = document.getElementById('timezone');
let isp = document.getElementById('isp');

let mapSpace = document.getElementById('map');

let lat = 51.505;
let lng = -0.09;

var map = L.map('map').setView([lat, lng], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
L.marker([lat, lng]).addTo(map)
    .openPopup();


async function infoGenerate() {
    let conexao = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_TDnfVQ48tTvK68YmYvwnWKmqFdfSE&ipAddress=${ip.value}&domain=${ip.value}`)
    let conexaoConvertida = await conexao.json();

    address.innerText = `${conexaoConvertida.ip}`
    localize.innerText = `${conexaoConvertida.location.city}, ${conexaoConvertida.location.region}`
    timezone.innerText = `UTC${conexaoConvertida.location.timezone}`
    isp.innerText = `${conexaoConvertida.isp}`


    document.getElementById('weathermap').innerHTML = `<div id='map'></div>`

    var map = L.map('map').setView([conexaoConvertida.location.lat, conexaoConvertida.location.lng], 16);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    L.marker([conexaoConvertida.location.lat, conexaoConvertida.location.lng]).addTo(map)
        .openPopup();
}