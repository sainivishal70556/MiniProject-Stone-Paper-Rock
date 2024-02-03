let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".btn1");
const btn=document.querySelector(".btn");
const you=document.querySelector(".you");
const comp=document.querySelector(".comp");
const genCampChoice = () => {
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Game was draw.");
    btn.innerText="Game was draw";
    btn.style.backgroundColor="yellow";

};
let a=0;
let b=0;
const Winner=(userWin,choiceId,compId) => {
    if(userWin){
        console.log("you win");
        a++;
        you.innerText=a;
        btn.innerText=`you win! your ${choiceId} beats ${compId}`;
        btn.style.backgroundColor="green";

    }
    else{
        console.log("you lose");
        b++;
        comp.innerText=b;
        btn.innerText=`you lose!  ${compId} beats your ${choiceId}`;
        btn.style.backgroundColor="red";


    }
};

const playGame = (choiceId) => {
    console.log("user choice =",choiceId);
    const compId=genCampChoice();
    
    console.log("comp choice = ",compId);

    //Generate computer choice-> modular way of programming
    if(choiceId === compId){
        //draw game
        drawGame();
    }
    else{
        let userWin = true;
        if(choiceId=== "rock"){
            userWin=compId === "paper"?false :true;
        }
        else if(choiceId=== "paper"){
            userWin = compId=== "scissor"?false:true;
        }
        else{
            userWin = compId=== "rock"?false:true;
        }
        Winner(userWin,choiceId,compId);
    }
};

 choices.forEach((choice)=>{
    
    choice.addEventListener("click",() =>{
        const choiceId = choice.getAttribute("id");
        playGame(choiceId);
    });
 });