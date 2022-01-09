const jokeBtn = document.getElementById('jokeButton');
const voice = document.getElementById('voice');
const jokeText = document.getElementById('jokeText');
const speech = new SpeechSynthesisUtterance();


//bind bind with the function when window is successfully loaded
window.onload = function () {
    jokeBtn.addEventListener('click',jokes);
    speechSynthesis.addEventListener('voiceschanged',updateVoice);
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
    if(speech.voice)
        window.speechSynthesis.speak(speech);
}

function updateVoice(){
    const voices = speechSynthesis.getVoices()
    voices.map((v,i)=>{
        const option = document.createElement('option');
        option.value = i;
        option.textContent = v.name;
        voice.appendChild(option);
    })

    voice.addEventListener('change',(e)=>{
        speechSynthesis.cancel()
        const selectedVoice = e.target.value;
        speech.voice = voices[selectedVoice]
        tellJoke()
    })
}


