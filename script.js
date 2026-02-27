const birthday = new Date(2026,2,9,0,0,0);


const emojis = ["🎉","🎂","🍫","😍","🎁"];

function updateCountdown() {
  const now = new Date();
  const diff = birthday - now;

  if (diff <= 0) {
    showBirthdayScreen();
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("timer").innerHTML =
    days + " Days : " +
    hours + " Hours : " +
    minutes + " Minutes : " +
    seconds + " Seconds";
}

function showBirthdayScreen() {
  document.getElementById("timer").style.display = "none";
  document.getElementById("title").style.display = "none";

  const screen = document.getElementById("birthdayScreen");
  screen.style.display = "flex";

  setInterval(createEmoji, 300);

  // Redirect after 5 seconds
  setTimeout(() => {
    window.location.href = "gifts.html";
  }, 5000);
}

function createEmoji() {
  const emoji = document.createElement("div");
  emoji.className = "emoji";
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 3000);
}

setInterval(updateCountdown, 1000);
updateCountdown();
const targetDate = new Date("March 9, 2026 00:00:00").getTime();

const countdown = setInterval(function () {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "🎉 Surprise Time!";
    }
}, 1000);

