function renderMainPage() {
    const container = document.getElementById("container");
    let main = document.createElement("main");
    main.setAttribute("id", "mainPageContainer");
    container.appendChild(main);

    main.innerHTML = `
    <h1 id="senasteNytt">Senaste Nytt</h1>
    <div id="senasteNyttCards">
        <div class="card">
            <div>Image</div>
            <div class="bottomCard">
                <h2>Här sprids den virala videon på borgmästaren</h2>
                <p>TTest titel som är jättelång bara för att se hur det ser ut, TTest titel som är jättelång bara för att se hur det ser ut, TTest titel som är jättelång bara för att se hur det ser ut </p>
            </div>
        </div>
    </div>
    <h1 id="kartaTitel">Karta</h1>
    <div id="kartaCards">
        <div class="card">
            <div>Image</div>
            <div class="bottomCard">
                <h2>Test titel</h2>
                <p>Testtext som ska vara undertitel</p>
            </div>
        </div>
    </div>
    <h1 id="lästaArtiklar">Lästa artiklar</h1>
    <div id="lästaArtiklarCards">
        <divs>
            <div>
                <h2>Test titel</h2>
                <p>Testtext som ska vara undertitel</p>
            </div>
        </div>
    </div>
    `;
}