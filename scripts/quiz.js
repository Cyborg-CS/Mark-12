const questionsForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#check-btn");
const outputBox = document.querySelector("#output-tag");

const answers = ["90°",
"right angled",
"one right angle",
"12, 16, 20",
"Equilateral triangle",
"100°",
"30°",
"a + b + c",
"no",
"45°"];


function calculateFinalScore(e){
    e.preventDefault();
    const formValues = new FormData(questionsForm);
    let score = 0, index= 0;
    for(let values of formValues.values()){
        if(values === answers[index]){
        score = score + 1;
        }
        index = index+ 1;
    }

   outputBox.innerText = "Your Final Score is "+score; 
}





submitBtn.addEventListener('click', calculateFinalScore);