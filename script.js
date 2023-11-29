alert("Let's start the game...!\nYour choice are rock, paper and scissor...");
let playerChoice;
let playAgain = true;
while(playAgain){
    let choice = true;
    while(choice){
        playerChoice = prompt("Enter your choice...\n(Rock, Paper or Scissor.)").toLowerCase().trim();
        if(playerChoice){
            if(playerChoice===null){
                alert("You didn't enter any choice.");
            }
            else{
                if(playerChoice==="rock" || playerChoice==="paper" || playerChoice==="scissor"){
                    choice = false;
                }
                else{
                    alert("Wrong entry.Type Rock, Paper or Scissor...");
                }
            }
        }
        else{
            alert("You canceled this game...Bye.!");
            choice = false;
        }
    }
    let winner;
    let creatChoice = Math.floor(Math.random()*3+1);
    let computerChoice = creatChoice===1?"rock":creatChoice===2?"paper":"scissor";
    if(playerChoice==="rock"){
        winner = computerChoice==="paper"?"computer"
        :computerChoice==="scissor"?"You":"tie";
    }
    if(playerChoice==="paper"){
        winner = computerChoice==="rock"?"You"
        :computerChoice==="scissor"?"computer":"tie";
    }
    if(playerChoice==="scissor"){
        winner = computerChoice==="rock"?"computer"
        :computerChoice==="paper"?"You":"tie";
    }if(playerChoice){
        if(winner==="tie"){
            alert("Game ends with tie...");
        }
        else{
        alert(`Computer : ${computerChoice}\n  You    : ${playerChoice}\n${winner} won the game...`);
        }
    }
    playAgain = confirm("Do you want to play again..?");
}