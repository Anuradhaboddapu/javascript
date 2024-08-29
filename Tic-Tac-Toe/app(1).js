let boxes=document.querySelectorAll("#box");
let restBtn= document.querySelector("#btn-reset");
let newBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg");

let turnO= true;//playerX,PlayerO

const winPatterns=[
 [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
];

//reset the game


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       if(turnO){
        console.log("button was clicked");
        box.innerText="O";
        box.style.color="#4361ee";
        turnO=false;
       }else{
        console.log("button was clicked");
        box.innerText="X";
        box.style.color="#f72585";
        turnO=true;
       }
       box.disabled=true;

       checkWinner();
    });
});

const resetGame=() =>{
   turnO=true;
   enableBoxes();
    msgContainer.classList.add("hide");
};
const disableBoxes=() =>{
   for(let box of boxes){
    box.disabled=true;
   }
};
const enableBoxes=() =>{
  for(let box of boxes){
   box.disabled=false;
   box.innerText="";
  }
};
const showWinner=(winner)=>{
  msg.innerText=`Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
};

const checkWinner=() =>{
  for( let pattern of winPatterns){

   let pos1Val= boxes[pattern[0]].innerText;
   let pos2Val= boxes[pattern[1]].innerText;
   let pos3Val=boxes[pattern[2]].innerText;

   if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
         if(pos1Val === pos2Val && pos2Val === pos3Val) {
          console.log("winner",pos1Val);
          
          showWinner(pos1Val);
          disableBoxes();
         }  
   }
}
};

newBtn.addEventListener("click",resetGame);
restBtn.addEventListener("click",resetGame);