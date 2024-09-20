let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msg_contain=document.querySelector(".msg_container");
let msg=document.querySelector("#msg");
let newbtn=document.querySelector("#newGame")
let turn0 = true; //palyerX and player0 turns;
let win_patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
boxes.forEach((box)=>{
 box.addEventListener("click",()=>{
    if(turn0){
        box.innerText="O";
        turn0=false;
    }
    else{
        box.innerText="X";
        turn0=true; 
    }
    box.disabled=true;
    check_winner();
 });
});
const boxesDisable=()=>{
    for( let box of boxes){
    box.disabled=true;
    }
}
const enableDisable=()=>{
    for( let box of boxes){
    box.disabled=false;
    box.innerText="";
    }
}

const reset_game=()=>{
    turn0=true;
    enableDisable();
    msg_contain.classList.add("hide");

}
const check_winner=()=>{
 for(let pattern of win_patterns){  
 let pos1=boxes[pattern[0]].innerText;
 let pos2=boxes[pattern[1]].innerText;
 let pos3=boxes[pattern[2]].innerText;    
 if(pos1!="" && pos2!="" && pos3!=""){
    if(pos1===pos2 && pos2===pos3){
        console.log("congrats..You win!")
        showing_winner(pos1);
    }
   
 }                        
}
}
let showing_winner=(winner)=>{
    msg.innerText=`Congratulations..Winner is player ${winner}`;
    msg_contain.classList.remove("hide");
    boxesDisable(); 
   }
 reset.addEventListener("click",reset_game);
 newbtn .addEventListener("click",reset_game);