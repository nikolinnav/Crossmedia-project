function renderTitle() {
    container = document.getElementById("container");
    let titleDiv = document.createElement("div");
    container.appendChild(titleDiv);

    titleDiv.innerHTML = `
    <h1 id="gameTitle">Sanning Eller Skvaller</h1>
    `
}