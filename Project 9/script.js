let input = document.getElementById('input');
let btn = document.getElementById('btn');
let wrng = document.querySelector('.wrng');
let guesses = document.getElementById('guesses');

let answer = Math.floor(Math.random()*100)+1;
console.log(answer);
let numGuesses = 0;

btn.addEventListener("click",()=>{
    guessesNumber();
})

function guessesNumber(){
    if (input.vallue<1 || input.value> 100 || isNaN(input.value)){
wrng.innerHTML = "Enter between 1 to 100";
} else{
    numGuesses++;
    guesses.innerHTML = "No. of Guesses: " + numGuesses;
    if(input.value > answer){
        wrng.innerHTML = "You guessed too high";
        input.value = "";
    }else if(input.value < answer){
        wrng.innerHTML = "You guessed too Low";
        input.value="";
    }else{
        wrng.innerHTML = "Congratulation!!! You Guessed the correct Number";
       
        setTimeout(()=>{

            resetGame();
        },5000)
    }
}
}

function resetGame(){
    numGuesses = 0;
    answer = Math.floor(Math.random()*100)+1;
    input.value="";
    guesses.innerHTML = "No. of Guesses:: 0";
}
