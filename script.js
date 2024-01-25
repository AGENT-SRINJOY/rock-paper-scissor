let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissor = document.getElementById('scissor');
let playerscore = document.querySelector('#pl');
let computerscore = document.querySelector('#comp');
let text = document.querySelector('#text');
let playervalue = 0;
let computervalue = 0;
let playermv;

function computermv(){
let moves = ['rock' , 'paper' , 'scissor'];
const random = Math.floor(Math.random() * moves.length);
return moves[random];
}

const rockMove = () =>{
   playermv = 'rock'
   let comp = computermv()
   if(playermv == comp){
    text.innerText = 'The computer also chose rock hence draw'
    text.classList.remove('win')
    text.classList.remove('loose')
   }else if(comp == 'scissor'){
    text.innerText = 'The computer chose scissor hence you gain a point'
    text.classList.add('win')
    text.classList.remove('loose')
    playervalue += 1
    playerscore.innerText = `PLAYER: ${playervalue}`;
   }else{
    text.innerText = 'The computer chose paper hence you loose'
    text.classList.add('loose')
    text.classList.remove('win')
    computervalue += 1;
    computerscore.innerText = `COMPUTER: ${computervalue}`;
   }
}

const paperMove = () =>{
  playermv = 'paper'
  let comp = computermv()
  if(playermv == comp){
   text.innerText = 'The computer also chose paper hence draw'
   text.classList.remove('win')
   text.classList.remove('loose')
  }else if(comp == 'scissor'){
   text.innerText = 'The computer chose scissor hence you loose '
   text.classList.add('loose')
   text.classList.remove('win')
   computervalue += 1;
   computerscore.innerText = `COMPUTER: ${computervalue}`;
  }else{
   text.innerText = 'The computer chose rock hence you gain a point'
   text.classList.add('win')
   text.classList.remove('loose')
   playervalue += 1
   playerscore.innerText = `PLAYER: ${playervalue}`;
  }
}

const scissorMove = () =>{
  playermv = 'scissor'
  let comp = computermv()
  if(playermv == comp){
   text.innerText = 'The computer also chose scissor hence draw'
   text.classList.remove('win')
   text.classList.remove('loose')
  }else if(comp == 'rock'){
   text.innerText = 'The computer chose rock hence you loose '
   text.classList.add('loose')
   text.classList.remove('win')
   computervalue += 1;
   computerscore.innerText = `COMPUTER: ${computervalue}`;
  }else{
   text.innerText = 'The computer chose paper hence you gain a point'
   text.classList.add('win')
   text.classList.remove('loose')
   playervalue += 1
   playerscore.innerText = `PLAYER: ${playervalue}`;
  }
}

rock.onclick = rockMove;
paper.onclick = paperMove;
scissor.onclick = scissorMove;

