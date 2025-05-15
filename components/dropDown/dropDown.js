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
        <div id="1"><p id="1">Grannen</p></div>
        <div id="2"><p id="2">Dottern</p></div>
        <div id="3"><p id="3">Borgmästaren</p></div>
        <div id="4"><p id="4">Motståndaren</p></div>
        <div id="5"><p id="5">Assistenten</p></div>
    `;

    let characterDivs = dropDownDiv.querySelectorAll("div");
    for (let div of characterDivs) {
        div.addEventListener("click", chosenCharacter);
    }
}


function chosenCharacter(event) {
    //göra att dropdown menyn försvinner vid klick
    console.log("hej");
    console.log(event.target)
    document.getElementById("dropDownList").remove();
    let targetId = event.target.id;
    for (let character of characterInfo) {
        console.log(character.id);
        if (targetId == character.id) {
            console.log(targetId);
            renderNavBar("Start");
            renderCharacterProfiles(character);
        }
    }

}