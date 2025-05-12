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
        
        //checks if card has been interacted with
        //if it hasnt renders those cards
        for (let inter in interaction) {
            if (interaction[inter].interacted) {
                console.log(inter + " " + interaction[inter].interacted);
                createReadArticleCard(interaction[inter].id);
            }
        }
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
        }

        if (fromKalender && interaction.kalender.clicked <= 1) {
            console.log("now Borgmästaren Hittad should render");
            fromKalender = false;
            event.target.textContent = "Senaste";
            createCard(7);
            return;
        }

        for (let inter in interaction) {
            console.log(inter + " " + interaction[inter].found);
            if (interaction[inter].found) {
                interaction[inter].found = false;
                console.log(inter + " " + interaction[inter].found);
                createCard(interaction[inter].id);
                return;
            }
        }

        event.target.textContent = "Senaste";
        // for (let inter in interaction) {
        //     if (!interaction[inter].interacted) {
        //         if (inter == "phus_video1" || inter == "artikel_assistent") {
        //             console.log(inter);
        //             console.log(interaction[inter].id);
        //             createCard(interaction[inter].id);
        //             return;
        //         } else if (inter == "kalender") {
        //             // if (interaction[inter].interacted) {
        //             //     createCard(7);
        //             //     return;
        //             }
        //         }
        //     } 
    }

      
        //checks what cards and articles has been interacted with
        //adds those cards under Lästa Artiklar
    console.log(event.target.textContent);
}