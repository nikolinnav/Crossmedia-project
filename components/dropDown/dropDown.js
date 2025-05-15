function renderDropDown () {
    let nav = document.querySelector("nav");
    if (!nav) return;

    // Remove if it already exists to avoid duplicates
    if (document.getElementById("dropDownList")) {
        document.getElementById("dropDownList").remove();
    }

    let dropDownDiv = document.createElement("div");
    dropDownDiv.setAttribute("id", "dropDownList");

    nav.insertAdjacentElement("afterend", dropDownDiv); // safer than using parentElement
    dropDownDiv.innerHTML = `
        <div id="1"><p>Grannen</p></div>
        <div id="2"><p>Dottern</p></div>
        <div id="3"><p>Borgmästaren</p></div>
        <div id="4"><p>Motståndaren</p></div>
        <div id="5"><p>Assistenten</p></div>
    `;

    let characterDivs = dropDownDiv.querySelectorAll("div");
    for (let div of characterDivs) {
        div.addEventListener("click", chosenCharacter);
    }
}


function chosenCharacter(event) {
    //göra att dropdown menyn försvinner vid klick
    document.getElementById("dropDownList").remove();
    let targetId = event.target.id;
    for (let character of characterInfo) {
        if (targetId == character.id) {
            renderNavBar("Start");
            renderCharacterProfiles(character);
        }
    }

}