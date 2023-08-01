'use Strict';

let score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
let current0 = document.getElementById('current--0');
let current1 = document.getElementById('current--1');
const player0Section = document.querySelector('.player--0');
const player1Section = document.querySelector('.player--1');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnhold = document.querySelector('.btn--hold');
const img = document.querySelector('.dice');


  let state = true;
  let currentScore = 0;
  let activePlayer = 0;  // 0 is player 1 and 1 is player 2 
  let scores = [0,0];



const init = function(){
  currentScore = 0;
  activePlayer = 0;  // 0 is player 1 and 1 is player 2 
  scores = [0,0];
  state=true;
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  img.classList.add('hidden');
  player0Section.classList.remove('player--winner');
  player1Section.classList.remove('player--winner');
  player0Section.classList.add('player--active');
  player1Section.classList.remove('player--active');
}

init();

const swtichPlayer = function(){
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0 ;
  player0Section.classList.toggle('player--active');
  player1Section.classList.toggle('player--active');
}


btnRoll.addEventListener('click', function(){
  if(state)
  {
    img.classList.remove('hidden');
    let rand = Math.floor(Math.random()*6)+1;
    
    img.src = `images/${rand}.png`;

    if(rand !== 1){
      currentScore += rand; 
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      swtichPlayer();
    }
  }
});


btnhold.addEventListener('click',function(){
  if(state)
  {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if(scores[activePlayer]>=20)
    {
      state = false;
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
  
      img.classList.add('hidden');
    } else {
      swtichPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
