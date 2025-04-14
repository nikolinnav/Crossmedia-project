function renderNewsPageGranne() {
    const container = document.querySelector("#container");
    const newsPageContainer = document.createElement("div");
    newsPageContainer.id = "newsPageContainer";
    container.appendChild(newsPageContainer);

    let date = new Date().toLocaleDateString();;

    newsPageContainer.innerHTML = `
    <hr>
    <div id="header">
        <p>${date}</p>
    </div>
    <hr>
    <h1>BORGMÄSTAREN ÄR<br>SPÅRLÖST FÖRSVUNNEN!</h1>
    <div id="image"></div>
    <hr>
    <h2>Saknad under oklara omständigheter dagar före stundande komunval.</h2>
    <hr>
 
    <div id="flexContainer">
        <article id="quoteAndImage">
            <p>“Hon såg <b>inte</b> ut<br>som sig själv”</p>
            <div id="granneImage"></div>
        </article>

        <article id="text">
            <p>Stadens borgmästare, Pernilla Von Stjärnholm, har försvunnit under oklara omständigheter, bara dagar före det avgörande kommunvalet. Enligt uppgifter till Malmö Direkt ska hon senast ha setts tidigt i morse utanför sin bostad i de centrala delarna av staden.</p>
            <p>En granne, Anna Ivarsson, berättar om en ovanlig syn.</p>
            <p>- Hon såg inte ut som sig själv. Något allvarligt måste ha hänt, säger Anna till tidningen.</p>
            <p>Händelsen har lett till omfattande spekulationer på sociala medier. En del tror att det rör sig om en kidnappning, medan andra spekulerar i en politisk flykt, en intern konflikt inom stadshuset – eller till och med sabotage. I dagsläget är Annas observation vårt enda spår.</p>
        </article>
    </div>
    `

    const footer = document.createElement("footer");
    container.appendChild(footer);

    const rect = document.createElement("div");
    rect.id = "rect";
    footer.appendChild(rect);

    const text = document.createElement("p");
    rect.appendChild(text);
    text.textContent = "www.malmodirekt.se";
}