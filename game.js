var b=Array.from(document.getElementsByClassName('box'));
var s=document.getElementById('options');
var O="O".fontcolor('pink');var X="X";
var p=X+" move!";
var end=false;
var current_play=s.options[s.selectedIndex].value;
var btn=document.getElementById('rst');
var player=document.getElementById('player-text');
player.innerHTML=p;
var boxspace=[null,null,null,null,null,null,null,null,null];
const gameboard=()=>{
    b.forEach((box,index)=>{
        let stylestr='';
        if(index<3){
            stylestr+='border-bottom:2px solid blueviolet;';
        }
        if(index%3===0){
            stylestr+='border-right:2px solid blueviolet;';
        }
        if(index%3===2){
            stylestr+='border-left:2px solid blueviolet;';
        }
        if(index >5){
            stylestr+='border-top:2px solid blueviolet;';
        }
     box.style=stylestr;
     box.addEventListener('click',boxClick);
    });
};

const boxClick=(e)=>{
    if(end===true){return;}
    else{s.disabled=true;}
    var id=e.target.id;
    console.log(id);
    if(boxspace[id]==null && id!=""){
        boxspace[id]=current_play;
        e.target.innerHTML=current_play;
        if(playerWon()){
           player.innerHTML=(`Game Won By ${current_play}`).fontcolor("black"); 
           end=true;
           return;
        }
        if(current_play===O)
        {current_play=X;}
        else{current_play=O;}
        p=(p==="X move!")?"O move!":"X move!";
        player.innerHTML=p;
        let count=boxspace.filter(x => x===null).length;
        if(count<1){
            player.innerHTML=("Game draw").fontcolor("black");
            end=true;
            return;
        }
    }
    console.log(boxspace);
};
const playerWon=()=>{
    if(boxspace[0]===current_play){
        if(boxspace[1]==current_play && boxspace[2]==current_play){
            return true;
        }
        if(boxspace[3]==current_play && boxspace[6]==current_play){
            return true;
        }
        if(boxspace[4]==current_play && boxspace[8]==current_play){
            return true;
        }
    }
    if(boxspace[2]===current_play){
        if(boxspace[5]==current_play && boxspace[8]==current_play){
            return true;
        }
        if(boxspace[4]==current_play && boxspace[6]==current_play){
            return true;
        }
    }
    if(boxspace[6]==current_play){
        if(boxspace[7]==current_play && boxspace[8]==current_play){
            return true;
        }
    }
    if(boxspace[4]===current_play){
        if(boxspace[1]==current_play && boxspace[7]==current_play){
            return true;
        }
        if(boxspace[3]==current_play && boxspace[5]==current_play){
            return true;
        }
    }
};
const clr=()=>{
    boxspace.forEach((space,index)=>{
        boxspace[index]=null;
    });
    b.forEach(box=>{
        box.innerHTML="";
    });
    X="X";O="O".fontcolor('pink');
    s.selectedIndex=0;
    p=X+" move!";
    player.innerHTML=p;
    s.disabled=false;
    current_play=s.options[s.selectedIndex].value;
    end=false;
};
s.addEventListener('change',()=>{
    current_play=s.options[s.selectedIndex].value;
    if(current_play=='O'){
        X="X".fontcolor('pink');
        O="O";
        p=O+" move!";
    }
    else{
        X="X";
        O="O".fontcolor('pink');
        p=X+" move!";
    }
    player.innerHTML=p;
});
btn.addEventListener('click',clr);
gameboard();