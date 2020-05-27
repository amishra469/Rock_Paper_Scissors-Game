let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const secissors_div = document.getElementById("s");
const resetButton_div = document.getElementById("reset");

function restartMatch(){
    userScore=0;
    computerScore=0;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
}

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    // console.log(randomNumber);
    // console.log(choices[randomNumber]);
    return choices[randomNumber];

}

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scossor";
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = convertToWord(userChoice) + smallUserWord + " beats " + convertToWord(computerChoice) + smallCompWord + " ... You win! ";
}

function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = convertToWord(computerChoice) + smallCompWord +  " beats " + convertToWord(userChoice) + smallUserWord + " ... You Lose! ";
}

function draw(userChoice, computerChoice){
    userScore++;
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = convertToWord(computerChoice) + smallCompWord +  " same " + convertToWord(userChoice) + smallUserWord + " ... Match Draw! ";
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
        
    }
}

function main(){
    rock_div.addEventListener('click', function(){
        game("r");
    })
    paper_div.addEventListener('click', function(){
        game("p");
    })
    secissors_div.addEventListener('click', function(){
        game("s");
    })
    resetButton_div.addEventListener('click', function(){
        restartMatch();
    })

}

main();