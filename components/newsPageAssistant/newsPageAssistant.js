function renderNewsPageAssistant() {
    let container = document.getElementById("container");
    let newsPageAssistantContainer = document.createElement("div");
    newsPageAssistantContainer.id = "newsPageAssistantContainer";
    newsPageAssistantContainer.classList.add("dynamicContent");
    container.appendChild(newsPageAssistantContainer);

    newsPageAssistantContainer.innerHTML = `
    <hr>
    <div id="header">
        <h1>MALMÖ DIREKT</h1>
        <p>${date}</p>
    </div>
    <hr>
    <h1>Assistenten vägrar kommentera försvinnandet</h1>
    `
}