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


    const days = ["S", "M", "T", "O", "T", "F", "S"];

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

    for (i = 1; i <= daysInMonth; i++) {
        const dateDiv = document.createElement("div");
        dateDiv.className = "date";
        dateDiv.textContent = i;
        calBody.appendChild(dateDiv);
    }

}