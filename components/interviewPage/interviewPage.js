function renderInterviewPage(questions) {
    const container = document.getElementById("container");
    const div = document.createElement("div");
    div.setAttribute("id", "interviewContainer");

    div.innerHTML = `
    <div class="interviewImg"></div>
    <h2 class="interviewTitle">Intervjua Grannen</h2>

    <div class="interviewBoxesContainer">
        <div class="question1 interviewBoxes">
            <p class="question1">${questions[0]}</p>
            <svg class="question1" xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                <path class="question1" d="M0 2.27387C0 0.567007 1.82609 -0.518303 3.32538 0.297487L15.687 7.02369C17.2531 7.87579 17.2531 10.1242 15.687 10.9764L3.32538 17.7026C1.82609 18.5183 0 17.433 0 15.7262V2.27387Z" fill="#212121"/>
            </svg>             
        </div>
        <div class="bar"></div>

        <div class="question2 interviewBoxes">
            <p class="question2">${questions[1]}</p>
            <svg class="question2" xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                <path class="question2" d="M0 2.27387C0 0.567007 1.82609 -0.518303 3.32538 0.297487L15.687 7.02369C17.2531 7.87579 17.2531 10.1242 15.687 10.9764L3.32538 17.7026C1.82609 18.5183 0 17.433 0 15.7262V2.27387Z" fill="#212121"/>
            </svg>                     
        </div>
        <div class="bar"></div>

        <div class="question3 interviewBoxes">
            <p class="question3">${questions[2]}</p>
            <svg class="question3" xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                <path class="question3" d="M0 2.27387C0 0.567007 1.82609 -0.518303 3.32538 0.297487L15.687 7.02369C17.2531 7.87579 17.2531 10.1242 15.687 10.9764L3.32538 17.7026C1.82609 18.5183 0 17.433 0 15.7262V2.27387Z" fill="#212121"/>
            </svg>             
        </div>
        <div class="bar"></div>

        <div class="question4 interviewBoxes">
            <p class="question4">${questions[3]}</p>
            <svg class="question4" xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                <path class="question4" d="M0 2.27387C0 0.567007 1.82609 -0.518303 3.32538 0.297487L15.687 7.02369C17.2531 7.87579 17.2531 10.1242 15.687 10.9764L3.32538 17.7026C1.82609 18.5183 0 17.433 0 15.7262V2.27387Z" fill="#212121"/>
            </svg>              
        </div>
        <div class="bar"></div>

        <div class="question5 interviewBoxes">
            <p class="question5">${questions[4]}</p>
            <svg class="question5" xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                <path class="question5" d="M0 2.27387C0 0.567007 1.82609 -0.518303 3.32538 0.297487L15.687 7.02369C17.2531 7.87579 17.2531 10.1242 15.687 10.9764L3.32538 17.7026C1.82609 18.5183 0 17.433 0 15.7262V2.27387Z" fill="#212121"/>
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

async function playQuestion(event) {
    // console.log("now playing");
    // console.log(event.originalTarget);
    let target = event.originalTarget.classList;

    switch (target[0]) {
        case "question1":
            console.log("now playing question 1");
            let url = "../../media/audio/Granne_fråga_1.mp3";
            playAudio(url);
            break;
        case "question2":
            console.log("now playing question 2");
            break;
        case "question3":
            console.log("now playing question 3");
            break;
        case "question4":
            console.log("now playing question 4");
            break;
        case "question5":
            console.log("now playing question 5");
            break;
        default:
            break;
    }
}

function playAudio(url) {
    let question = new Audio(url);
    console.log(question);
}