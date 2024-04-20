let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let thirdNumber = document.getElementById("thirdNumber");
let outcome = document.getElementById("outcome");

let arrayOfTwoSure = [];
let arrayOfThreeDirect = [];
let generatedNumbers = [];

//Openining & Closing the Slide-Down Overlay
function openPlayContents() {
  document.getElementById("playContents").style.height = "100%";
}
function closePlayContents() {
  document.getElementById("playContents").style.height = "0%";
}

//Clear the Input Fields
function clearAllInputs() {
  generatedNumbers = [];
  arrayOfTwoSure = [];
  arrayOfThreeDirect = [];

  firstNumber.value = "";
  secondNumber.value = "";
  thirdNumber.value = "";

  document.getElementById("errorMessage").innerHTML = "";
  document.getElementById("outcome").innerHTML = "";
  document.getElementById("play").disabled = false;
  document.getElementById("clearAllInputs").innerHTML = "Clear";
}

//Play Game
function playGame() {

  //For Two Sure
  if (document.getElementById("thirdNumber").style.display != "inline") {
    if (firstNumber.value === "" || secondNumber.value === "") {
      document.getElementById("errorMessage").innerHTML = `Input your desired numbers.`;
    }
    else if (firstNumber.value === secondNumber.value) {
      document.getElementById("errorMessage").innerHTML = `Please, Input different numbers.`;
    }
    else if (isNaN(firstNumber.value) || isNaN(secondNumber.value)) {
      document.getElementById("errorMessage").innerHTML = `Input numbers only.`;
    }
    else {
      arrayOfTwoSure.push(firstNumber.value, secondNumber.value);
      document.getElementById("errorMessage").innerHTML = "";

      for (let i = 1; i <= 7; i++) {
        generatedNumbers.push(Math.floor(Math.random() * 99 + 1));
      }

      outcome.innerHTML = `Your input Numbers are: ${arrayOfTwoSure} </br> </br>
      Generated Numbers are; ${generatedNumbers} </br></br>`;
      if (generatedNumbers.includes(Number(arrayOfTwoSure[0])) && generatedNumbers.includes(Number(arrayOfTwoSure[1]))) {
        outcome.innerHTML += "<span style='color: green'> Congratulations... You won.</span>";
      }
      else {
        outcome.innerHTML += "<span style='color: red'> Sorry... Try Again.</span>";
      }
    }
  }

  //For Three Direct
  else {
    if (firstNumber.value === "" || secondNumber.value === "" || thirdNumber.value === "") {
      document.getElementById("errorMessage").innerHTML = `Input your desired numbers.`;
    }
    else if (firstNumber.value === secondNumber.value || secondNumber.value === thirdNumber.value || firstNumber.value === thirdNumber.value) {
      document.getElementById("errorMessage").innerHTML = `Please, Input different numbers.`;
    }
    else if (isNaN(firstNumber.value) || isNaN(secondNumber.value) || isNaN(thirdNumber.value)) {
      document.getElementById("errorMessage").innerHTML = `Input numbers only.`;
    }
    else {
      arrayOfThreeDirect.push(firstNumber.value, secondNumber.value, thirdNumber.value);
      document.getElementById("errorMessage").innerHTML = "";

      for (let i = 1; i <= 7; i++) {
        generatedNumbers.push(Math.floor(Math.random() * 99 + 1));
      }

      outcome.innerHTML = `Your input Numbers are: ${arrayOfThreeDirect} </br></br>
      Generated Numbers are; ${generatedNumbers} </br></br> `;
      if (generatedNumbers.includes(Number(arrayOfThreeDirect[0])) && generatedNumbers.includes(Number(arrayOfThreeDirect[1])) && generatedNumbers.includes(Number(arrayOfThreeDirect[1]))) {
        outcome.innerHTML += "<span style='color: green'> Congratulations... You won.</span>";
      }
      else {
        outcome.innerHTML += "<span style='color: red'> Sorry... Try Again.</span>";
      }
    }
  }

  //Disable the Play button and change the Clear text
  if (document.getElementById("errorMessage").innerHTML == "") {
    document.getElementById("play").disabled = true;
    document.getElementById("clearAllInputs").innerHTML = "Reset and Play again.";
  }
}
