const userAngles = document.querySelectorAll(".input-angles");
const checkBtn = document.querySelector("#check-btn");
const resultBox = document.querySelector("#output-tag");


const calculateAngles =(angleOne, angleTwo, angleThree)=>{
  let sum = angleOne + angleTwo + angleThree;
  return sum;
}

function checkTriangle(){
   let sum = calculateAngles(
    Number(userAngles[0].value),
    Number(userAngles[1].value),
    Number(userAngles[2].value)
   ) 
   if(sum === 180){
    console.log("Way to go ! Your angles are forming a Triangle.")
    resultBox.innerHTML ="Way to go ! Your angles are making a Triangle.";
   }else{
    console.log("Oops ! Looks like you can't form a Triangle with is angles.")
    resultBox.innerHTML ="Oops ! Looks like you can't form a Triangle with this angles."
   }
}

checkBtn.addEventListener('click', checkTriangle);