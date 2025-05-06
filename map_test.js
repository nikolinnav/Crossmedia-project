function createMap() {
    const container = document.querySelector("#container");
    const mapContainer = document.createElement("div");
    mapContainer.id = "map";
    container.appendChild(mapContainer);
    mapContainer.style.height = "100vh";
    mapContainer.style.width = "100wv";
    mapContainer.classList.add("dynamicContent");

    const map = L.map('map').setView([55.60763, 12.98699], 16);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
}


// Array of objects for all locations with info about their name, latitude and longitute.
const locations = [
    {
        name: "Grannen",
        lat: 55.60763,
        lon: 12.98699
    },
    {
        name: "Malmö Live",
        lat: 55.60756,
        lon: 12.99201
    },
    {
        name: "BookABoat Malmö",
        lat: 55.60665,
        lon: 12.99556
    },
    {
        name: "Rådhuset",
        lat: 55.60662,
        lon: 13.00135
    },
    {
        name: "Gustav Adolfs Torg",
        lat: 55.60248,
        lon: 13.00082
    },
    {
        name: "MJ's Hotell",
        lat: 55.60603,
        lon: 12.99789
    }
]

let currentIndex = 0;
let notified = false;
let targetMarker;
let userMarker;


//Calculates the user's distance from the target place.
function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371e3;
    const φ1 = lat1 * Math.PI / 180;
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) ** 2 +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) ** 2;
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

function getNextLocation() {
    const visited = loadVisited();
    return locations.find(loc => !visited.includes(loc.name));
}

function setTarget(location) {
    console.log(location);
    if (targetMarker) map.removeLayer(targetMarker);
    if (!location) {
        //UI display when all locations are visited. 
        return;
    }

    targetMarker = L.marker([location.lat, location.lon])
        .addTo(map)
        .bindPopup(location.name)
        .openPopup();
}

const initialTarget = getNextLocation();
setTarget(initialTarget);

userMarker = L.marker([0, 0]).addTo(map);

if ("geolocation" in navigator) {
    navigator.geolocation.watchPosition((pos) => {
        const userLat = pos.coords.latitude;
        const userLon = pos.coords.longitude;

        userMarker.setLatLng([userLat, userLon]);
        map.setView([userLat, userLon]);

        const currentTarget = getNextLocation();
        if (!currentTarget) return;

        const dist = getDistance(userLat, userLon, currentTarget.lat, currentTarget.lon);
        //UI display the distance to the current target in m. 
        // Ex:
        // document.getElementById("info").textContent =
        // `Distance to ${currentTarget.name}: ${dist.toFixed(1)} m`;


        if (dist < 2 && !notified) {
            notified = true;
            alert(`Du har ankommit till ${currentTarget.name}`);
            saveVisited(currentTarget.name);

            //Trigger the next task here. (interview, view a video, answer a question etc...)

            //Show the next location
            const nextTarget = getNextLocation();
            setTarget(nextTarget);
            notified = false;
        }

    }, err => {
        console.error("Error", err);
    }, {
        enableHighAccuracy: true,
        maximumAge: 1000,
        timeout: 10000
    });
}
