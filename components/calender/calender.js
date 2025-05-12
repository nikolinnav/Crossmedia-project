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
  calenderContainer.setAttribute("class", "dynamicContent");
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
  eventContainer.setAttribute("class", "dynamicContent");
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
      const dot = document.createElement("span");
      dateDiv.appendChild(dot);
      dateDiv.classList.add("hasEvent");

      dateDiv.addEventListener("click", function () {
        renderEventHeader(dateDiv.textContent, 2, eventContainer);
        let boxTitle = renderEvent("072-645 38 99", "10:00", "phoneNum", eventContainer);
        boxTitle.addEventListener("click", renderKeyPad);
        renderEvent("Möte med Angelica", "10:30", "none", eventContainer);
      });

    } else if (dateDiv.textContent === "4" || dateDiv.textContent === "18") {
      dateDiv.classList.add("hasEvent");
      const dot = document.createElement("span");
      dateDiv.appendChild(dot);
      dateDiv.addEventListener("click", function () {
        renderEventHeader(dateDiv.textContent, 1, eventContainer);
        renderEvent("Yoga pass", "19:30", "none", eventContainer);
      });

    } else if (dateDiv.textContent === "7") {
      dateDiv.classList.add("hasEvent");
      const dot = document.createElement("span");
      dateDiv.appendChild(dot);
      dateDiv.addEventListener("click", function () {
        renderEventHeader(dateDiv.textContent, 2, eventContainer);
        renderEvent("Campaign 2026 Revision", "09:30", "none", eventContainer);
        renderEvent("Öppen frågestund", "13:00", "none", eventContainer);
      });
    } else if (dateDiv.textContent === "13") {
      dateDiv.classList.add("hasEvent");
      const dot = document.createElement("span");
      dateDiv.appendChild(dot);
      dateDiv.addEventListener("click", function () {
        renderEventHeader(dateDiv.textContent, 2, eventContainer);
        renderEvent("Planera stadens budget", "10:00", "none", eventContainer);
        renderEvent("Lunch med Eva Ehrenros", "12:00", "none", eventContainer);
      });
    } else if (dateDiv.textContent === "17") {
      dateDiv.classList.add("hasEvent");
      const dot = document.createElement("span");
      dateDiv.appendChild(dot);
      dateDiv.addEventListener("click", function () {
        renderEventHeader(dateDiv.textContent, 1, eventContainer);
        renderEvent("Hämta Eva från flygplatsen", "17:45", "none", eventContainer);
      });
    }
  }
}

function renderEventHeader(date, num, parent) {
  const eventDate = document.createElement("p");
  eventDate.id = "eventDate";
  parent.innerHTML = "";
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

  <button class="call-button"><i class="fa-solid fa-phone fa-xs"></i></button>

  <div class="bottom-nav">
    <div>
      <div><i class="fa-solid fa-star fa-2xs"></i></div>
      <div>Favorites</div>
    </div>
    <div>
      <div><i class="fa-solid fa-clock fa-2xs"></i></div>
      <div>Recents</div>
    </div>
    <div>
      <div><i class="fa-solid fa-user fa-2xs"></i></div>
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
      <div><i class="fa-solid fa-voicemail fa-xs"></i></div>
      <div>Voicemail</div>
    </div>
  </div>
    `;

  const callButton = document.querySelector(".call-button");
  if (callButton) {
    callButton.addEventListener("click", renderCall);
  } else {
    console.warn("Call button not found");
  }

}

async function renderCall() {
  const container = document.querySelector("#container");
  container.innerHTML = "";

  const body = document.querySelector("body");
  body.style = "margin: 0";

  const callContainer = document.createElement("div");
  callContainer.id = "callContainer";
  container.appendChild(callContainer);
  callContainer.innerHTML = `
    <div id="outgoingCallView" class="call-view hidden">
  <div class="call-header">
    <div class="phone-number">072-645 38 99</div>
    <div class="call-status">calling...</div>
  </div>

  <div class="call-buttons">
    <div class="call-btn">
      <i class="fa-solid fa-microphone"></i>
      <div>mute</div>
    </div>
    <div class="call-btn">
      <i class="fa-solid fa-keyboard"></i>
      <div>keypad</div>
    </div>
    <div class="call-btn">
      <i class="fa-solid fa-volume-high"></i>
      <div>speaker</div>
    </div>
    <div class="call-btn disabled">
      <i class="fa-solid fa-plus"></i>
      <div>add call</div>
    </div>
    <div class="call-btn disabled">
      <i class="fa-solid fa-video"></i>
      <div>FaceTime</div>
    </div>
    <div class="call-btn">
      <i class="fa-solid fa-user"></i>
      <div>contacts</div>
    </div>
  </div>

  <button class="end-call-btn" onclick="endCall()"><i class="fa-solid fa-phone fa-xs"></i></button>
</div>

    `;

  await handleOutgoingCall("media/audio/voiceRecording.mp3", 19);
  body.style = "margin: 25px";

}

function handleOutgoingCall(audioSrc, durationInSeconds) {
  return new Promise((resolve) => {
    const callView = document.getElementById("outgoingCallView");
    let audio = null;
    let timeoutId = null;

    callView.classList.remove("hidden");
    audio = new Audio(audioSrc);
    audio.play().catch(() => {
      console.error("Failed to play audio");
    });

    // End the call automatically after duration
    timeoutId = setTimeout(() => {
      endCall();
    }, durationInSeconds * 1000);

    function endCall() {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }

      clearTimeout(timeoutId);
      callView.classList.add("hidden");

      document.body.style.margin = "25px"; // Reset margin
      renderCalender(4, 2025);

      resolve();
    }

    // User ends call manually
    callView.querySelector(".end-call-btn").onclick = endCall;
  });
}

