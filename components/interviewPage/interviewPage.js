function renderInterviewPage(questions) {
    const container = document.getElementById("container");
    const div = document.createElement("div");
    div.setAttribute("id", "interviewContainer");

    div.innerHTML = `
    <div class="interviewImg"></div>
    <h2 class="interviewTitle">Intervjua Grannen</h2>

    <div class="interviewBoxesContainer">
        <div class="interviewBoxes">
            <p>${questions[0]}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                <path d="M0 2.27387C0 0.567007 1.82609 -0.518303 3.32538 0.297487L15.687 7.02369C17.2531 7.87579 17.2531 10.1242 15.687 10.9764L3.32538 17.7026C1.82609 18.5183 0 17.433 0 15.7262V2.27387Z" fill="#212121"/>
            </svg>             
        </div>
        <div class="bar"></div>

        <div class="interviewBoxes">
            <p>${questions[1]}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                <path d="M0 2.27387C0 0.567007 1.82609 -0.518303 3.32538 0.297487L15.687 7.02369C17.2531 7.87579 17.2531 10.1242 15.687 10.9764L3.32538 17.7026C1.82609 18.5183 0 17.433 0 15.7262V2.27387Z" fill="#212121"/>
            </svg>                     
        </div>
        <div class="bar"></div>

        <div class="interviewBoxes">
            <p>${questions[2]}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                <path d="M0 2.27387C0 0.567007 1.82609 -0.518303 3.32538 0.297487L15.687 7.02369C17.2531 7.87579 17.2531 10.1242 15.687 10.9764L3.32538 17.7026C1.82609 18.5183 0 17.433 0 15.7262V2.27387Z" fill="#212121"/>
            </svg>             
        </div>
        <div class="bar"></div>

        <div class="interviewBoxes">
            <p>${questions[3]}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                <path d="M0 2.27387C0 0.567007 1.82609 -0.518303 3.32538 0.297487L15.687 7.02369C17.2531 7.87579 17.2531 10.1242 15.687 10.9764L3.32538 17.7026C1.82609 18.5183 0 17.433 0 15.7262V2.27387Z" fill="#212121"/>
            </svg>              
        </div>
        <div class="bar"></div>

        <div class="interviewBoxes">
            <p>${questions[4]}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                <path d="M0 2.27387C0 0.567007 1.82609 -0.518303 3.32538 0.297487L15.687 7.02369C17.2531 7.87579 17.2531 10.1242 15.687 10.9764L3.32538 17.7026C1.82609 18.5183 0 17.433 0 15.7262V2.27387Z" fill="#212121"/>
            </svg>          
        </div>
        <div class="bar"></div>
    </div>    
    `;

    container.appendChild(div);
    let interviewBoxes = document.querySelectorAll(".interviewBoxes");
    for (let box of interviewBoxes) {
        box.addEventListener("click", playQuestion)
    }
}

function playQuestion(event) {
    console.log("now playing");
}