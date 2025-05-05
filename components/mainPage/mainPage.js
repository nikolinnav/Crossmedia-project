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
            cardDiv.setAttribute("class", "card");
            cardDiv.innerHTML = `
                 <div>
                     <h2>${card.titleText}</h2>
                     <p>${card.bottomText}</p>
                 </div>
            `
            readCardContainer.appendChild(cardDiv);
            let cardElement = document.getElementById(`${card.divId}`);
            console.log(cardElement);
            cardElement.addEventListener("click", (event) => cardClick(event, cardElement));
            // if (link) {
            //     window.open(link, `_blank`);
            // }
        }
    }
}

//check what id the card has then renders the appropriate content
function cardClick(event, card) {
    console.log(card.id);
    checkId(card.id);
}

//Renders appropriate content depending on the id given
function checkId(id) {
    switch (id) {
        case "grannen":     
            interaction.grannen.interacted = true;        
            document.querySelector("main").remove();
            renderNavBar("Start");
            
            renderInterviewPage(interviewQuestions[0], "Intervjua Grannen");
            break;
        case "newsPage":
            interaction.newsPage.interacted = true;
            document.querySelector("main").remove();
            renderNavBar("Start");

            renderNewsPageGranne();
            break;
        case "phusVideo1":
            interaction.phus_video1.interacted = true;

            createReadArticleCard(interaction.phus_video1.id);
            window.open("https://vm.tiktok.com/ZNd6JKpGB/", `_blank`);

            // renderMainPage();
           let phusElement = document.getElementById(id);
            phusElement.remove(); 

            createCard(3);

            break;
        case "vilseledd":
            interaction.vilseledd.interacted = true;

            createReadArticleCard(interaction.vilseledd.id);
            window.open("https://www.instagram.com/lisavonstjarnholm?igsh=MWpudzZwejFxNHYzaA==", `_blank`);

            let vilseleddElement = document.getElementById(id);
            vilseleddElement.remove();
            createCard(4);
            //ska öppna instagram igen

            break;
        case "intervjuMotstandare":
            interaction.intervju_motstandare.interacted = true;
            document.querySelector("main").remove();
            renderNavBar("Start");

            renderInterviewPage(interviewQuestions[1], "Intervjua Assistenten");
            break;

        case "artikelAssistent":
            interaction.artikel_assistent.interacted = true;
            renderAssistantArticle();

            break;
        case "kalender":
            interaction.kalender.interacted = true;
            document.querySelector("main").remove();
            renderNavBar("Start");

            renderCalender(5, 2025);
            break;
        
        case "borgmastareHittad":
            interaction.borgmastaren_hittad.interacted = true;
            break;
        
    } 
}
