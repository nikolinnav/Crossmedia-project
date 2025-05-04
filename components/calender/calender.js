function renderCalender(month, year) {
    const container = document.querySelector("#container");
    container.innerHTML = "";

    const title = document.createElement("h2");
    title.id = "calTitle";
    title.textContent = "Sanning eller Skvaller";
    container.appendChild(title);

    renderNavBar("Start");

    const calenderContainer = document.createElement("div");
    calenderContainer.id = "calenderContainer";
    container.appendChild(calenderContainer);

    const calHeader = document.createElement("div");
    calHeader.id = "calHeader";
    calHeader.textContent = "Maj 2025";
    calenderContainer.appendChild(calHeader);

    const calBody = document.createElement("div");
    calBody.id = "calBody";
    calenderContainer.appendChild(calBody);


    const days = ["S", "M", "T", "O", "T", "F", "L"];


    for (const day of days) {
        const dayDiv = document.createElement("div");
        dayDiv.className = "day";
        dayDiv.textContent = day;
        calBody.appendChild(dayDiv);
    }

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();


    for (let i = 0; i < firstDay; i++) {
        const empty = document.createElement("div");
        calBody.appendChild(empty);
    }


    const eventContainer = document.createElement("div");
    eventContainer.id = "eventContainer";
    container.appendChild(eventContainer);

    //Get the today's date
    const today = new Date();
    const isToday = today.getFullYear() === 2025 && today.getMonth() === 4;

    for (i = 1; i <= daysInMonth; i++) {
        const dateDiv = document.createElement("div");
        dateDiv.className = "date";
        dateDiv.textContent = i;
        calBody.appendChild(dateDiv);

        if (isToday && i === today.getDate()) {
            dateDiv.classList.add("today");
            renderEventHeader(dateDiv.textContent, 2, eventContainer);
            let boxTitle = renderEvent("072-645 38 99", "10:00", "phoneNum", eventContainer);
            boxTitle.addEventListener("click", renderKeyPad);

        }
    }



}

function renderEventHeader(date, num, parent) {
    const eventDate = document.createElement("p");
    eventDate.id = "eventDate";
    parent.appendChild(eventDate);
    eventDate.textContent = `${date} Maj`;

    const numOfEvents = document.createElement("p");
    numOfEvents.id = "numOfEvents";
    parent.appendChild(numOfEvents);
    numOfEvents.textContent = eventsNum(num);
}

function eventsNum(num) {
    switch (num) {
        case 1:
            return "En aktivitet";
            break;
        case 2:
            return "Två aktiviteter";
            break;

        default:
            return "Inga aktiviteter"
    }
}

function renderEvent(title, time, styleClass, parent) {

    const box = document.createElement("div");
    box.id = "eventBox";
    parent.appendChild(box);

    const boxTitle = document.createElement("p");
    boxTitle.id = "boxTitle";
    boxTitle.classList.add(styleClass);
    boxTitle.textContent = title;
    box.appendChild(boxTitle);

    const boxTime = document.createElement("p");
    boxTime.id = "boxTime";
    boxTime.textContent = time;
    box.appendChild(boxTime);

    return boxTitle;

}

function renderKeyPad() {
    const container = document.querySelector("#container");
    container.innerHTML = "";

    const body = document.querySelector("body");
    body.style = "margin: 0";

    const dialContainer = document.createElement("div");
    dialContainer.id = "dialContainer";
    container.appendChild(dialContainer);
    dialContainer.innerHTML = `
    <div class="number-display" id="numberDisplay">072-645 38 99</div>

  <div class="dial-container" id="keypad">
    <button class="dial-button" data-key="1">1</button>
    <button class="dial-button" data-key="2">2<span>ABC</span></button>
    <button class="dial-button" data-key="3">3<span>DEF</span></button>
    <button class="dial-button" data-key="4">4<span>GHI</span></button>
    <button class="dial-button" data-key="5">5<span>JKL</span></button>
    <button class="dial-button" data-key="6">6<span>MNO</span></button>
    <button class="dial-button" data-key="7">7<span>PQRS</span></button>
    <button class="dial-button" data-key="8">8<span>TUV</span></button>
    <button class="dial-button" data-key="9">9<span>WXYZ</span></button>
    <button class="dial-button" data-key="*">*</button>
    <button class="dial-button" data-key="0">0<span>+</span></button>
    <button class="dial-button" data-key="#">#</button>
  </div>

  <button class="call-button">&#128222;</button>

  <div class="bottom-nav">
    <div>
      <div>&#9733;</div>
      <div>Favorites</div>
    </div>
    <div>
      <div>&#128336;</div>
      <div>Recents</div>
    </div>
    <div>
      <div>&#128100;</div>
      <div>Contacts</div>
    </div>
    <div class="highlight">
      <div class="dot-grid">
        <div class="dot"></div><div class="dot"></div><div class="dot"></div>
        <div class="dot"></div><div class="dot"></div><div class="dot"></div>
        <div class="dot"></div><div class="dot"></div><div class="dot"></div>
      </div>
      <div>Keypad</div>
    </div>
    <div>
      <div>&#128222;</div>
      <div>Voicemail</div>
    </div>
  </div>
    `;
}

