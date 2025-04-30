function renderMainPage() {
    if (document.querySelector("main")) {
        document.querySelector("main").remove();
    }
    const container = document.getElementById("container");
    let main = document.createElement("main");
    main.setAttribute("id", "mainPageContainer");
    main.classList.add("dynamicContent");
    container.appendChild(main);

    main.innerHTML = `
    <h1 id="senasteNytt">Senaste Nytt</h1>
    <div id="senasteNyttCards">
    </div>
    <h1 id="kartaTitel">Karta</h1>
    <div id="kartaCards">
        <div id="karta" class="card">
            <div id="kartaImg"></div>
            <div class="bottomCard">
                <h2>Karta</h2>
                <p>Testtext som ska vara undertitel</p>
            </div>
        </div>
    </div>
    <h1 id="lästaArtiklar">Lästa artiklar</h1>
    <div id="lästaArtiklarCards"></div>

    `;
    // if (!document.getElementById("alreadyRead")) {
    //     console.log("hej");
    //     let alreadyReadDiv = document.createElement("div");
    //     alreadyReadDiv.setAttribute("id", "alreadyRead");
    //     alreadyReadDiv.innerHTML = `
    //     <h1 id="lästaArtiklar">Lästa artiklar</h1>
    //     <div id="lästaArtiklarCards"></div>
    //     `
    //     container.appendChild(alreadyReadDiv);
    // }
    let cards = document.querySelectorAll(".card");
    cards.forEach(card => card.addEventListener("click", (event) => cardClick(event, card)));
}

//Creates a card that is added under Senaste Nytt
function createCard (id) {
    for (let card of gameCards) {
        if (card.id === id) {
            let cardContainer = document.getElementById("senasteNyttCards");
            cardContainer.innerHTML = `
            <div id="${card.divId}" class="card">
                <div id="senasteNyttImg"></div>
                <div class="bottomCard">
                    <h2>${card.titleText}</h2>
                    <p>${card.bottomText}</h2>
                </div>
            </div>
            `
        }
    }
    //jsonStructure
    //[{
    // "event": "grannen"?
    // "id": 1,
    // "divId": "grannen",
    // "titleText": "Title",
    // "bottomText": "Text"
    // }]

    //html to add a new card to #senasteNyttCards
    //cardInfo contains the necessary text info and picture src for the card
    let cards = document.querySelectorAll(".card");
    cards.forEach(card => card.addEventListener("click", (event) => cardClick(event, card)));
}

//Creates a card that is then added under lästa Artiklar
function createReadArticleCard (id) {
    console.log(id);
    let readCardContainer = document.getElementById("lästaArtiklarCards");
    for (let card of gameCards) {
        if (id === card.id) {
            // let readCardContainer = document.getElementById("lästaArtiklarCards");
            let cardDiv = document.createElement("div");
            cardDiv.setAttribute("id", card.divId);
            cardDiv.innerHTML = `
                 <div>
                     <h2>${card.titleText}</h2>
                     <p>${card.bottomText}</p>
                 </div>
            `
            readCardContainer.appendChild(cardDiv);
            let cardElement = document.getElementById(`${card.divId}`)
            cardElement.addEventListener("click", (event) => cardClick(event, cardElement));
        }
    }
}

//check what id the card has then renders the appropriate content
function cardClick(event, card) {
    checkId(card.id);
}

//Renders appropriate content depending on the id given
function checkId(id) {
    switch (id) {
        case "grannen":     
            interaction.grannen.interacted = true;        
            document.querySelector("main").remove();
            renderNavBar("Start");
            
            renderInterviewPage(interviewQuestions);
        return;
        case "newsPage":
            interaction.newsPage.interacted = true;
            document.querySelector("main").remove();
            renderNavBar("Start");

            renderNewsPageGranne();
        return;
        case "phusVideo1":

        return;
    } 
}
