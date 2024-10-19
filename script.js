function countdown() {
    const targetDate = new Date("May 10, 2050 23:59:59").getTime(); // Set your target date
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference < 0) {
        document.getElementById("timer").innerHTML = "Time's Up!";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

// Color inversion flashing effect
function startFlashingInversion() {
    setInterval(() => {
        document.body.classList.toggle("inverted");
    }, 500); // Time interval in milliseconds
}

// Update the countdown every 1 second
setInterval(countdown, 1000);
