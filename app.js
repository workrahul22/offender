const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const gretings = [
    'Dont you have work to do',
    'leave me alone',
    'go away',
    'focus on your work',
    'I dont care',
    'Go fuck your self',
    'you are a fucking idiot',
    'you are fucked up',
    'you are a gone case, go fuck yourself',
    'you need to gear up man'
];

try{
    const SpeechRecongnition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecongnition();

    recognition.onstart = function () {
        console.log("voice is activated, you can speak");
    }

    recognition.onresult = function(event) {
        const current = event.resultIndex;
        const transcript = event.results[current][0]["transcript"];
        console.log(transcript);
        content.textContent = transcript;
        readOutLoud(transcript);
    }

    btn.addEventListener('click' , () => {
        recognition.start();
    });
    let ind = 0;
    function readOutLoud(message){
        const speech = new SpeechSynthesisUtterance();
        //speech.text = "I dont't understand you";
        //if(message.includes('how are you')){
            const finalText = gretings[ind];
            speech.text = finalText;
            ind += 1;
            if(ind === gretings.length){
                ind = 0;
            }
//}
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;
        window.speechSynthesis.speak(speech);
    }
}catch(e){
    console.log(e);
    console.log("Not supported");
}