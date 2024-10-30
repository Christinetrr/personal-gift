function openEnvelope() {
    const letter = document.getElementById("letter");
    letter.classList.add("show");

    const audio = document.getElementById("myAudio");
    audio.play();

    const confettiInterval = setInterval(() => {
        confetti({
            particleCount: 40,             
            startVelocity: 20,             
            spread: 70,                    
            origin: { x: Math.random(), y: 0 },
            gravity: 0.5,                 
            ticks: 1000,                    
            colors: ['#ff66b2', '#ffb3b3', '#ffc1e3', '#ffe6f3']
        });
    }, 200); // 200ms interval between bursts 

    
    setTimeout(() => {
        clearInterval(confettiInterval);
    }, 5000);
}