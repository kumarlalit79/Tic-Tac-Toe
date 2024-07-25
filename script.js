let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newGameBtn");
let msgContainer = document.querySelector(".msg-container");
let msgPara = document.querySelector("#msg");

let turn0 = true;

const winPattern = [
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
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

// ab mughe ek ek boxes ke liye ek event listner add karna hai

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        if(turn0){
            box.innerText = "0";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true; // diable isliye kar diya taaki koi ek baar value deke us value ko dobara change na kar paye
        checkWinner();
    });
});


const disableBoxes = () => { //jese hi mughe ek winner mil jayega , saare boxes ko disable krdo.
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => { // taki jab naya game shuru ho to saare boxes dobara enable ho jaye
        box.disabled = false;
        box.innerText = "";
    }

const showWinner = (winner) =>{
    msgPara.innerText = `Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winPattern){
        let post1Val = boxes[pattern[0]].innerText;
        let post2Val = boxes[pattern[1]].innerText;
        let post3Val = boxes[pattern[2]].innerText;
     
        if(post1Val != "" && post2Val != "" && post3Val != ""){

            if(post1Val == post2Val && post2Val == post3Val){
                showWinner(post1Val);
            }
        }
    }
}

newGameBtn.addEventListener("click" , resetGame);
resetbtn.addEventListener("click" , resetGame);