let player_O = localStorage.getItem("player_O") === "true";
let player_X = localStorage.getItem("player_X") === "true";

// JavaScript For start.html
let btnX = document.querySelector("#playerX");
let btnO = document.querySelector("#playerO");

if (btnX) {
  btnX.addEventListener("click", () => {
    btnX.style.backgroundColor = "yellow";
    player_X = true;
    player_O = false;
    btnO.disabled = true;
    localStorage.setItem("player_X", player_X);
    localStorage.setItem("player_O", player_O);
  });
}

if (btnO) {
  btnO.addEventListener("click", () => {
    btnO.style.backgroundColor = "yellow";
    player_O = true;
    player_X = false;
    btnX.disabled = true;
    localStorage.setItem("player_X", player_X);
    localStorage.setItem("player_O", player_O);
  });
}

// The rest of your code...

/*----------------------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------------------*/

// JavaScript for index.html
let boxes = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#reset-btn");
let winMsg = document.querySelector("#winPop-up");
let winnerName = document.querySelector("#winName");
let count = 0;
// Winning Patterns of a 3*3 Tic-Tac-Toe
const winPatterns = [
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];
// Event to Write X or O alternatively
boxes.forEach((box) => {
box.addEventListener("click",() => {
if(player_X) {
box.innerText = "X";
box.style.color = "Red";
player_X = false;
count++;
} else {
box.innerText = "O";
box.style.color = "aqua";
player_X = true;
count++;
}
box.disabled = true;
checkWinner();
if(count == 9) {
winMsg.firstElementChild.style.display = "none";
winnerName.innerText = "It's a Draw";
winnerName.style.textDecoration = "underline";
winMsg.classList.remove("hide");
resetBtn.innerText = "New Game";
}
});
});
// Reset button to clear the page using reload
if(resetBtn) {
resetBtn.addEventListener("click",() => {
location.reload();
});
}
// Checking winning Position values to identify winner
const checkWinner = () => {
for(let pattern of winPatterns) { 
let a = boxes[pattern[0]].innerText;
let b = boxes[pattern[1]].innerText;
let c = boxes[pattern[2]].innerText;
if(a == '' || b == '' || c == ''){
continue;
} else if(a == b && b == c) {
popWinner(a);
break;
}
}
}
// Display Winner Pop up
const popWinner = (winnner) => {
winnerName.innerText = `${winnner} is the Winner`;
winnerName.style.textDecoration = "underline";
winMsg.classList.remove("hide");
resetBtn.innerText = "New Game";
}
