let audioQuestions = [
    new Audio("./media/audio/Granne_fraga_1.mp3"),
    new Audio("./media/audio/Granne_fraga_2.mp3"),
    new Audio("./media/audio/Granne_fraga_3.mp3"),
    new Audio("./media/audio/Granne_fraga_4.mp3"),
    new Audio("./media/audio/Granne_fraga_5.mp3"),
    new Audio("./media/audio/Motstandare_intervju.mp3")
];
let playing = false;

//Control if all audios are played 
let finishedAudios = new Set();
let popupAlreadyShown = false;
let questionNum = 5;


function renderInterviewPage(questions, h2Text) {
    console.log(questions);
    const container = document.getElementById("container");
    const div = document.createElement("div");
    div.setAttribute("id", "interviewContainer");
    div.classList.add("dynamicContent");

    let divImg = document.createElement("div");
    divImg.setAttribute("class", "interviewImg");
    div.appendChild(divImg);

    if (questions.id == 2) {
        setImage(divImg, "url(./media/profiles/motstandaren.jpg)");
    }

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
            <svg class="${quest}" xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                <path class="${quest} playButton" d="M0 2.27387C0 0.567007 1.82609 -0.518303 3.32538 0.297487L15.687 7.02369C17.2531 7.87579 17.2531 10.1242 15.687 10.9764L3.32538 17.7026C1.82609 18.5183 0 17.433 0 15.7262V2.27387Z" fill="#212121"/>
                <path class="${quest} pauseButton" d="M1.75 0C0.78351 0 0 0.7835 0 1.75V16.25C0 17.2165 0.78351 18 1.75 18H5.25C6.21651 18 7.00001 17.2165 7.00001 16.25V1.75C7.00001 0.7835 6.21651 0 5.25 0H1.75ZM10.75 0C9.78351 0 9.00001 0.7835 9.00001 1.75V16.25C9.00001 17.2165 9.78351 18 10.75 18H14.25C15.2165 18 16 17.2165 16 16.25V1.75C16 0.7835 15.2165 0 14.25 0H10.75Z" fill="#212121"/>
            </svg>         
        </div>
        <div class="bar"></div>
        `
        div.appendChild(interviewBox);
        let pauseButton = interviewBox.querySelector(".pauseButton");
        pauseButton.style.visibility = "hidden";
    }

    container.appendChild(div);
    let interviewBoxes = document.querySelectorAll(".interviewBoxes");
    for (let box of interviewBoxes) {
        box.addEventListener("click", playQuestion)
    }
}

async function playQuestion(event) {

    let target = event.target.classList;
    let url = "./media/audio/Granne_fraga_1.mp3";
    let currentlyPlayingElement = event.target.classList[0];
    console.log(currentlyPlayingElement);

    switch (target[0]) {
        case "questionOne":
            console.log("now playing question 1");
            playAudio(audioQuestions[0], currentlyPlayingElement);

            //Checks if all audios are played, if so it shows the popUp.
            finishedAudios.add(audioQuestions[0]);
            if (finishedAudios.size === questionNum && !popupAlreadyShown) {
                popupAlreadyShown = true;
                showPopup();
            }
            break;
        case "questionTwo":
            console.log("now playing question 2");
            url = "./media/audio/Granne_fraga_2.mp3";
            playAudio(audioQuestions[1], currentlyPlayingElement);

            finishedAudios.add(audioQuestions[1]);
            if (finishedAudios.size === questionNum && !popupAlreadyShown) {
                popupAlreadyShown = true;
                showPopup();
            }
            break;
        case "questionThree":
            console.log("now playing question 3");
            url = "./media/audio/Granne_fraga_3.mp3";
            playAudio(audioQuestions[2], currentlyPlayingElement);

            finishedAudios.add(audioQuestions[2]);
            if (finishedAudios.size === questionNum && !popupAlreadyShown) {
                popupAlreadyShown = true;
                showPopup();
            }
            break;
        case "questionFour":
            console.log("now playing question 4");
            url = "./media/audio/Granne_fraga_4.mp3";
            playAudio(audioQuestions[3], currentlyPlayingElement);

            finishedAudios.add(audioQuestions[3]);
            if (finishedAudios.size === questionNum && !popupAlreadyShown) {
                popupAlreadyShown = true;
                showPopup();
            }
            break;
        case "questionFive":
            console.log("now playing question 5");
            url = "./media/audio/Granne_fraga_5.mp3";
            playAudio(audioQuestions[4], currentlyPlayingElement);

            finishedAudios.add(audioQuestions[4]);
            if (finishedAudios.size === questionNum && !popupAlreadyShown) {
                popupAlreadyShown = true;
                showPopup();
            }
            break;
        case "questionSix":
            console.log("now playing question 6");
            url = "./media/audio/Motstandare_intervju.mp3";
            playAudio(audioQuestions[5], currentlyPlayingElement);

            break;
        default:
            break;
    }
}

function playAudio(question, currentlyPlaying) {
    let questionsDiv = document.querySelectorAll(".interviewBoxes");

    if (!playing) {
        question.play();
        playing = true;
        console.log("playing");
        console.log(questionsDiv);

        document.getElementById("start").style.pointerEvents = "none";
        document.getElementById("charactersNav").style.pointerEvents = "none";

        for (let question of questionsDiv) {
            if (question.classList[0] != currentlyPlaying) {
                question.style.pointerEvents = "none";
                question.style.opacity = "50%";
            } else {
                let pauseButton = question.querySelector(".pauseButton");
                let playButton = question.querySelector(".playButton");
                pauseButton.style.visibility = "visible";
                playButton.style.visibility = "hidden";
                // playButton.remove();
                // question.appendChild("")
                console.log(playButton);
            }
        }

    } else if (playing) {
        // question.pause();
        playing = false;
        console.log("paused");
        checkIfPlaying();
        enablePlaying(questionsDiv);
    }
    question.onended = function () {
        playing = false;
        enablePlaying(questionsDiv);
    }
}

function checkIfPlaying() {
    for (let q of audioQuestions) {
        if (!q.paused) {
            q.pause();
        }
    }
}

function enablePlaying(questions) {
    document.getElementById("start").style.pointerEvents = "auto";
    document.getElementById("charactersNav").style.pointerEvents = "auto";

    for (let q of questions) {
        q.style.pointerEvents = "auto";
        q.style.opacity = "1";
        q.querySelector(".playButton").style.visibility = "visible";
        q.querySelector(".pauseButton").style.visibility = "hidden";
    }
}

function renderInterviewPopUp() {
    if (document.querySelector("#popUpbackground")) return; // Prevent duplicates

    const background = document.createElement("div");
    background.id = "popUpbackground";

    background.innerHTML = `
        <div id="popUpContainer">
            <div id="popupContent">
                <p id="popUpText">På en skala hur övertygande var grannens version av händelserna?</p>
                <input type="range" id="credibilitySlider" min="1" max="5" step="1" value="3">
                <button onclick="submitAnswer()">Skicka</button>
                <p id="popUpInfo">Kolla i 'Senaste nytt' när ni har skickat ert svar!</p>
            </div>
        </div>
    `;

    document.body.appendChild(background);

    // Event listener for slider update
    background.querySelector("#credibilitySlider").addEventListener("input", function (e) {
        background.querySelector("#sliderValue").textContent = e.target.value;
    });
}

function showPopup() {
    let bg = document.querySelector("#popUpbackground");
    if (!bg) {
        renderInterviewPopUp();
        bg = document.querySelector("#popUpbackground");
    }
    bg.style.display = "flex";
}

function submitAnswer() {
    const value = document.querySelector("#credibilitySlider").value;
    console.log("Svar skickat:", value);
    document.querySelector("#popUpbackground").style.display = 'none';
}




