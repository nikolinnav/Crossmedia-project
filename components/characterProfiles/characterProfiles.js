function renderCharacterProfiles(characterInfo) {
    const container = document.getElementById("container");
    const characterProfileContainer = document.createElement("div");
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

function firstCharToUpper(string) {
    let firstCharUpper = string.charAt(0).toUpperCase();
    let slicedString = string.slice(1, string.length);

    let firstCharUpperCaseString = firstCharUpper + slicedString;
    return firstCharUpperCaseString;
}