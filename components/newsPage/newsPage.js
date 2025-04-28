function renderNewsPageGranne() {
    const container = document.querySelector("#container");
    const newsPageContainer = document.createElement("div");
    newsPageContainer.id = "newsPageContainer";
    container.appendChild(newsPageContainer);
    newsPageContainer.classList.add("dynamicContent");

    let date = new Date().toLocaleDateString();;

    newsPageContainer.innerHTML = `
    <hr>
    <div id="header">
        <h1>MALMÖ DIREKT</h1>
        <p>${date}</p>
    </div>
    <hr>
    <h1>BORGMÄSTAREN ÄR<br>SPÅRLÖST FÖRSVUNNEN!</h1>
    <div id="image"></div>
    <hr>
    <h2>Saknad under oklara omständigheter dagar före stundande komunval.</h2>
    <hr id="lastHR">
 
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
    footer.classList.add("dynamicContent");
    container.appendChild(footer);

    const rect = document.createElement("div");
    rect.id = "rect";
    footer.appendChild(rect);

    const text = document.createElement("p");
    rect.appendChild(text);
    text.textContent = "www.malmodirekt.se";

    newsPageContainer.addEventListener("click", render)
}


function renderBackgroundArticle() {
    const container = document.querySelector("#container");
    const articleContainer = document.createElement("div");
    container.appendChild(articleContainer);
    articleContainer.id = "articleContainer";

    articleContainer.innerHTML = ` 
        <h2>SANNING ELLER SKVALLER SANNING ELLER SKVALLER SANNING ELLER SKVALLER SANNING ELLER SKVALLER SANNING ELLER SKVALLER SANNING ELLER SKVALLER SANNING ELLER SKVALLER</h2>
            <div id="img"></div>
                <div id="background">
                    <p><b>BAKGRUND</b></p>
                    <p>I takt med den digitala förändringen har informationsflödet blivit snabbare än någonsin. Samtidigt har det blivit allt svårare att avgöra vilka källor som är trovärdiga. Rykten, spekulationer och felaktig information kan spridas på nolltid och kan få allvarliga konsekvenser.</p>
                    <p> Plötsligt skakas samhället om när nyheten som Borgmästarens försvinnande slår ner. Sociala medier exploderar med spekulationer och rykten där vissa menar att hon har flytt landet, medan andra hävdar att hon har blivit kidnappad av sin politiska motståndare. Vad är sant? </p>
                </div>
                <div id="separator"></div>
                <div id="uppgift">
                    <p><b>DIN UPPGIFT</b></p>
                    <p>Du axlar rollen som journalist och kastas ut i Borgmästarens mystiska försvinnande. I din roll som journalist behöver du kritiskt granska de digitala ledtrådarna och ta dig till rätt platser för att lösa gåtan och hitta borgmästaren.</p>
                    <p>Källkritik är ditt viktigaste verktyg. Varje ledtråd kräver eftertanke. Sanningen hittar du först när du vågar ifrågasätta det du ser. </p>   
                </div>
                <div id="logo"></div>
    `

}

function render(event) {
    document.getElementById("newsPageContainer").remove();
    document.querySelector("footer").remove();
    renderTitle();
    renderNavBar("Senaste");
    renderMainPage();
    createCard(1);
    createReadArticleCard(0);
    interaction.newsPage.interacted = true;
    // interacted.newsPage = true;
    // console.log(interacted);
} 