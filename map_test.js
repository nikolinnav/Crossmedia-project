// Global variables
let map, targetMarker, userMarker;
notified = false;
if (location.hostname === "localhost") {
    sessionStorage.removeItem("visitedPlaces");
}
// Locations array
const locations = [
    { name: "Grannen", realName: "Grannen", lat: 55.60752, lon: 12.98714 },
    { name: "MalmoLive", realName: "Malmö Live", lat: 55.60756, lon: 12.99201 },
    { name: "BookABoatMalmo", realName: "Book A Boat", lat: 55.60676, lon: 12.99507 },
    { name: "Radhuset", realName: "Rådhuset", lat: 55.60662, lon: 13.00135 },
    { name: "GustavAdolfsTorg", realName: "Gustav Adolfs Torg", lat: 55.60248, lon: 13.00082 },
    { name: "MJsHotell", realName: "MJ's Hotell", lat: 55.60584, lon: 12.99795 }
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
    // mapContainer.style.height = "100%";
    // mapContainer.style.width = "100vw"; // Fixed typo: "wv" → "vw"
    mapContainer.classList.add("dynamicContent");

    map = L.map("map").setView([55.60763, 12.98699], 16);
    // window.map = L.map("map").setView([55.60763, 12.98699], 16);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

    // Show visited locations with pins
    const visited = loadVisited();
    visited.forEach(name => {
        const loc = locations.find(l => l.name === name);
        if (loc) {
            L.marker([loc.lat, loc.lon])
                .addTo(map)
                .bindPopup(`${loc.name} (Besökt)`);
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

                // Show distance in a bottom div
                // const infoDiv = document.getElementById("distanceInfo") || document.createElement("div");
                // infoDiv.id = "distanceInfo";
                // infoDiv.textContent = `Avstånd till ${target.name}: ${dist.toFixed(1)} m`;
                // infoDiv.style.position = "absolute";
                // infoDiv.style.bottom = "0";
                // infoDiv.style.width = "100%";
                // infoDiv.style.backgroundColor = "rgba(255,255,255,0.8)";
                // infoDiv.style.padding = "10px";
                // infoDiv.style.textAlign = "center";
                // container.appendChild(infoDiv);

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

                    // Show next location on return
                    // setTimeout(() => {
                    //     const nextTarget = getNextLocation();
                    //     if (nextTarget) {
                    //         console.log("hej");
                    //         setTarget(nextTarget);
                    //         notified = false;
                    //     }
                    // }, 1000);
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
                if (radHusetDist < 20 && !interaction.vilseledd.found) {
                    console.log("hej");
                    saveVisited("BookABoatMalmo");
                }
                // Arrived at location
                if (dist < 25 && !notified) {
                    notified = true;
                    // alert(`Du har ankommit till ${target.name}`);
                    saveVisited(target.name);
                    let navStart = document.getElementById("start");
                    console.log(target.name);
                    // Show visited pin

                    // L.marker([target.lat, target.lon])
                    //     .addTo(map)
                    //     .bindPopup(`${target.name} (Besökt)`);
                    // Trigger view for task/interview/question
                    // renderView(`task-${target.name}`);
                    switch (target.name) {
                        case "Grannen":
                            alert("Du har ankommit till Grannen. Kolla senaste nytt");
                            interaction.grannen.found = true;
                            notified = false;
                            // let navStart = document.getElementById("start");
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

                    // Show next location on return
                    // setTimeout(() => {
                    //     const nextTarget = getNextLocation();
                    //     if (nextTarget) {
                    //         console.log("hej");
                    //         setTarget(nextTarget);
                    //         notified = false;
                    //     }
                    // }, 1000);
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
//true
// 1000;

window.addEventListener("load", () => {
    startGeolocationWatcher();
})

// Watch position
// if ("geolocation" in navigator) {
//     navigator.geolocation.watchPosition(
//         (pos) => {
//             const userLat = pos.coords.latitude;
//             const userLon = pos.coords.longitude;

//             userMarker.setLatLng([userLat, userLon]);
//             map.setView([userLat, userLon]);

//             const target = getNextLocation();
//             if (!target) return;

//             const dist = getDistance(userLat, userLon, target.lat, target.lon);

//             // Show distance in a bottom div
//             const infoDiv = document.getElementById("distanceInfo") || document.createElement("div");
//             infoDiv.id = "distanceInfo";
//             infoDiv.textContent = `Avstånd till ${target.name}: ${dist.toFixed(1)} m`;
//             infoDiv.style.position = "absolute";
//             infoDiv.style.bottom = "0";
//             infoDiv.style.width = "100%";
//             infoDiv.style.backgroundColor = "rgba(255,255,255,0.8)";
//             infoDiv.style.padding = "10px";
//             infoDiv.style.textAlign = "center";
//             container.appendChild(infoDiv);

//             console.log("distance to target: ", dist);
//             // Arrived at location
//             if (dist < 20 && !notified) {
//                 notified = true;
//                 alert(`Du har ankommit till ${target.name}`);
//                 saveVisited(target.name);

//                 console.log(target.name);
//                 // Show visited pin
//                 L.marker([target.lat, target.lon])
//                     .addTo(map)
//                     .bindPopup(`${target.name} (Besökt)`);

//                 // Trigger view for task/interview/question
//                 // renderView(`task-${target.name}`);
//                 createCard(1);
//                 // Show next location on return
//                 setTimeout(() => {
//                     const nextTarget = getNextLocation();
//                     if (nextTarget) {
//                         setTarget(nextTarget);
//                         notified = false;
//                     }
//                 }, 1000);
//             }
//         },
//         err => {
//             console.error("Error", err);
//         },
//         {
//             enableHighAccuracy: true,
//             maximumAge: 1000,
//             timeout: 10000,
//         }
//     );
// }

// function createMap() {
//     const container = document.querySelector("#container");
//     const mapContainer = document.createElement("div");
//     mapContainer.id = "map";
//     container.appendChild(mapContainer);
//     mapContainer.style.height = "100vh";
//     mapContainer.style.width = "100wv";
//     mapContainer.classList.add("dynamicContent");

//     const map = L.map('map').setView([55.60763, 12.98699], 16);
//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
// }


// // Array of objects for all locations with info about their name, latitude and longitute.
// const locations = [
//     {
//         name: "Grannen",
//         lat: 55.60763,
//         lon: 12.98699
//     },
//     {
//         name: "Malmö Live",
//         lat: 55.60756,
//         lon: 12.99201
//     },
//     {
//         name: "BookABoat Malmö",
//         lat: 55.60665,
//         lon: 12.99556
//     },
//     {
//         name: "Rådhuset",
//         lat: 55.60662,
//         lon: 13.00135
//     },
//     {
//         name: "Gustav Adolfs Torg",
//         lat: 55.60248,
//         lon: 13.00082
//     },
//     {
//         name: "MJ's Hotell",
//         lat: 55.60603,
//         lon: 12.99789
//     }
// ]

// let currentIndex = 0;
// let notified = false;
// let targetMarker;
// let userMarker;


// //Calculates the user's distance from the target place.
// function getDistance(lat1, lon1, lat2, lon2) {
//     const R = 6371e3;
//     const φ1 = lat1 * Math.PI / 180;
//     const φ2 = lat2 * Math.PI / 180;
//     const Δφ = (lat2 - lat1) * Math.PI / 180;
//     const Δλ = (lon2 - lon1) * Math.PI / 180;

//     const a = Math.sin(Δφ / 2) ** 2 +
//         Math.cos(φ1) * Math.cos(φ2) *
//         Math.sin(Δλ / 2) ** 2;
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     return R * c;
// }

// function loadVisited() {
//     return JSON.parse(localStorage.getItem("visitedPlaces") || "[]");
// }

// function saveVisited(name) {
//     const visited = loadVisited();
//     if (!visited.includes(name)) {
//         visited.push(name);
//         localStorage.setItem("visitedPlaces", JSON.stringify(visited));
//     }
// }

// function getNextLocation() {
//     const visited = loadVisited();
//     return locations.find(loc => !visited.includes(loc.name));
// }

// function setTarget(location) {
//     console.log(location);
//     if (targetMarker) map.removeLayer(targetMarker);
//     if (!location) {
//         //UI display when all locations are visited. 
//         return;
//     }

//     targetMarker = L.marker([location.lat, location.lon])
//         .addTo(map)
//         .bindPopup(location.name)
//         .openPopup();
// }

// const initialTarget = getNextLocation();
// setTarget(initialTarget);

// userMarker = L.marker([0, 0]).addTo(map);

// if ("geolocation" in navigator) {
//     navigator.geolocation.watchPosition((pos) => {
//         const userLat = pos.coords.latitude;
//         const userLon = pos.coords.longitude;

//         userMarker.setLatLng([userLat, userLon]);
//         map.setView([userLat, userLon]);

//         const currentTarget = getNextLocation();
//         if (!currentTarget) return;

//         const dist = getDistance(userLat, userLon, currentTarget.lat, currentTarget.lon);
//         //UI display the distance to the current target in m. 
//         // Ex:
//         // document.getElementById("info").textContent =
//         // `Distance to ${currentTarget.name}: ${dist.toFixed(1)} m`;


//         if (dist < 2 && !notified) {
//             notified = true;
//             alert(`Du har ankommit till ${currentTarget.name}`);
//             saveVisited(currentTarget.name);

//             //Trigger the next task here. (interview, view a video, answer a question etc...)

//             //Show the next location
//             const nextTarget = getNextLocation();
//             setTarget(nextTarget);
//             notified = false;
//         }

//     }, err => {
//         console.error("Error", err);
//     }, {
//         enableHighAccuracy: true,
//         maximumAge: 1000,
//         timeout: 10000
//     });
// }
