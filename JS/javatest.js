const options = document.querySelectorAll(".options");
let pScore = 0;
let cScore = 0;

options.forEach((option) => {
option.addEventListener("click", function () {

  let pInput = this.value;
  const cOptions = ["Rock", "Paper", "Scissors"];
  let cInput = cOptions[Math.floor(Math.random() * 3)];

  compareInputs(pInput, cInput);
  document.getElementById("p-input").innerHTML = (pInput);
  document.getElementById("c-input").innerHTML = (cInput);
  });
});

function updateScore(pScore,cScore) {
  document.getElementById("p-score").innerHTML = pScore;
  document.getElementById("c-score").innerHTML = cScore;
}

function compareInputs(pInput, cInput) {
  const result = document.querySelector('.result');
    let currentMatch = `${pInput} vs ${cInput}`;
      if (pInput === cInput) {
      console.log(`${currentMatch} is a Tie`);
      result.innerHTML= `It's a Tie.`;
      return;
  }

// Rock
    if (pInput === "Rock") {
    if(cInput === "Scissors"){
      (`${currentMatch} = You Win`);
      result.innerHTML= `You Win!`;
      pScore++;
    }
    else {
      (`${currentMatch} = Computer Wins`);
      result.innerHTML= `Computer Wins..try again!`;
      cScore++;
    }
  }
// Paper
  else if (pInput === "Paper") {
    if (cInput === "Rock") {
      (`${currentMatch} = You Win`);
      result.innerHTML= `You Win!`;
      pScore++;
    } 
    else { 
      (`${currentMatch} = Computer Wins`);
      result.innerHTML= `Computer Wins..try again!`;
        cScore++;
    }
  }
// Scissors
  else if (pInput === "Scissors") {
    if (cInput === "Paper") {
      (`${currentMatch} = You Win`);
      result.innerHTML= `You Win!`;
      pScore++;
    } 
    else {
      (`${currentMatch} = Computer Wins`)
      result.innerHTML= `Computer Wins..try again!`;
        cScore++;
    }
  }
updateScore(pScore, cScore);

}


