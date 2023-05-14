const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')
const circle = document.querySelector('circle')

const perimeter = circle.getAttribute('r') * 2 * Math.PI
circle.setAttribute('stroke-dasharray', perimeter)

let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration) { //this = timeRemaining(not yet calculate)
        duration = totalDuration;
    },
    onTick(timeRemaining) { //receive timeRemaining(calculated)
        circle.setAttribute('stroke-dashoffset',
            perimeter * timeRemaining / duration - perimeter //formula 
        );

    },
    onComplete() {
        console.log('Timer is completed')
    }
}) 
