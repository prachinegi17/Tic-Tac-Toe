console.log(" Welcome to Tic Tac Toe")
let music = new Audio("audio.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.wav")
 
let turn = "X"
let isgameover= false;

//Function to change the turn
const changeTurn = () =>{
    return turn === "X" ? "0": "X"
}
   
//Function to check for a win
const checkWin =() =>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [2,5,8],
        [1,4,7],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
           document.querySelector('.info').innerText = boxtext[e[0]].innerText  + " Won"
           isgameover= true;

           /* when game is over gif ... */
           document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "220px"
        }

    })
  
}

//main logic/ Game logic

music.play()  /* to play background music */

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
  let boxtext = element.querySelector('.boxtext');
  element.addEventListener('click', () =>{
    if(boxtext.innerText === ''){
        boxtext.innerText = turn;
        turn=  changeTurn();
        audioTurn.play();
        checkWin();
        if (! isgameover){
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;

        }
        
    }
  })
})

//Add onclick listener to reset button
reset.addEventListener('click', ()=> {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = ""
    });
    turn ="X";
    isgameover =false
    document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
     document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})