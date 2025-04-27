
function renderDropDown () {
    let container = document.querySelector("nav");
    let dropDownDiv = document.createElement("div");
    dropDownDiv.setAttribute("id", "dropDownList");
    container.parentElement.insertBefore(dropDownDiv, container.nextSibling);
    // container.append(dropDownDiv);
    dropDownDiv.innerHTML = `
    <div id="1">
        <p id="1">Grannen</p>
    </div>
    <div id="2">
        <p id="2">Dottern</p>
    </div>
    <div id="3">
        <p id="3">Borgmästaren</p>
    </div>
    <div id="4">
        <p id="4">Motståndaren</p>
    </div>
    <div id="5">
        <p id="5">Assistenten</p>
    </div>
    `;

    let characterDivs = dropDownDiv.querySelectorAll("div");
    for (let div of characterDivs) {
        div.addEventListener("click", chosenCharacter);
    }
}

function chosenCharacter(event) {
    //göra att dropdown menyn försvinner vid klick
    let targetId = event.target.id;
    for (let character of characterInfo) {
        if (targetId == character.id) {
            renderCharacterProfiles(character);
        }
    }

}