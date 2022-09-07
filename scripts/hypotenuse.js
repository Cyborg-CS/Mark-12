const userAngles = document.querySelectorAll(".input-angles");
const calculateBtn = document.querySelector("#check-btn");
const outputBox = document.querySelector("#output-tag");

function calculateSumOfValues(base, height){
    if(base > 0 && height > 0){
    let sum = (base * base)+(height*height);
    return sum;
}else{
    outputBox.innerText = "The value's has to be greater than 0"
}
};

function calculateHypotenuse(){
    let sumOfSquare = calculateSumOfValues(
        Number(userAngles[0].value),
        Number(userAngles[1].value)
    )
    if(sumOfSquare){
    let theHypotenuse = Math.sqrt(sumOfSquare);
    outputBox.innerHTML = `The hypotenuse of your triangle is ${theHypotenuse.toFixed(3)}`;
    console.log(`The hypotenuse of your triangle is ${theHypotenuse.toFixed(3)}`);
};
}

calculateBtn.addEventListener('click', calculateHypotenuse);