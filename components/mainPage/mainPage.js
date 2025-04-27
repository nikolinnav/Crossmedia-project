function renderMainPage() {
    const container = document.getElementById("container");
    let main = document.createElement("main");
    main.setAttribute("id", "mainPageContainer");
    container.appendChild(main);

    main.innerHTML = `
    <h1 id="senasteNytt">Senaste Nytt</h1>
    <div id="senasteNyttCards">
        <div class="card">
            <div id="senasteNyttImg"></div>
            <div class="bottomCard">
                <h2>Här sprids den virala videon på borgmästaren</h2>
                <p>Lorem Ipsum Dolor</p>
            </div>
        </div>
    </div>
    <h1 id="kartaTitel">Karta</h1>
    <div id="kartaCards">
        <div class="card">
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