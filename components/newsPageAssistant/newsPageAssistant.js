function renderNewsPageAssistant() {
    let container = document.getElementById("container");
    let newsPageAssistantContainer = document.createElement("div");
    newsPageAssistantContainer.id = "newsPageAssistantContainer";
    newsPageAssistantContainer.classList.add("dynamicContent");
    container.appendChild(newsPageAssistantContainer);

    newsPageAssistantContainer.innerHTML = `
    <hr>
    <div id="header">
        <h1>MALMÖ DIREKT</h1>
        <p></p>
    </div>
    <hr>
    <h1 id="assistantH1" class="assistantHeaders">Assistenten vägrar kommentera försvinnandet</h1>
    <div id="assistantImage"></div>
    <hr>
    <h2 class="assistantHeaders" >Den virala videon skapar starka känslor -Vad försöker assistenten dölja</h2>
    <hr>
    <article id="assistantText">
        <p>
        <span id="introText">Spekulationerna kring den försvunne borgmästaren fortsätter att växa. 
        Under förmiddagen konfronterades hennes assistent av journalisten Elin – men svaren uteblev.</span> 
        </p>

        <p>
        I ett viralt videoklipp som nu sprids snabbt på sociala medier ses borgmästarens assistent bli konfronterad med frågor. 
        Men det enda svar som ges är detsamma, om och om igen:
        <br>– Inga kommentarer.
        </p>

        <p>
        Klippet visar hur assistenten stressat försöker undvika kamerorna, samtidigt som hon gång på gång upprepar sin replik. 
        Journalisten Elin ställer frågan "Vart befinner sig borgmästaren?" – men inga svar ges.
        </p>
        
        <p>
        Videon har väckt stor uppmärksamhet och oron kring vad som hänt med stadens borgmästare ökar. 
        I kommentarsfälten spekuleras det vilt, och flera ifrågasätter om staden har något att dölja. 
        Stadsledningskontoret har ännu inte gått ut med någon officiell kommentar om borgmästarens plötsliga frånvaro och frågan kvarstår: Vart är borgmästaren?
        </p>

        <p id="redText">
        Besök journalistens TikTok för att se det fullständiga klippet: elinjournalist
        </p>
    </article>
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

    // newsPageContainer.addEventListener("click", render)
}