let turn = "X";
let finalGameOver = false;
const reset = document.querySelector('.reset');

const moves = () => {
    return turn === "X"? "O" :"X";
}


let winner = () =>{
    let boxtext = document.getElementsByClassName("move");
    let winConditions = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    winConditions.forEach(e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won!";
            finalGameOver = true;
        }
        

        
        
    })
}


let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(Element => {
    let boxtext = Element.querySelector(".move");
    Element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = moves();
            winner();
            if(!finalGameOver){
                document.querySelector(".info").innerText = `${turn}'s Move`;
            }
            
        }
        
        
    })
})


reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.move');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    finalGameOver = false
   
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    
})