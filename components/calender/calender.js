function renderCalender(month, year) {
    const container = document.querySelector("#container");
    container.innerHTML = "";

    const title = document.createElement("h2");
    title.id = "calTitle";
    title.textContent = "Malmö Direkt";
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
    const isToday = today.getFullYear() === 2025 && today.getMonth() === 3;

    for (i = 1; i <= daysInMonth; i++) {
        const dateDiv = document.createElement("div");
        dateDiv.className = "date";
        dateDiv.textContent = i;
        calBody.appendChild(dateDiv);

        if (isToday && i === today.getDate()) {
            dateDiv.classList.add("today");
            dateDiv.addEventListener("click", () => {
                
            });
        }
    }

  
    
}

function renderEventHeader(date, num, parent) {
    const eventDate = document.createElement("p");
    eventDate.id = "EventDate";
    parent.appendChild(eventDate);
    eventDate.textContent = `${date} Maj`;

    const numOfEvents = document.createElement("p");
    numOfEvents.id = "numOfEvents";
    parent.appendChild(numOfEvents);
    numOfEvents.textContent = numOfEvents(num);
}

function numOfEvents(num) {
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

function renderEvent(title, time, numOfBoxes, parent) {
    for (let i = 1; i <= numOfBoxes; i++) {
        const box = document.createElement("div");
        box.id = "eventBox";
        parent.appendChild(box);

        const boxTitle = document.createElement("p");
        boxTitle.id = "boxTitle";
        boxTitle.textContent(title);
        box.appendChild(boxTitle);

        const boxTime = document.createElement("p");
        boxTime.id = "boxTime";
        boxTime.textContent(time);
        box.appendChild(boxTime);
    }
}

