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
    // console.log("currently newCards is ", newCards);
    // if (!newCards) {
    //     enableClickOnKarta();
    // }
    let cards = document.querySelectorAll(".card");
    cards.forEach(card => card.addEventListener("click", (event) => cardClick(event, card)));
}

//Creates a card that is added under Senaste Nytt
function createCard (id) {
    // newCards = true;
    for (let card of gameCards) {
        if (card.id === id) {
            // currentArticle = card.divId;
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

    let image = document.getElementById("senasteNyttImg");
    switch (id) {
        case 0:
            break;
        case 1:           
            break;
        case 2:
            setImage(image, "url(./media/images/phusbild.png");
            image.style.backgroundPosition = "center";
            break;
        case 3:
            setImage(image, "url(./media/profiles/dottern.jpg");
            break;
        case 4:
            setImage(image, "url(./media/profiles/motstandaren.jpg)");
            image.style.backgroundPosition = "center";
            break;
        case 5: 
            setImage(image,"url(./media/images/NyhetsartiklarThree.jpg)");
            // image.style.backgroundImage = "url(../../media/images/NyhetsartiklarThree.jpg)";
            break;
        case 6:
            setImage(image, "url(./media/images/kalender.jpg");
            // image.style.backgroundImage = "url("
            break;
        case 7:
            setImage(image, "url(./media/images/borgmastarePaBild.jpg)");
            break;
        case 8:
            setImage(image, "url(./media/newsPage/lastArticleMayor.jpg)");
            break;
        default:
            break;
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
    let cards = document.querySelectorAll("#senasteNyttCards .card");
    cards.forEach(card => card.addEventListener("click", (event) => cardClick(event, card)));
    
}

//Creates a card that is then added under lästa Artiklar
function createReadArticleCard (id,) {
    console.log(id);
    let readCardContainer = document.getElementById("lästaArtiklarCards");
    for (let card of gameCards) {
        if (id === card.id) {
            // let readCardContainer = document.getElementById("lästaArtiklarCards");
            let cardDiv = document.createElement("div");
            cardDiv.setAttribute("id", card.divId);
            cardDiv.setAttribute("class", "card");
            // card.classList.add(card.divId + "Read");a
            cardDiv.innerHTML = `
                 <div>
                     <h2>${card.titleText}</h2>
                     <p>${card.bottomText}</p>
                 </div>
            `
            readCardContainer.appendChild(cardDiv);
            let cardElement = document.getElementById(`${card.divId}`);
            console.log(cardElement);

            // console.log("now addEventListener should work");
            // if (!disableClick) {
            cardElement.addEventListener("click", (event) => cardClick(event, cardElement));
            // }


            // if (link) {
            //     window.open(link, `_blank`);
            // }
        }
    }
}

//check what id the card has then renders the appropriate content
function cardClick(event, card) {
    event.stopPropagation();
    console.log(card.id);
    checkId(card.id);
}

//Renders appropriate content depending on the id given
function checkId(id) {
    switch (id) {
        case "grannen":     
            interaction.grannen.interacted = true;
            interaction.grannen.clicked++;
            fromGrannen = true;
    
            document.querySelector("main").remove();
            renderNavBar("Start");

            renderInterviewPage(interviewQuestions[0], "Intervjua Grannen");
            break;
        case "newsPage":
            interaction.newsPage.interacted = true;
            document.querySelector("main").remove();
            renderNavBar("Start");

            renderInstructions()
            renderBackgroundArticle();
            enableClickOnKarta();
            // renderNewsPageGranne();
            break;
        case "phusVideo1":
            interaction.phus_video1.interacted = true;

            createReadArticleCard(interaction.phus_video1.id);
            enableClickOnReadCards();
            enableClickOnKarta();
            window.open("https://vm.tiktok.com/ZNd6JKpGB/", `_blank`);

            // renderMainPage();
           let phusElement = document.getElementById(id);
            phusElement.remove(); 

            // createCard(3);

            break;
        case "vilseledd":
            interaction.vilseledd.interacted = true;

            createReadArticleCard(interaction.vilseledd.id);
            enableClickOnReadCards();
            enableClickOnKarta();
            window.open("https://www.instagram.com/lisavonstjarnholm?igsh=MWpudzZwejFxNHYzaA==", `_blank`); 
            

            let vilseleddElement = document.getElementById(id);
            vilseleddElement.remove();
            // createCard(4);
            //ska öppna instagram igen

            break;
        case "intervjuMotstandare":
            interaction.intervju_motstandare.interacted = true;
            fromMotstandare = true;
            interaction.intervju_motstandare.clicked++;
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
            fromKalender = true;
            interaction.kalender.clicked++;

            renderCalender(4, 2025);
            break;
        
        case "borgmastarenHittad":
            interaction.borgmastaren_hittad.interacted = true;
            document.querySelector("main").remove();
            renderNavBar("Start");

            renderSmygbilderArticle();           
            break;
        case "sistaArtikel":
            interaction.sistaArtikel.interacted = true;
            document.querySelector("main").remove();
            renderLastArticle();
            break;
        case "karta":
            console.log("nu ska kartan öppnas");
            document.querySelector("main").remove();
            renderNavBar("Start");
            createMap();
            break;
        default:
            break;
    } 
}

function setImage (element, image) {
    element.style.backgroundImage = image;
}

//Granne intervjun ska skapas när man tar sig till grannen
//phus videon ska dyka upp direkt efter man besökt grannen
//Malmö live ska dyka upp på kartan efter man besökt grannen men inget ska dyka upp på mainpage
//Går användaren till BookABoat ska "vilseledd dyka upp"
//Går användaren till rådhuset ska intervjuMotstandare dyka upp
//Efter användaren har ringt samtalet i kalendern ska borgmastarenHittad artikeln dyka upp
//Efter användaren tagit sig till MJ's ska sista artikel dyka upp

//Kolla om senaste nytt är tomt. 
//Är det tomt ska man kunna klicka på artkiklarna i lästa Artiklar.
//Är det inte tomt ska man inte kunna klicka på artiklarna i lästa artiklar

function enableClickOnReadCards() {
    const readCards = document.querySelectorAll("#lästaArtiklarCards .card");
    console.log("Read Cards: ", readCards);

    for (let card of readCards) {
        card.style.pointerEvents = "auto";
        console.log(card.style.pointerEvents);
    }
}

function disableClickOnReadCards() {
    const readCards = document.querySelectorAll("#lästaArtiklarCards .card");
    console.log("now read cards should be disabled");
    console.log(readCards);
    for (let card of readCards) {
        card.style.pointerEvents = "none";
        console.log(card.style.pointerEvents);
    }

}

function enableClickOnKarta() {
    const karta = document.querySelector("#karta");
    karta.style.pointerEvents = "auto";

}

function disableClickOnKarta() {
    console.log("now karta should be disabled");
    const karta = document.querySelector("#karta");
    karta.style.pointerEvents = "none";
}