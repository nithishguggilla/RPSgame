let selection = document.querySelectorAll(".choice");
let message = document.querySelector("#show_msg");



const generateComputerChoice = () =>{
    const options = ["rock" , "paper", "scissor"];
    let randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}

const showWinner = (userWin ,computerChoice) =>{
    if(userWin){
        message.innerText = `You Won Computer Chioce is ${computerChoice} `;
        message.style.backgroundColor = "green";
    }else{
        message.innerText = `You Lost Computer Chioce is ${computerChoice} `;
        message.style.backgroundColor = "red";
    }
}

const playGame = (userChoice)=>{
    const computerChoice = generateComputerChoice();

    if(userChoice === computerChoice){
        message.innerText =  `Your Game is Draw Please Play again! `;
        message.style.backgroundColor = "#D8C4B6";
    }else{
        let userWin = true;
        if(userChoice == "rock"){
            userWin = computerChoice === "paper" ? false :true;
        }else if(userChoice == "paper"){
            userWin = computerChoice === "scissor"?false :true;
        }else if(userChoice == "scissor"){
            userWin = computerChoice === "rock"?false :true;
        }
        showWinner(userWin,computerChoice);
}}


selection.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});