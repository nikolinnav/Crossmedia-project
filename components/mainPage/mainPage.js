function renderMainPage() {
    const container = document.getElementById("container");
    let main = document.createElement("main");
    main.setAttribute("id", "mainPageContainer");
    container.appendChild(main);

    main.innerHTML = `
    <h1 id="senasteNytt">Senaste Nytt</h1>
    <div id="senasteNyttCards>
        <div>
            <div>Image</div>
            <div>
                <h2>Test titel</h2>
                <p>Testtext som ska vara undertitel</p>
            </div>
        </div>
    </div>
    <h1 id="kartaTitel">Karta</h1>
    <div id="kartaCards">
        <div>
            <div>Image</div>
            <div>
                <h2>Test titel</h2>
                <p>Testtext som ska vara undertitel</p>
            </div>
        </div>
    </div>
    <h1 id="lästaArtiklar">Lästa artiklar</h1>
    <div id="lästaArtiklarCards">
        <div>
            <div>Image</div>
            <div>
                <h2>Test titel</h2>
                <p>Testtext som ska vara undertitel</p>
            </div>
        </div>
    </div>
    `
}