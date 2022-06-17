const userAngles = document.querySelectorAll(".input-angles");
const calculateBtn = document.querySelector("#check-btn");
const outputBox = document.querySelector("#output-tag");

function calculateSumOfValues(base, height){
    let sum = (base * base)+(height*height);
    return sum;
};

function calculateHypotenuse(){
    let sumOfSquare = calculateSumOfValues(
        Number(userAngles[0].value),
        Number(userAngles[1].value)
    )
    let theHypotenuse = Math.sqrt(sumOfSquare);
    outputBox.innerHTML = `The hypotenuse of your triangle is ${theHypotenuse.toFixed(3)}`;
    console.log(`The hypotenuse of your triangle is ${theHypotenuse.toFixed(3)}`);
}

calculateBtn.addEventListener('click', calculateHypotenuse);