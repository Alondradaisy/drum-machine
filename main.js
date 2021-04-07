// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3'); 

// This function is called every 600ms
function update() {

    // Play the 'tick' sound
    tick.play();
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600); //ticks
    setInterval(updateTock, 2400); //6*4 =24
    setInterval(count, 600) //counts
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);

const tock = new Audio('sounds/tock.mp3'); // plays tock audio 

function updateTock() {
    tock.play();
} 

let counter = 0;

const checkbox = document.querySelector("#metronome").checked = true;
console.log(checkbox.checked);

const counting = document.querySelector('.counter');

function count () {
    counting.innerHTML = counter;
    if(counter < 4) {
        counter++;
    } else (counter = 1)
    
}

//const metro = document.getElementById('metronome');
//const kickDrum = document.getElementById('kick-drum');
//const snareDrum = document.getElementById('snare-drum');
//const hiHat = document.getElementById('hi-hat');

//const input_metronome = document.getElementById('metronome');
//const input_kickDrum = document.getElementById('kick-drum');
//const input_snareDrum = document.getElementById('snare-drum');
//const hiHat = document.getElementById('hi-hat');


