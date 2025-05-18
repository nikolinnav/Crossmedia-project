function renderNavBar(firstDivText) {
    console.log("now nav should be rendered");
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
        <div class="navDiv" id="kartaNav">
            <p class="navText">Karta</p>
        </div>
        <div class="navDiv" id="artiklarNav">
            <p class="navText">Artiklar</p>
        </div>
        <div class="navDiv" id="charactersNav">
            <p class="navText">Karaktärer</p>
        </div>
    `;
    document.getElementById("charactersNav").addEventListener("click", displayDropDown);
    document.getElementById("start").addEventListener("click", start);
    document.getElementById("kartaNav").addEventListener("click", function (){
        createMap();
    });
    document.getElementById("artiklarNav").addEventListener("click", function () {
        document.getElementById("lästaArtiklar").scrollIntoView({behavior: "smooth", block: "start"});
    })
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
        disableClickOnKarta();
        //checks if card has been interacted with
        //if it hasnt renders those cards
        for (let inter in interaction) {
            if (interaction[inter].interacted) {
                console.log(inter + " " + interaction[inter].interacted);
                createReadArticleCard(interaction[inter].id);
            } 
        }
        
        disableClickOnReadCards();
        let newCards = false;

        if (fromGrannen && interaction.grannen.clicked <= 1) {
            fromGrannen = false;
            event.target.textContent = "Senaste";
            createCard(2);
            return;
        }

        if (fromMotstandare && interaction.intervju_motstandare.clicked <= 1) {
            fromMotstandare = false;
            event.target.textContent = "Senaste";
            createCard(5);
            return;
        } else if (interaction.intervju_motstandare.clicked > 1) {
            newCards = false;
            enableClickOnReadCards();
        }

        if (fromKalender && interaction.kalender.clicked <= 1) {
            console.log("now Borgmästaren Hittad should render");
            fromKalender = false;
            event.target.textContent = "Senaste";
            createCard(7);
            return;
        } else if (interaction.kalender.clicked > 1) {
            newCards = false;
            enableClickOnReadCards();
        }

        console.log("kalender clicked: ", interaction.kalender.clicked);

        for (let inter in interaction) {
            console.log(inter + " " + interaction[inter].found);
            if (interaction[inter].found) {
                interaction[inter].found = false;
                console.log(inter + " " + interaction[inter].found);
                createCard(interaction[inter].id);
                newCards = true;
                return;
            }
        }

        console.log(newCards);
        if (!newCards) {
            enableClickOnReadCards();
            enableClickOnKarta();
        }
        event.target.textContent = "Senaste";
    }

      
        //checks what cards and articles has been interacted with
        //adds those cards under Lästa Artiklar
    console.log(event.target.textContent);
}