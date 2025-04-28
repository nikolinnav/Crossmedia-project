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
        <div id="grannen" class="card">
            <div id="senasteNyttImg"></div>
            <div class="bottomCard">
                <h2>Intervjua Grannen</h2>
                <p>Lorem Ipsum Dolor</p>
            </div>
        </div>
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
    <div id="lästaArtiklarCards">
        <div>
            <div>
                <h2>Test titel</h2>
                <p>Testtext som ska vara undertitel</p>
            </div>
        </div>
        <div>
            <div>
                <h2>Test titel</h2>
                <p>Testtext som ska vara undertitel</p>
            </div>
        </div>
        
    </div>
    `;
    let cards = document.querySelectorAll(".card");
    cards.forEach(card => card.addEventListener("click", (event) => cardClick(event, card)));

}//todo
//finish css and add functionality to start button

function createCard (cardInfo) {
    //html to add a new card to #senasteNyttCards
    //cardInfo contains the necessary text info and picture src for the card
}

function createReadArticleCard (cardInfo) {
    //html to create a read article card
    //adds cards to the #lästaArtiklar id after a user has interacted with a card
}

function cardClick(event, card) {
    //check what id the card has then renders the appropriate content
    console.log(card.id);
    console.log(event);
}

function checkId(id) {
    switch (id) {
        case "grannen":
            
        return;
    }
}
