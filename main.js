const guessField = 
      document.querySelector('.guessField');
const guessSubmit = 
      document.querySelector('.guessSubmit');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const startNew = document.querySelector('.startNew');
const previous = document.querySelector('.previous');

startNew.hidden = true;

let guessCount = 1;
let randomNumber = Math.floor(Math.random()*100)+1;
//loome Array
let previousGuesses = [];
const checkGuess = () =>{
    let userGuess = Number(guessField.value);
    previousGuesses.push(userGuess);
    previousGuesses.join();
    
    if(guessCount ===1){
        guesses.textContent = 'Eelnevad pakkumised: ';
        previous.hidden = true;

    }
    guesses.textContent += `${userGuess} `;
    //kontrollime kas on õige
    if(userGuess ===randomNumber) {
        lastResult.textContent = 'Õige vastus!';
        lastResult.style.backgroundColor = 'green';
        lowOrHigh.textContent = '';
        guessField.disabled = true;
        guessSubmit.disabled = true;
        startNew.hidden = false;
    //kontollime, et kas kasutaja on max arvamusteni jõudnud    
    }else if (previousGuesses.includes(userGuess))
        {previous.textContent= 'Juba proovisid seda numbrit';
    }else if (guessCount === 5){
        lastResult.textContent = 'Mäng läbi';
        lastResult.style.backgroundColor = 'yellow';
        lowOrHigh.textContent = '';
        guessField.disabled = true;
        guessSubmit.disabled = true;
        startNew.hidden = false;
    }else{
        lastResult.textContent = 'Vale vastus';
        lastResult.style.backgroundColor = 'red';
        //kui number on liiga madal
        const lowOrHighText = 'Viimane pakkumine oli liiga ';
        if(userGuess < randomNumber){
            lowOrHigh.textContent = lowOrHighText+ 'madal';
           
        }
        //kui on number liiga kõrgel
        else if (userGuess > randomNumber){
               lowOrHigh.textContent = lowOrHighText+ 'kõrge';
        }
    }
    
    guessCount++;
    guessField.value = '';
    guessField.focus();
};
guessSubmit.addEventListener('click', checkGuess);

Number(guessField.value)