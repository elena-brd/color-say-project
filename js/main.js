const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;


const rec = new SpeechRecognition();

rec.lang = 'en-US';
rec.continuous = true;


rec.onresult = (e) => {
    const colors = [
        'red',
        'orange',
        'black',
        'white',
        'pink',
        'yellow',
        'green',
        'blue'
    ]
    for (let i = e.resultIndex; i < e.results.length; i++) {
        const script = e.results[i][0].transcript.toLowerCase().trim();

        if (colors.includes(script)) {
            document.body.style.color = script;
        } else {
            alert('Please say a color')
        }
    }
}

rec.start();