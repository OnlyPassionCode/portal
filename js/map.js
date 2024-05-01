const map = L.map('map').setView([50.8256084, 4.3385623], 18);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([50.8256084, 4.3385623]).addTo(map);

const presentation = "<p><strong>TI3_2024</strong></p><p>Site de connexion/deconnexion avec une gestion des points de localisations sur la carte.</p><p style='display:flex; justify-content: space-around;'><a href='https://github.com/OnlyPassionCode/TI3-2024'>Lien Github</a><a href='ti3-2024'>Lien vers le site</a></p>"


marker.bindPopup(presentation).openPopup();