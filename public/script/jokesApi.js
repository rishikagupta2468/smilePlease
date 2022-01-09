const jokeBtn = document.getElementById('jokeButton');
const voice = document.getElementById('voice');
const jokeText = document.getElementById('jokeText');
const speech = new SpeechSynthesisUtterance();


//bind bind with the function when window is successfully loaded
window.onload = function () {
    jokeBtn.addEventListener('click',jokes);
};


//Jokes fetch api
function jokes(){
    speechSynthesis.cancel()
    fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
    .then(res => res.json())
    .then(data =>{
         jokeText.innerText = data.joke
        tellJoke()
    })
}

function tellJoke(){
    speech.text = jokeText.innerText;
    window.speechSynthesis.speak(speech);
}




