// let fromReadArticle = false;
//Eventuellt ett kort för dotterns instagram
//Questions needed for the interviewPage
// let interviewQuestions = [];
//Data needed for the karaktärer page
// let characterInfo = [];
//Data needed for the different cards that are added to mainPage
// let gameCards = [];
let fromGrannen = false;
let fromMotstandare = false;
let fromKalender = false;
let currentArticle = "";
let called = false 
// let newCards = false;

async function get() {
    let requestCharacterInfo = new Request("./database/characterInfo.json");
    let requestInterviewQuestions = new Request("./database/interviewQuestions.json");
    let requestGameCards = new Request("./database/gameCards.json");

    let responseCharacterInfo = await fetch(requestCharacterInfo);
    let responseInterviewQuestions = await fetch(requestInterviewQuestions);
    let responseGameCards = await fetch(requestGameCards);

    characterInfo = await checkOk(responseCharacterInfo);
    interviewQuestions = await checkOk(responseInterviewQuestions);
    gameCards = await checkOk(responseGameCards);

    console.log(interviewQuestions);
    console.log(characterInfo);
    console.log(gameCards);
}

async function checkOk(response) {
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    let data = await response.json();
    return await data;
}
get();

// renderTitle();
// renderNavBar("Senaste");
//renderNewsPageGranne();

let questions = ["Vad har ni för relation?", "När pratade ni senast?", "Vilken tid lämnade hon huset?", "Hur menar du stressad?", "Var tror du hon var påväg?"];
// renderInterviewPage(questions);
// renderMainPage();

// renderBackgroundArticle();
renderInstructions()
// renderNewsPageGranne();
//renderNewsPageGranne();
// renderNavBar();
// renderMainPage();

// renderNavBar("Senaste");
// let questions = ["Vad har ni för relation?", "När pratade ni senast?", "Vilken tid lämnade hon huset?", "Hur menar du stressad?", "Var tror du hon var påväg?"];
// renderInterviewPage(questions);
// renderNewsPageGranne();
// renderBackgroundArticle();
renderSmygbilderArticle()
// renderAssistantArticle();
// renderAssistantArticle();
//renderInstructions();
//renderCalender(4, 2025);
