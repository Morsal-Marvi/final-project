// // Replace with your OpenWeatherMap API Key
// const API_KEY = 'b07ef0b2bd0bb2225a44c26d1243c6cd';

// async function getWeather(lat, lon) {
//     try {
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         displayWeather(data);
//         updateLocationDisplay(data.name, data.sys.country);
//     } catch (error) {
//         document.getElementById('weather').innerHTML = 'Failed to fetch weather data.';
//         console.error('Error fetching weather data:', error);
//     }
// }

// function displayWeather(data) {
//     const weatherElement = document.getElementById('weather');
//     const { main, weather } = data;
//     weatherElement.innerHTML = `
//         <h2>${data.name}</h2>
//         <p>Temperature: ${main.temp}°C</p>
//         <p>Weather: ${weather[0].description}</p>
//         <p>Humidity: ${main.humidity}%</p>
//         <p>Pressure: ${main.pressure} hPa</p>
//     `;
// }

// function updateLocationDisplay(cityName, countryCode) {
//     const locationElement = document.getElementById('current-location');
//     locationElement.innerText = `${cityName}, ${countryCode}`;
// }

// function handleLocationError(error) {
//     const locationElement = document.getElementById('current-location');
//     locationElement.innerText = `Error: ${error.message}`;
// }

// function handleLocation(position) {
//     const lat = position.coords.latitude;
//     const lon = position.coords.longitude;
//     getWeather(lat, lon);
// }

// function requestLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(handleLocation, handleLocationError);
//     } else {
//         const locationElement = document.getElementById('current-location');
//         locationElement.innerText = 'Geolocation is not supported by this browser.';
//     }
// }

// document.addEventListener('DOMContentLoaded', () => {
//     requestLocation();
// });
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('close-btn');

menuToggle.addEventListener('click', () => {
    sidebar.classList.add('active');
    overlay.style.display = 'block'; // Show overlay
    menuToggle.style.display = 'none'; // Hide toggle button
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.style.display = 'none'; // Hide overlay
    menuToggle.style.display = 'block'; // Show toggle button
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.style.display = 'none'; // Hide overlay
    menuToggle.style.display = 'block'; // Show toggle button
});
// map
 // Initialize the map
 var map = L.map('map').setView([51.505, -0.09], 13); // Default view (London)

 // Add a tile layer (this one is OpenStreetMap, can be changed)
 var tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
 }).addTo(map);

 // Change map layer based on user selection
 document.getElementById('layers').addEventListener('change', function() {
     var selectedLayer = this.value;
     map.removeLayer(tileLayer);

     if (selectedLayer === 'satellite') {
         tileLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(map);
     } else if (selectedLayer === 'streets') {
         tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
     } else if (selectedLayer === 'topo') {
         tileLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(map);
     }
 });

 // Basic search function (for demonstration)
 document.getElementById('search').addEventListener('change', function() {
     var searchValue = this.value;
     if (searchValue) {
         var geocoder = new L.Control.Geocoder.Nominatim();
         geocoder.geocode(searchValue, function(results) {
             var latlng = results[0].center;
             map.setView(latlng, 13);
             L.marker(latlng).addTo(map)
                 .bindPopup('Location: ' + searchValue)
                 .openPopup();
         });
     }
 });


// map
 // Initialize the map
 var map = L.map('map').setView([51.505, -0.09], 13); // Default view (London)

 // Add a tile layer (this one is OpenStreetMap, can be changed)
 var tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
 }).addTo(map);

 // Change map layer based on user selection
 document.getElementById('layers').addEventListener('change', function() {
     var selectedLayer = this.value;
     map.removeLayer(tileLayer);

     if (selectedLayer === 'satellite') {
         tileLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(map);
     } else if (selectedLayer === 'streets') {
         tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
     } else if (selectedLayer === 'topo') {
         tileLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(map);
     }
 });

 // Basic search function (for demonstration)
 document.getElementById('search').addEventListener('change', function() {
     var searchValue = this.value;
     if (searchValue) {
         var geocoder = new L.Control.Geocoder.Nominatim();
         geocoder.geocode(searchValue, function(results) {
             var latlng = results[0].center;
             map.setView(latlng, 13);
             L.marker(latlng).addTo(map)
                 .bindPopup('Location: ' + searchValue)
                 .openPopup();
         });
     }
 });
