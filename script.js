function getComputerChoice() {
    let val= Math.random();
    if(val<0.33){
        return "rock";
    }
    else if(val>=0.33 && val<0.66){
        return "paper";
    }
    else{
        return "scissor";
    }
}

function getHumanChoice() {
    let choice= prompt("Enter your choice: ");
    return choice;
}

let humanScore=0;
let computerScore=0;

function playRound(humanChoice,computerChoice) {
    if(humanChoice==computerChoice){
        console.log("Same choice ");
    }
    else if(humanChoice=="rock"){
        if(computerChoice=="scissor"){
            humanChoice++;
            console.log("You win! Rock beats Scissor");
        }
        else{
            computerChoice++;
            console.log("You lose! Paper beats Rock");
        }
    }
    else if(humanChoice=="scissor"){
        if(computerChoice=="paper"){
            humanChoice++;
            console.log("You win! Scissor beats Paper");
        }
        else{
            computerChoice++;
            console.log("You lose! Rock beats Scissor");
        }
    }
    else if(humanChoice=="paper"){
        if(computerChoice=="rock"){
            humanChoice++;
            console.log("You win! Paper beats Rock");
        }
        else{
            computerChoice++;
            console.log("You lose! Scissor beats Paper");
        }
    }
    else{
        console.log("Invalid choice!");
    }
}

function playGame() {
    let i=0;
    while(i<5){
        let humanChoice=getHumanChoice();
        let computerChoice=getComputerChoice();
        playRound(humanChoice,computerChoice);
        i++;
    }

    if(humanScore>computerScore){
        alert("You won! ");
    }
    else{
        alert("Computer won! ");
    }
}