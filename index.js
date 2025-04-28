let interviewQuestions = [];
let characterInfo = [];

async function get() {
    let requestCharacterInfo = new Request("./database/characterInfo.json");
    let requestInterviewQuestions = new Request("./database/interviewQuestions.json");

    let responseCharacterInfo = await fetch(requestCharacterInfo);
    let responseInterviewQuestions = await fetch(requestInterviewQuestions);

    characterInfo = await checkOk(responseCharacterInfo);
    interviewQuestions = await checkOk(responseInterviewQuestions);

    console.log(interviewQuestions);
    console.log(characterInfo);
}

async function checkOk(response) {
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    let data = await response.json();
    return await data;
}
get();

renderTitle();
renderNavBar("Senaste");

let questions = ["Vad har ni för relation?", "När pratade ni senast?", "Vilken tid lämnade hon huset?", "Hur menar du stressad?", "Var tror du hon var påväg?"];
// renderInterviewPage(questions);
renderMainPage();
// renderNewsPageGranne();

// renderNavBar("Senaste");
// let questions = ["Vad har ni för relation?", "När pratade ni senast?", "Vilken tid lämnade hon huset?", "Hur menar du stressad?", "Var tror du hon var påväg?"];
// renderInterviewPage(questions);
// renderNewsPageGranne();
// renderBackgroundArticle();

