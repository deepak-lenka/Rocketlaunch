const rocket = document.getElementById('rocket');
const launchButton = document.getElementById('launch');
const returnButton = document.getElementById('return');
const rocketAudio = document.getElementById('rocket-audio');


let launched = false; // Track if the rocket has been launched

launchButton.addEventListener('click', () => {
    console.log('Launch button clicked'); // Add this line
    // Rest of your code
    if (!launched) {
        rocketAudio.play(); // Play the rocket engine sound
        setTimeout(() => {
            rocketAudio.pause(); // Pause the audio after 4 seconds
            rocketAudio.currentTime = 0; // Reset the audio to the beginning
        }, 4000);


        rocket.classList.add('launching'); // Add the launching class to the rocket
        launched = true; // Set launched to true to prevent re-launching
        launchButton.style.display = 'none'; // Hide the launch button
        setTimeout(() => {
            returnButton.style.display = 'block'; // Show the return button after 4 seconds
        }, 4000); // 4 seconds (4000 milliseconds) delay
    }
});

returnButton.addEventListener('click', () => {
    if (launched) {
// Play the landing sound
const landingAudio = document.getElementById('landing-audio');
landingAudio.play();

// Pause the audio after 4 seconds
setTimeout(() => {
    landingAudio.pause();
    landingAudio.currentTime = 0; // Reset the audio to the beginning
}, 4000);

 
         // Rest of your code to return the rocket to Earth
        rocket.classList.remove('launching'); // Remove the launching class to return to Earth
        launched = false; // Set launched to false when returning to Earth
        returnButton.style.display = 'none'; // Hide the return button
        launchButton.style.display = 'block'; // Show the launch button when returning to Earth
    }
});
