function renderNavBar(firstDivText) {
    const container = document.getElementById("container");
    let navBar = document.createElement("nav");
    container.appendChild(navBar);

    navBar.innerHTML = `
        <div>
            <p>${firstDivText}</p>
        </div>
        <div>
            <p>Karta</p>
        </div>
        <div>
            <p>Artiklar</p>
        </div>
        <div>
            <p>Koder</p>
        </div>
    `
}