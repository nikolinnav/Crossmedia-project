// Global variables
let map, targetMarker, userMarker;
notified = false;
if (location.hostname === "localhost") {
    sessionStorage.removeItem("visitedPlaces");
}
// Locations array
const locations = [
    { name: "Grannen", realName: "Grannen", visitedName: "Grannen", lat: 55.60752, lon: 12.98714 },
    { name: "MalmoLive", realName: "?", visitedName: "Malmö Live", lat: 55.60756, lon: 12.99201 },
    { name: "BookABoatMalmo", realName: "?", visitedName: "Book A Boat", lat: 55.60676, lon: 12.99507 },
    { name: "Radhuset", realName: "?", visitedName: "Rådhuset", lat: 55.60647, lon: 13.00122 },
    { name: "GustavAdolfsTorg", realName: "?", visitedName: "Gustav Adolfs Torg", lat: 55.60248, lon: 13.00082 },
    { name: "MJsHotell", realName: "?", visitedName: "MJ's Hotell", lat: 55.60584, lon: 12.99795 }
];

// Utility functions
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
    return JSON.parse(sessionStorage.getItem("visitedPlaces") || "[]");
}

function saveVisited(name) {
    const visited = loadVisited();
    if (!visited.includes(name)) {
        visited.push(name);
        sessionStorage.setItem("visitedPlaces", JSON.stringify(visited));
    }
}

function getNextLocation() {
    const visited = loadVisited();
    return locations.find(loc => !visited.includes(loc.name));
}

function addVisitedMarker(location) {
    L.marker([location.lat, location.lon])
        .addTo(map)
        .bindPopup(`${location.realName} (visited)`);
}

function setTarget(location) {
    if (targetMarker) map.removeLayer(targetMarker);
    if (!location) return;

    targetMarker = L.marker([location.lat, location.lon])
        .addTo(map)
        .bindPopup(location.realName)
        .openPopup();
}

function renderView(location) {
    const view = document.getElementById("view");
    view.innerHTML = `<h2>Welcome to ${location.name}</h2><p>Guess the next location before heading there!</p>`;
}

function updateDistanceDisplay(text) {
    const display = document.getElementById("distance-display");
    if (display) display.textContent = text;
}

function createMap() {
    window.scrollTo(0, 0);
    const container = document.querySelector("#container");
    container.innerHTML = "";
    renderTitle();
    if (!document.querySelector("nav")) {
        renderNavBar("Start");
    }
    // Clear previous view content
    const mapContainer = document.createElement("div");
    mapContainer.id = "map";
    container.appendChild(mapContainer);
    mapContainer.classList.add("dynamicContent");

    map = L.map("map").setView([55.60763, 12.98699], 16);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

    // Show visited locations with pins
    const visited = loadVisited();
    visited.forEach(name => {
        const loc = locations.find(l => l.name === name);
        if (loc) {
            L.marker([loc.lat, loc.lon])
                .addTo(map)
                .bindPopup(`${loc.visitedName} (Besökt)`);
        }
    });

    // Set the next location as target
    const currentTarget = getNextLocation();
    if (currentTarget) {
        setTarget(currentTarget);
    }

    // Create user marker
    userMarker = L.marker([0, 0]).addTo(map);

    if ("geolocation" in navigator) {
        navigator.geolocation.watchPosition(
            (pos) => {
                const userLat = pos.coords.latitude;
                const userLon = pos.coords.longitude;

                if (map && userMarker) {
                    userMarker.setLatLng([userLat, userLon]);
                    map.setView([userLat, userLon]);
                }

                const target = getNextLocation();
                if (!target) return;

                const dist = getDistance(userLat, userLon, target.lat, target.lon);

                console.log("distance to target: ", dist);
                // Arrived at location
                if (dist < 25 && !notified) {
                    notified = true;
                    alert(`Du har ankommit till ${target.name}`);
                    saveVisited(target.name);
                    let navStart = document.getElementById("start");
                    console.log(target.name);

                    switch (target.name) {
                        case "Grannen":
                            break;
                        case "MalmoLive":
                            console.log("hej");
                            break;
                        case "BookABoatMalmo":
                            createCard(3);
                            break;
                        case "Radhuset":
                            createCard(4)
                            break;
                        case "GustavAdolfsTorg":
                            // createCard(6)
                            break;
                        case "MJsHotell":
                            createCard(8);
                            break;
                    }

                    console.log("hej");
                    setTarget(nextTarget);
                    notified = false;

                    L.marker([target.lat, target.lon])
                        .addTo(map)
                        .bindPopup(`${target.name} (Besökt)`);
                }
            },
            err => {
                console.error("Error", err);
            },
            {
                enableHighAccuracy: true,
                maximumAge: Infinity,
                timeout: 30000,
            }
        );
    }
}

function startGeolocationWatcher() {
    // userMarker = L.marker([0, 0]).addTo(map);
    if ("geolocation" in navigator) {
        navigator.geolocation.watchPosition(
            (pos) => {
                const userLat = pos.coords.latitude;
                const userLon = pos.coords.longitude;

                if (map && userMarker) {
                    userMarker.setLatLng([userLat, userLon]);
                    map.setView([userLat, userLon]);
                }

                const target = getNextLocation();
                if (!target) return;

                const dist = getDistance(userLat, userLon, target.lat, target.lon);

                let lat = pos.coords.latitude;
                let lon = pos.coords.longitude;

                let radHusetLat = 55.60662;
                let radHusetLon = 13.00135;

                let radHusetDist = getDistance(userLat, userLon, radHusetLat, radHusetLon);
                if (radHusetDist < 25 && !interaction.vilseledd.found) {
                    console.log("hej");
                    saveVisited("BookABoatMalmo");
                }
                // Arrived at location
                if (dist < 25 && !notified) {
                    notified = true;

                    saveVisited(target.name);
                    let navStart = document.getElementById("start");
                    console.log(target.name);
                    switch (target.name) {
                        case "Grannen":
                            alert("Du har ankommit till Grannen. Kolla senaste nytt");
                            interaction.grannen.found = true;
                            notified = false;
                            if (navStart.textContent == "Senaste") {
                                interaction.grannen.found = false;
                                disableClickOnKarta();
                                disableClickOnReadCards();
                                createCard(1);
                            }
                            break;
                        case "MalmoLive":
                            alert("Hitta platsen du såg i videon och skanna QR-koden!");
                            notified = false;
                            break;
                        case "BookABoatMalmo":
                            alert("Du har tagit dig till Book A Boat, var det verkligen rätt? Kolla i 'Senaste nytt'!");
                            interaction.vilseledd.found = true;
                            notified = false;
                            if (navStart.textContent == "Senaste") {
                                interaction.vilseledd.found = false;
                                createCard(3)
                                disableClickOnKarta();
                                disableClickOnReadCards();
                            } 
                            break;
                        case "Radhuset":
                            alert("Du har ankommit till Rådhuset. Kolla senaste nytt");
                            interaction.intervju_motstandare.found = true;
                            notified = false;
                            if (navStart.textContent == "Senaste") {
                                console.log("Nu ska rådhuset kortet dyka upp")
                                interaction.intervju_motstandare.found = false;
                                createCard(4)
                                disableClickOnKarta();
                                disableClickOnReadCards();
                            }
                            break;
                        case "GustavAdolfsTorg":
                            alert("Du har ankommit till Gustav Adolfs Torg. Kolla senaste nytt")
                            interaction.kalender.found = true;
                            notified = false;
                            if (navStart.textContent == "Senaste") {
                                interaction.kalender.found = false;
                                createCard(6);
                                disableClickOnKarta();
                                disableClickOnReadCards();
                            } 
                            break;
                        case "MJsHotell":
                            alert("Du har ankommit till MJ's. Kolla senaste nytt och hitta QR-koden");
                            interaction.sistaArtikel.found = true;
                            notified = false;
                            if (navStart.textContent == "Senaste") {
                                createCard(8);
                                disableClickOnKarta();
                                disableClickOnReadCards();
                            }
                            break;
                    }

                    console.log("hej");
                    setTarget(nextTarget);
                    notified = false;

                    L.marker([target.lat, target.lon])
                        .addTo(map)
                        .bindPopup(`${target.name} (Besökt)`);

                }
            },
            err => {
                console.error("Error", err);
            },
            {
                enableHighAccuracy: true,
                maximumAge: Infinity,
                timeout: 30000,
            }
        );
    }
}

window.addEventListener("load", () => {
    startGeolocationWatcher();
})
