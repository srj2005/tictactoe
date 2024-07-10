let boxes=document.querySelectorAll(".box");
let reset=document.getElementById("reset");
let turnX=true;     
let newbtn=document.querySelector("#new-btn");
let msgCont=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
const win=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
let count=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       // console.log("box was clicked");
        if(turnX){
        box.innerText="X";
        box.style.color="red";
        turnX=false;
        }
        else{
            box.innerText="O";  
            box.style.color="blue"; 
            turnX=true;
        }
        box.disabled=true;
        count++;
     //   console.log(count);
        let win=checkWinner();
        if(count===9 && !win){
            gameDraw();
        }
    });
});
const resetGame=()=>{
    turnX=true;
    count=0;
    enable();
    msgCont.classList.add("hide");
}
const disable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showMsg=(winner)=>{
   
    msgCont.classList.remove("hide");
    msg.innerText=`Congratulations,winner is ${winner}`;
    
    disable();
}
const checkWinner=()=>{
    for (let pattern of win){
    let pos1=boxes[pattern[0]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText;
    if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos2 && pos2===pos3){
            //console.log("winner!",pos1);
            showMsg(pos1);
            return true;
        }
       
    }
}
};
const gameDraw=()=>{
    msgCont.classList.remove("hide");
    msg.innerText="It's a Draw!!";
    disable();
}
newbtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);


