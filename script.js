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

// function getHumanChoice() {
//     let choice= prompt("Enter your choice: ");
//     return choice;
// }

let humanScore=0;
let computerScore=0;

// function playRound(humanChoice,computerChoice) {
//     if(humanChoice==computerChoice){
//         console.log("Same choice ");
//     }
//     else if(humanChoice=="rock"){
//         if(computerChoice=="scissor"){
//             humanChoice++;
//             console.log("You win! Rock beats Scissor");
//         }
//         else{
//             computerChoice++;
//             console.log("You lose! Paper beats Rock");
//         }
//     }
//     else if(humanChoice=="scissor"){
//         if(computerChoice=="paper"){
//             humanChoice++;
//             console.log("You win! Scissor beats Paper");
//         }
//         else{
//             computerChoice++;
//             console.log("You lose! Rock beats Scissor");
//         }
//     }
//     else if(humanChoice=="paper"){
//         if(computerChoice=="rock"){
//             humanChoice++;
//             console.log("You win! Paper beats Rock");
//         }
//         else{
//             computerChoice++;
//             console.log("You lose! Scissor beats Paper");
//         }
//     }
//     else{
//         console.log("Invalid choice!");
//     }
// }

// function playGame() {
//     let i=0;
//     while(i<5){
//         let humanChoice=getHumanChoice();
//         let computerChoice=getComputerChoice();
//         playRound(humanChoice,computerChoice);
//         i++;
//     }

//     if(humanScore>computerScore){
//         alert("You won! ");
//     }
//     else{
//         alert("Computer won! ");
//     }
// }


const rock=document.querySelector('#rock');
const paper=document.querySelector('#paper');
const scissor=document.querySelector('#scissor');
const body=document.body;

const div= document.createElement('div');
body.appendChild(div);

body.addEventListener('click',(e)=>{
    let target=e.target;
    window.alert("clicked");
    let computerChoice=getComputerChoice();
    if(target.id==computerChoice){
                console.log("Same choice ");
                div.textContent="Same choice ";
            }
            else if(target.id=="rock"){
                if(computerChoice=="scissor"){
                    humanScore++;
                    console.log("You win! Rock beats Scissor");
                    div.textContent="You win! Rock beats Scissor"
                }
                else{
                    computerScore++;
                    console.log("You lose! Paper beats Rock");
                    div.textContent="You lose! Paper beats Rock";
                }
            }
            else if(target.id=="scissor"){
                if(computerChoice=="paper"){
                    humanScore++;
                    console.log("You win! Scissor beats Paper");
                    div.textContent="You win! Scissor beats Paper";
                }
                else{
                    computerScore++;
                    console.log("You lose! Rock beats Scissor");
                    div.textContent="You lose! Rock beats Scissor";
                }
            }
            else if(target.id=="paper"){
                if(computerChoice=="rock"){
                    humanScore++;
                    console.log("You win! Paper beats Rock");
                    div.textContent="You win! Paper beats Rock";
                }
                else{
                    computerScore++;
                    console.log("You lose! Scissor beats Paper");
                    div.textContent="You lose! Scissor beats Paper";
                }

                
    }
    if(computerScore==5){
        window.alert("Computer won!");
        computerScore=0;
        humanScore=0;
        return;
    }
    else if (humanScore==5) {
        window.alert("You won!");
        computerScore=0;
        humanScore=0;
        return;
        
    } 
    console.log(computerScore);
    console.log(humanScore);
            
    div.setAttribute("style", "color: blue; background: white;");
})