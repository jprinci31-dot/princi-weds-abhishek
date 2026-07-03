/* ===============================
   DIAMOND BABY PINK SCRIPT
================================= */

// Splash screen
const splash = document.getElementById("splash");
const enterBtn = document.getElementById("enterBtn");
const music = document.getElementById("bgMusic");

enterBtn?.addEventListener("click", () => {
    splash.style.display = "none";
    music?.play();
});


// Countdown
const weddingDate = new Date("February 2, 2027 23:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const diff = weddingDate - now;

    document.getElementById("days").innerText =
        Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById("hours").innerText =
        Math.floor((diff / (1000 * 60 * 60)) % 24);

    document.getElementById("minutes").innerText =
        Math.floor((diff / (1000 * 60)) % 60);

    document.getElementById("seconds").innerText =
        Math.floor((diff / 1000) % 60);
}, 1000);


// Music button
const musicBtn = document.getElementById("musicBtn");

musicBtn?.addEventListener("click", () => {

    if (music.paused) {
        music.play();
        musicBtn.innerHTML = "🎵";
    } else {
        music.pause();
        musicBtn.innerHTML = "🔇";
    }

});


// Scroll to top
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


// Floating petals (simple)
setInterval(() => {

    const petal = document.createElement("div");
    petal.innerHTML = "🌸";
    petal.style.position = "fixed";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.top = "-20px";
    petal.style.fontSize = "20px";
    petal.style.zIndex = "1";

    document.body.appendChild(petal);

    let fall = setInterval(() => {
        petal.style.top = petal.offsetTop + 2 + "px";

        if (petal.offsetTop > window.innerHeight) {
            petal.remove();
            clearInterval(fall);
        }
    }, 20);

}, 500);
