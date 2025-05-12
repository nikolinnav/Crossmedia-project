let map, userMarker;
let notifiedPlaces = [];
let userLat = 0;
let userLon = 0;

const locations = [
    { name: "Grannen", lat: 55.60763, lon: 12.98699 },
    { name: "Malmö Live", lat: 55.60756, lon: 12.99201 },
    { name: "BookABoat Malmö", lat: 55.60665, lon: 12.99556 },
    { name: "Rådhuset", lat: 55.60662, lon: 13.00135 },
    { name: "Gustav Adolfs Torg", lat: 55.60248, lon: 13.00082 },
    { name: "MJ's Hotell", lat: 55.60603, lon: 12.99789 }
];

function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371e3;
    const φ1 = lat1 * Math.PI / 180;
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(Δφ / 2) ** 2 + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function loadVisited() {
    return JSON.parse(localStorage.getItem("visitedPlaces") || "[]");
}

function saveVisited(name) {
    const visited = loadVisited();
    if (!visited.includes(name)) {
        visited.push(name);
        localStorage.setItem("visitedPlaces", JSON.stringify(visited));
    }
}

function renderNotification(location) {
    // Your custom notification code here
    alert(`Du har ankommit till ${location.name}`);
}

function checkProximityToLocations() {
    locations.forEach(loc => {
        const dist = getDistance(userLat, userLon, loc.lat, loc.lon);
        if (dist < 5) {
            if (!loadVisited().includes(loc.name) && !notifiedPlaces.includes(loc.name)) {
                notifiedPlaces.push(loc.name);
                saveVisited(loc.name);
                renderNotification(loc);
            }
        }
    });
}

function startLocationTracking() {
    if ("geolocation" in navigator) {
        navigator.geolocation.watchPosition(
            (pos) => {
                userLat = pos.coords.latitude;
                userLon = pos.coords.longitude;
                checkProximityToLocations();
            },
            err => console.error("Geolocation error", err),
            {
                enableHighAccuracy: true,
                maximumAge: 1000,
                timeout: 10000
            }
        );
    }
}

function createMap() {
    const container = document.querySelector("#container");
    container.innerHTML = "";
    const mapContainer = document.createElement("div");
    mapContainer.id = "map";
    container.appendChild(mapContainer);
    mapContainer.style.height = "100vh";
    mapContainer.style.width = "100vw";
    mapContainer.classList.add("dynamicContent");

    map = L.map("map").setView([userLat || 55.60763, userLon || 12.98699], 16);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

    // User marker
    userMarker = L.marker([userLat, userLon]).addTo(map);

    // Visited markers or those within proximity
    locations.forEach(loc => {
        const dist = getDistance(userLat, userLon, loc.lat, loc.lon);
        if (loadVisited().includes(loc.name) || dist < 5) {
            L.marker([loc.lat, loc.lon])
                .addTo(map)
                .bindPopup(`${loc.name} (Besökt eller nära)`);
        }
    });

    map.setView([userLat, userLon]);

    // Update user marker position
    setInterval(() => {
        userMarker.setLatLng([userLat, userLon]);
    }, 1000);
}

startLocationTracking(); // Always running in background
