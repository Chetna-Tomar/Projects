let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerO
let count = 0; //To Track Draw

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      //playerO
      box.innerText = "O";
      turnO = false;
    } else {
      //playerX
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

/*
//start button//
let startBtb =
document.querySelector("#start-btn");
let player1Input =
document.querySelector("#player1-name");
let symbolselect =
document.querySelector9("#smbol-select");

let plyer1 = "Player 1";
let player2 = "Player 2";
let player1symbol ="0"
let player2symbol ="X";

startBtn.addEventListener("click", ()=>
   {
  player1 = player1Input. value ;
  player2 =player2symbol. value;

  if(symbolselect.value ==="O"){
    player1symbol="o";
    player2symbol= "X";
    turnO = true;
  } else {
    player1symbol="X";
    player1symbol="O";
    turnO = false;
  }
 resetGame();
});
*/
boxes.forEach=((box)=>{
  box.addEventListener("click",()=> {
    if(turnO){
      box.innerText= player1symbol;
      
    }else{
      box.innerText = player2symbol;
    }
    box.disabled = true ;
    count++;

    let isWinner = checkWinner();
    if (count === 9 && !isWinner){
      gameDraw();
    }
    turnO = !turnO;


});



const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return true;
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame); 