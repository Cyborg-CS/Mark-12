const firstSide = document.querySelector("#side-one");
const secondSide = document.querySelector("#side-two");
const thirdSide = document.querySelector("#side-three");
const calculateBtn = document.querySelector("#calculate-btn");
const outputBox = document.querySelector("#output-tag");

function calculateArea(e) {
  console.log("clicked");
  e.preventDefault();

  const firstSideValue = Number(firstSide.value);
  const secondSideValue = Number(secondSide.value);
  const thirdSideValue = Number(thirdSide.value);

  if (
    firstSideValue + secondSideValue > thirdSideValue &&
    secondSideValue + thirdSideValue > firstSideValue &&
    firstSideValue + thirdSideValue > secondSideValue
  ) {
    const semiPerimeter =
      (firstSideValue + secondSideValue + thirdSideValue) / 2;

    const finalResult = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - firstSideValue) *
        (semiPerimeter - secondSideValue) *
        (semiPerimeter - thirdSideValue)
    ).toFixed(4);
    outputBox.innerText = `Area of a triangle using heron's formula is ${finalResult} units`;
  } else {
    outputBox.innerText = "Enter valid side lengths such that each side lengths";
  }
}

calculateBtn.addEventListener("click", calculateArea);