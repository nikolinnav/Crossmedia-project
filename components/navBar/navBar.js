function renderNavBar(firstDivText) {
    const container = document.getElementById("container");
    let navBar = document.createElement("nav");
    container.appendChild(navBar);

    navBar.innerHTML = `
        <div>
            <p class="navText">${firstDivText}</p>
        </div>
        <div>
            <p class="navText">Karta</p>
        </div>
        <div>
            <p class="navText">Artiklar</p>
        </div>
        <div>
            <p class="navText">Koder</p>
        </div>
    `
}