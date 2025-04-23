function renderNavBar(firstDivText) {
    const container = document.getElementById("container");
    let navBar = document.createElement("nav");
    container.appendChild(navBar);

    navBar.innerHTML = `
        <div class="navDiv">
            <p class="navText">${firstDivText}</p>
        </div>
        <div class="navDiv">
            <p class="navText">Karta</p>
        </div>
        <div class="navDiv">
            <p class="navText">Artiklar</p>
        </div>
        <div class="navDiv">
            <p class="navText">Koder</p>
        </div>
    `
}