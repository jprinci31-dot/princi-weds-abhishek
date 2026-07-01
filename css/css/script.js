function playMusic() {
    document.getElementById("music").play();
}

/* AUTO PLAY (browser-safe trick) */
window.addEventListener("click", function () {
    document.getElementById("music").play();
}, { once: true });

/* COUNTDOWN */
const weddingDate = new Date("February 2, 2027 19:00:00").getTime();

const countdown = document.getElementById("countdown");

setInterval(function () {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML =
        "⏳ " + days + "d " + hours + "h " + minutes + "m " + seconds + "s";

    if (distance < 0) {
        countdown.innerHTML = "💍 The Wedding Has Started!";
    }
}, 1000);

/* HEART ANIMATION */
setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.animation = "floatUp 5s linear";
    heart.style.opacity = 0.7;
    heart.style.pointerEvents = "none";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}, 500);
