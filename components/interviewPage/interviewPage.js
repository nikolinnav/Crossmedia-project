let audioQuestions = [
new Audio("./media/audio/Granne_fraga_1.mp3"), 
new Audio("./media/audio/Granne_fraga_2.mp3"),
new Audio("./media/audio/Granne_fraga_3.mp3"),
new Audio("./media/audio/Granne_fraga_4.mp3"), 
new Audio("./media/audio/Granne_fraga_5.mp3"),
new Audio("./media/audio/Motstandare_intervju.mp3")
];
let playing = false;

function renderInterviewPage(questions, h2Text) {
    console.log(questions);
    const container = document.getElementById("container");
    const div = document.createElement("div");
    div.setAttribute("id", "interviewContainer");
    div.classList.add("dynamicContent");

    let divImg = document.createElement("div");
    divImg.setAttribute("class", "interviewImg");
    div.appendChild(divImg);

    let h2 = document.createElement("h2");
    h2.setAttribute("class", "interviewTitle");
    h2.textContent = h2Text;
    div.appendChild(h2);

    for (let quest in questions) {
        if (quest == "id") {
            continue;
        }


        let interviewBox = document.createElement("div")
        interviewBox.setAttribute("class", "interviewBoxesContainer");
        interviewBox.innerHTML = `
        <div class="${quest} interviewBoxes">
            <p class="${quest}">${questions[quest]}</p>
            <svg class="question1" xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
            <path class="question1" d="M0 2.27387C0 0.567007 1.82609 -0.518303 3.32538 0.297487L15.687 7.02369C17.2531 7.87579 17.2531 10.1242 15.687 10.9764L3.32538 17.7026C1.82609 18.5183 0 17.433 0 15.7262V2.27387Z" fill="#212121"/>
            </svg>             
        </div>
        <div class="bar"></div>
        `
        div.appendChild(interviewBox);
        // div.innerHTML = `
        // <div class="interviewImg"></div>
        // <h2 class="interviewTitle">Intervjua Grannen</h2>
    
        // <div class="interviewBoxesContainer">
        //     <div class="question1 interviewBoxes">
        //         <p class="question1">${questions[quest]}</p>
        //         <svg class="question1" xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
        //             <path class="question1" d="M0 2.27387C0 0.567007 1.82609 -0.518303 3.32538 0.297487L15.687 7.02369C17.2531 7.87579 17.2531 10.1242 15.687 10.9764L3.32538 17.7026C1.82609 18.5183 0 17.433 0 15.7262V2.27387Z" fill="#212121"/>
        //         </svg>             
        //     </div>
        //     <div class="bar"></div>
        // </div>
        // `
    }
    // div.innerHTML = `
    // <div class="interviewImg"></div>
    // <h2 class="interviewTitle">Intervjua Grannen</h2>

    // <div class="interviewBoxesContainer">
    //     <div class="question1 interviewBoxes">
    //         <p class="question1">${questions[0].questionOne}</p>
    //         <svg class="question1" xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
    //             <path class="question1" d="M0 2.27387C0 0.567007 1.82609 -0.518303 3.32538 0.297487L15.687 7.02369C17.2531 7.87579 17.2531 10.1242 15.687 10.9764L3.32538 17.7026C1.82609 18.5183 0 17.433 0 15.7262V2.27387Z" fill="#212121"/>
    //         </svg>             
    //     </div>
    //     <div class="bar"></div>

    //     <div class="question2 interviewBoxes">
    //         <p class="question2">${questions[0].questionTwo}</p>
    //         <svg class="question2" xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
    //             <path class="question2" d="M0 2.27387C0 0.567007 1.82609 -0.518303 3.32538 0.297487L15.687 7.02369C17.2531 7.87579 17.2531 10.1242 15.687 10.9764L3.32538 17.7026C1.82609 18.5183 0 17.433 0 15.7262V2.27387Z" fill="#212121"/>
    //         </svg>                     
    //     </div>
    //     <div class="bar"></div>

    //     <div class="question3 interviewBoxes">
    //         <p class="question3">${questions[0].questionThree}</p>
    //         <svg class="question3" xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
    //             <path class="question3" d="M0 2.27387C0 0.567007 1.82609 -0.518303 3.32538 0.297487L15.687 7.02369C17.2531 7.87579 17.2531 10.1242 15.687 10.9764L3.32538 17.7026C1.82609 18.5183 0 17.433 0 15.7262V2.27387Z" fill="#212121"/>
    //         </svg>             
    //     </div>
    //     <div class="bar"></div>

    //     <div class="question4 interviewBoxes">
    //         <p class="question4">${questions[0].questionFour}</p>
    //         <svg class="question4" xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
    //             <path class="question4" d="M0 2.27387C0 0.567007 1.82609 -0.518303 3.32538 0.297487L15.687 7.02369C17.2531 7.87579 17.2531 10.1242 15.687 10.9764L3.32538 17.7026C1.82609 18.5183 0 17.433 0 15.7262V2.27387Z" fill="#212121"/>
    //         </svg>              
    //     </div>
    //     <div class="bar"></div>

    //     <div class="question5 interviewBoxes">
    //         <p class="question5">${questions[0].questionFive}</p>
    //         <svg class="question5" xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
    //             <path class="question5" d="M0 2.27387C0 0.567007 1.82609 -0.518303 3.32538 0.297487L15.687 7.02369C17.2531 7.87579 17.2531 10.1242 15.687 10.9764L3.32538 17.7026C1.82609 18.5183 0 17.433 0 15.7262V2.27387Z" fill="#212121"/>
    //         </svg>          
    //     </div>
    //     <div class="bar"></div>
    // </div>    
    // `;

    container.appendChild(div);
    let interviewBoxes = document.querySelectorAll(".interviewBoxes");
    for (let box of interviewBoxes) {
        box.addEventListener("click", playQuestion)
    }
}

async function playQuestion(event) {

    let target = event.target.classList;
    let url = "./media/audio/Granne_fraga_1.mp3";

    switch (target[0]) {
        case "questionOne":
            console.log("now playing question 1");
            playAudio(audioQuestions[0]);
            break;
        case "questionTwo":
            console.log("now playing question 2");
            url = "./media/audio/Granne_fraga_2.mp3";
            playAudio(audioQuestions[1]);
            break;
        case "questionThree":
            console.log("now playing question 3");
            url = "./media/audio/Granne_fraga_3.mp3";
            playAudio(audioQuestions[2]);
            break;
        case "questionFour":
            console.log("now playing question 4");
            url = "./media/audio/Granne_fraga_4.mp3";
            playAudio(audioQuestions[3]);
            break;
        case "questionFive":
            console.log("now playing question 5");
            url = "./media/audio/Granne_fraga_5.mp3";
            playAudio(audioQuestions[4]);
            break;
        case "questionSix":
            console.log("now playing question 6");
            url = "./media/audio/Motstandare_intervju.mp3";
            playAudio(audioQuestions[5]);
            break;
        default:
            break;
    }
}

function playAudio(question) {
    if (!playing) {
        question.play();
        playing = true;
        console.log("playing");
    } else if (playing) {
        // question.pause();
        playing = false;
        console.log("paused");
        checkIfPlaying();
    }
    question.onended = function() {
        playing = false;
        //add variable that checks how many the user has listened to
    }
}

function checkIfPlaying() {
    for(let q of audioQuestions) {
        if (!q.paused) {
            q.pause();
        }
    }
}
