function renderNewsPageGranne() {
    const container = document.querySelector("#container");
    container.innerHTML = "";
    
    if (interaction.newsPage.clicked > 0) {
        console.log("Now nav and title should render");
        renderTitle();
        renderNavBar("Start");
    }
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
    <h2>Saknad under oklara omständigheter dagar före stundande kommunval.</h2>
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

    if (interaction.newsPage.clicked > 0) {
        newsPageContainer.style.pointerEvents = "none";
    } else {

        newsPageContainer.addEventListener("click", render)
    }
}

function renderSmygbilderArticle() {
    const container = document.querySelector("#container");
    container.innerHTML = "";
    renderTitle();
    renderNavBar("Start");
    
    const newsPageContainer = document.createElement("div");
    newsPageContainer.id = "newsPageContainer";
    container.appendChild(newsPageContainer);
    newsPageContainer.classList.add("dynamicContent");

    let date = new Date().toLocaleDateString();


    newsPageContainer.innerHTML = `
    <hr>
    <div id="header">
        <h1>MALMÖ DIREKT</h1>
        <p>${date}</p>
    </div>
    <hr>
    <h1>BORGMÄSTAREN PÅ BILD?<br>NYA LEDTRÅDAR I FÖRSVINNANDET</h1>
    <div id="image2"></div>
    <hr>
    <h2>Malmöbor spekulerar efter nya smygbilder – kan det vara Von Stjärnholm?</h2>
    <hr id="lastHR">
    
    <p><i>Har någon sett Pernilla Von Stjärnholm?</i> Efter dagens ovisshet kan nya bilder tyda på att Malmös borgmästare fortfarande befinner sig i staden – men exakt var är fortfarande ett mysterium.</p>
    <div class="margin"></div>
    <p>Under tisdagskvällen mottog redaktionen flera bilder från en anonym avsändare. De visar en kvinna med slående likhet med borgmästaren i en okänd miljö. Bilderna är tagna i smyg och av låg kvalitet, men detaljer som klädstil, kroppsspråk och frisyr pekar på att det mycket väl kan röra sig om Von Stjärnholm.</p>
    <div class="margin"></div>
    <p>Miljön på bilderna är svår att identifiera. Tunga textilier, dämpad belysning och vad som ser ut att vara en metallskylt med bokstäver i bakgrunden har väckt spekulationer bland allmänheten. </p>
    <div class="margin"></div>
    <p>Polisen har ännu inte kommenterat bilderna, och stadens presstjänst hänvisar till pågående efterforskningar. Tipsaren har valt att vara anonym och lämnade endast ett kort meddelande:</p>
    <div class="margin"></div>
    <p id="red">“Staden sover aldrig. Men ibland behöver den som leder den göra det.”</p>
    `;

    const footer = document.createElement("footer");
    footer.classList.add("dynamicContent");
    container.appendChild(footer);

    const rect = document.createElement("div");
    rect.id = "rect";
    footer.appendChild(rect);

    const text = document.createElement("p");
    rect.appendChild(text);
    text.textContent = "www.malmodirekt.se";

}

function renderAssistantArticle() {
    const container = document.querySelector("#container");
    container.innerHTML = "";

    renderTitle();
    renderNavBar("Start");

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
    <h1>ASSISTENTEN VÄGRAR KOMMENTERA FÖRSVINNANDET</h1>
    <div id="image3"></div>
    <hr>
    <h2>Den virala videon skapar starka känslor -Vad försöker assistenten dölja</h2>
    <hr id="lastHR">

    <p><i>Spekulationerna kring den försvunne borgmästaren fortsätter att växa. Under förmiddagen konfronterades hennes assistent av journalisten Elin – men svaren uteblev.</i></p>
    <div class="margin"></div>
    <p>I ett viralt videoklipp som nu sprids snabbt på sociala medier ses borgmästarens assistent bli konfronterad med frågor. Men det enda svar som ges är detsamma, om och om igen:<br>
    – Inga kommentarer.</p>
    <div class="margin"></div>
    <p>Klippet visar hur assistenten stressat försöker undvika kamerorna, samtidigt som hon gång på gång upprepar sin replik. Journalisten Elin ställer frågan "Vart befinner sig borgmästaren?" – men inga svar ges.</p>
    <div class="margin"></div>
    <p>Videon har väckt stor uppmärksamhet och oron kring vad som hänt med stadens borgmästare ökar. I kommentarsfälten spekuleras det vilt, och flera ifrågasätter om staden har något att dölja. Stadsledningskontoret har ännu inte gått ut med någon officiell kommentar om borgmästarens plötsliga frånvaro och frågan kvarstår: Vart är borgmästaren?</p>
    <div class="margin"></div>
    <p id="red2">Besök journalistens TikTok för att se det fullständiga klippet: elinjournalist</p>
    `;

    const footer = document.createElement("footer");
    footer.classList.add("dynamicContent");
    container.appendChild(footer);

    const rect = document.createElement("div");
    rect.id = "rect";
    footer.appendChild(rect);

    const text = document.createElement("p");
    rect.appendChild(text);
    text.textContent = "www.malmodirekt.se";


}

function renderBackgroundArticle() {
    const container = document.querySelector("#container");
    container.innerHTML = "";
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
    articleContainer.addEventListener("click", granneClick);
}

function renderInstructions() {
    const container = document.querySelector("#container");
    const body = document.querySelector("body");
    body.style = "margin:0";
    const instBackground = document.createElement("div");
    container.appendChild(instBackground);
    instBackground.id = "instBackground";

    instBackground.innerHTML = `
    <h1 id="instHeader">INSTRUKTIONER</h1>
    <div id="instContainer"> 
        <p>UTRUSTNING:</p>
        <p>Smartphone, Instagramkonto, TikTok-konto</p>
        <p>Malmös borgmästare är försvunnen och din uppgift är att följa olika ledtrådar för att ta reda på sanningen kring försvinnandet. Under spelets gång får du olika ledtrådar i form av nyhetsartiklar, ljudinspelningar, bilder och videos. Var noggrann när du granskar ledtrådarna, de innehåller viktig information om vart du ska ta dig för att komma vidare i spelet. Se vilka platser som visas på ledtrådarna för att veta vart du ska gå här näst. Nya ledtrådar kommer ges i form av notiser som du hittar i huvudmenyn.
        Tillåt att webbläsaren använder din plats. Ladda inte om eller stäng ner sidan, lås inte mobilen och stänga av batterisparläget.
        </p>
        <p>FUNKTIONER</p>
        <ol>
            <li>Start: Här hittar du huvudmenyn.</li>
            <li>Karta: Ta hjälp av funktionen “karta” för att säkerställa att du tagit dig till rätt platser.</li>
            <li>Artiklar: En samlad sida för tidigare artiklar.</li>
            <li>Karaktärer: Använd funktionen “karaktärer” för att återgå till personerna du möter i spelet och bilda dig en uppfattning om hur de är.</li>
            <li>QR koder: vid två tillfällen i spelet behöver du skanna en QR-kod för att komma vidare. Mer instruktioner angående detta kommer ges under spelets gång.</li>
        </ol>

    </div>
    `;

    instBackground.addEventListener("click", instructionsClick)
}

function renderLastArticle() {
    const container = document.getElementById("container");
    container.innerHTML = "";
    const lastArticleContainer = document.createElement("div");
    container.appendChild(lastArticleContainer);
    lastArticleContainer.id = "lastArticle";

    let date = new Date().toLocaleDateString();;

    lastArticleContainer.innerHTML = `
    <hr id="lastArticleHr">
    <div id="header">
        <h1>MALMÖ DIREKT</h1>
        <p>${date}</p>
    </div>
    <hr>
    <h1 id="lastArticleTitle">BORGMÄSTAREN ÄR HITTAD!</h1>
    <div id="image4"></div>
    <hr>
    <h2 id="lastArticleH2">"Jag har bara varit ledig och behövde andas lite"</h2>
    <hr id="lastHR">

    <div id="flexContainer">
    <article id="quoteAndImage">
        <p>“Hon såg <b>inte</b> ut<br>som sig själv”</p>
        <div id="lastArticleImage"></div>
    </article>

    <article id="text">
        <p id="lastArticleFirstP"> dagens digitala värld sprids nyheter och rykten snabbare än någonsin speciellt på sociala medier. 
        Det som delas kan ibland vara sant, ibland en feltolkning och ibland rent skvaller. 
        Därför är det viktigare än någonsin att vara källkritisk. Fundera över: 
        Vem ligger bakom informationen? Finns det flera trovärdiga källor som bekräftar det som påstås? 
        Är innehållet vinklat för att väcka starka känslor snarare än att informera? 
        Att stanna upp och granska information innan vi delar den vidare är avgörande för att motverka ryktesspridning och desinformation. 
        På nätet är det inte alltid sanningen som hörs högst.
        Vi hoppas att detta spel uppmanar er att vara källkritiska och kolla upp informationen innan ni delar den vidare!.
        </p>

        <p id="lastArticleBold">Vi hoppas att detta spel uppmanar er att vara källkritiska och kolla upp informationen innan ni delar den vidare!</p>
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
}


function render(event) {
    if (!document.querySelector("nav")) {

        if (interaction.newsPage.interacted) {
            console.log("interacted: " + interaction.newsPage.interacted)
            document.getElementById("newsPageContainer").remove();
            document.querySelector("footer").remove();
            renderTitle();
            renderNavBar("Senaste");
            renderMainPage();

            for (let inter in interaction) {
                if (interaction[inter].interacted) {
                    createReadArticleCard(interaction[inter].id);
                }
            }

            for (let inter in interaction) {
                if(!interaction[inter].interacted) {
                    createCard(interaction[inter].id);
                    return;
                }
            }
        } else {
            document.getElementById("newsPageContainer").remove();
            document.querySelector("footer").remove();
            renderTitle();
            renderNavBar("Senaste");
            renderMainPage();
            startGeolocationWatcher();
            createReadArticleCard(0);
            interaction.newsPage.interacted = true;
            interaction.newsPage.clicked++;
            console.log(interaction.newsPage.interacted);
        }
    }
} 

function granneClick(event) {
    document.getElementById("articleContainer").remove();
    renderNewsPageGranne();
}

function instructionsClick(event) {
    document.getElementById("instBackground").remove();
    renderBackgroundArticle();
}