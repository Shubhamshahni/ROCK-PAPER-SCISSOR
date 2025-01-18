let userscore = 0;
let computerscore = 0;

let choices = document.querySelectorAll(".sps");
let message=document.querySelector("#msg");

const userScorePara=document.querySelector("#score-p");
const computerScorePara=document.querySelector("#score-c");


function highlightComputerChoice(compChoice) {
    // Reset all buttons to their default state
    document.querySelectorAll(".sps").forEach(button => {
      button.classList.remove("highlight");
    });

      // Add the 'highlight' class to the chosen button
  const chosenButton = document.getElementById(compChoice);
  if (chosenButton) {
    chosenButton.classList.add("highlight");
  }
}

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
    // highlightComputerChoice(compChoice);
};






const drawGame = () => {
    console.log("Game was DRAW");
};

const showWinner = (userWin) => {
    if (userWin) {
        console.log("you win!");
        message.innerText="Congratulations,YOU WIN !";
        message.style.backgroundColor="#32cd32";
        message.style.borderRadius="30px";
        userscore++;
        userScorePara.innerText=userscore;
    }
    else {
        console.log("you loose");
        message.innerText="OPPs, YOU LOOSE!";
        message.style.backgroundColor="#ed4122";
        message.style.borderRadius="30px";
        computerscore++;
        computerScorePara.innerText=computerscore;
    }
}

const playGame = (userChoice) => {
    console.log("user's Choice = ", userChoice);

    // computer choice
    const compChoice = genCompChoice();
    console.log("computer choice=", compChoice);
    highlightComputerChoice(compChoice);
   


    let userWin = false;
    if (userChoice === compChoice) {
        drawGame();
        message.innerText="DRAW! - Play Again";
        message.style.backgroundColor="#3d94b0";
        message.style.borderRadius="30px";
    }
    else {
        
            // Check winning and losing cases
            if (
                (userChoice === "rock" && compChoice === "scissors") ||
                (userChoice === "paper" && compChoice === "rock") ||
                (userChoice === "scissors" && compChoice === "paper")
            ) {
                userWin = true; // User wins
            } else {
                userWin = false; // User loses
            }
       

        // if (userChoice === rock) {
        //     // scissor, paper

        //     compChoice === paper;
        //     userWin = false;
        // }
        // else { userWin = true; }


        // if (userChoice === paper) {
        //     //scissor,rock

        //     compChoice === rock;
        //     userWin = true;
        // }
        // else { userWin = false; }

        // if
        //     (userChoice === scissor) {
        //     //rock,paper

        //     compChoice === rock;
        //     userWin = false;
        // }
        // else { userWin = true; }

        showWinner(userWin);
    }
};



choices.forEach((sps) => {
   
    sps.addEventListener("click", () => {
        const userChoice = sps.getAttribute("id");
        playGame(userChoice)
       
       
    })
})