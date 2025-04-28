function renderNavBar(firstDivText) {
    if (document.querySelector("nav")) {
        document.querySelector("nav").remove();
    }

    const container = document.getElementById("container");
    let navBar = document.createElement("nav");
    container.appendChild(navBar);

    navBar.innerHTML = `
        <div class="navDiv">
            <p id="start" class="navText">${firstDivText}</p>
        </div>
        <div class="navDiv">
            <p class="navText">Karta</p>
        </div>
        <div class="navDiv">
            <p class="navText">Artiklar</p>
        </div>
        <div class="navDiv" id="charactersNav">
            <p class="navText">Karaktärer</p>
        </div>
    `

    // if (document.getElementById("1").textContent == "start") {
    //     document.getElementById("1").classList.add("start");
    // }
    document.getElementById("charactersNav").addEventListener("click", displayDropDown);
    document.getElementById("start").addEventListener("click", start)
}

function displayDropDown(event) {
    if (document.getElementById("dropDownList")) {
        document.getElementById("dropDownList").remove();
        return;
    }
    renderDropDown();
}

function start(event) {
    if (event.target.textContent == "Start") {

        let dynamicContent = document.querySelectorAll(".dynamicContent");
        console.log(dynamicContent);
        dynamicContent.forEach(element => element.remove());

        renderMainPage();
        
        //checks weather card has been interacted with
        //if it hasnt renders those cards
        for (let inter in interaction) {
            if (!interaction[inter].interacted) {
                createCard(interaction[inter].id);
            } 
        }

        event.target.textContent = "Senaste";

        //checks what cards and articles has been interacted with
        //adds those cards under Lästa Artiklar
        for (let inter in interaction) {
            if (interaction[inter].interacted) {
                createReadArticleCard(interaction[inter].id);
            }
        }
    }
    console.log(event.target.textContent);
}