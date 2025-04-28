function renderCharacterProfiles(characterInfo) {
    // if (document.querySelector("main")) {
    //     document.querySelector("main").remove();
    // };

    // if (document.querySelector("#characterContainer")) {
    //     document.querySelector("#characterContainer").remove();
    // }

    // if (document.querySelector(""))
    let dynamicContent = document.querySelectorAll(".dynamicContent");
    dynamicContent.forEach(e => e.remove());
    const container = document.getElementById("container");
    const characterProfileContainer = document.createElement("div");

    characterProfileContainer.setAttribute("id", "characterContainer");
    characterProfileContainer.classList.add("dynamicContent");
    container.appendChild(characterProfileContainer);
    characterProfileContainer.innerHTML = `
    <div id="lineTop">
        <h1 id="charTitle">${characterInfo.character}</h1>
    </div>
    <div id="characterContainer">
        <img id="charImg" alt="A picture of ${characterInfo.character}"src="${characterInfo.image}"></img>
        <div id="characterInfo">
        </div>
    </div>
    <div id="lineBottom">
        <div id="colorBar"></div>
    </div>
    `;

    let characterInfoDiv = document.getElementById("characterInfo");
    for (let character in characterInfo) {
        if (character == "id") {
            continue;
        } 

        if (character == "image") {
            continue;
        }  

        let spanText = firstCharToUpper(character);
        console.log(characterInfo[character]);
        let p = document.createElement("p");

        p.innerHTML = `<span>${spanText}:</span> ${characterInfo[character]}`;
        characterInfoDiv.appendChild(p);
    }
}

//maybe add a logic folder and paste function in file there
function firstCharToUpper(string) {

    let firstCharUpper = string.charAt(0).toUpperCase();
    let slicedString = string.slice(1, string.length);

    let firstCharUpperCaseString = firstCharUpper + slicedString;
    return firstCharUpperCaseString;
}