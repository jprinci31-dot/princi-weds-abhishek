/* ==========================================
   PRINCI ❤️ ABHISHEK
   DIAMOND WEDDING SCRIPT
   PART 1
========================================== */

// Splash Screen

const splash = document.getElementById("splash");
const enterBtn = document.getElementById("enterBtn");
const music = document.getElementById("bgMusic");

enterBtn.addEventListener("click", () => {

    splash.style.opacity = "0";
    splash.style.visibility = "hidden";

    if (music) {
        music.play().catch(() => {});
    }

});

// ==============================
// Wedding Countdown
// ==============================

const weddingDate = new Date("February 2, 2027 23:00:00").getTime();

const countdown = setInterval(() => {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance <= 0) {

        clearInterval(countdown);

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

        return;

    }

    document.getElementById("days").innerHTML =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("hours").innerHTML =
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById("minutes").innerHTML =
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("seconds").innerHTML =
        Math.floor((distance % (1000 * 60)) / 1000);

}, 1000);

// ==============================
// Music Button
// ==============================

const musicBtn = document.getElementById("musicBtn");

if (musicBtn && music) {

    let playing = true;

    musicBtn.addEventListener("click", () => {

        if (playing) {

            music.pause();

            musicBtn.innerHTML =
                '<i class="fa-solid fa-volume-xmark"></i>';

        } else {

            music.play();

            musicBtn.innerHTML =
                '<i class="fa-solid fa-music"></i>';

        }

        playing = !playing;

    });

}
/* ==========================================
   DIAMOND WEDDING SCRIPT
   PART 2
========================================== */

// ==============================
// Scroll To Top Button
// ==============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ==============================
// Smooth Navigation
// ==============================

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ==============================
// Falling Rose Petals
// ==============================

const petals = document.getElementById("petals");

function createPetal(){

    if(!petals) return;

    const petal = document.createElement("div");

    petal.innerHTML = "🌸";

    petal.style.position = "fixed";

    petal.style.left = Math.random()*100 + "vw";

    petal.style.top = "-40px";

    petal.style.fontSize = (20 + Math.random()*20) + "px";

    petal.style.zIndex = "1";

    petal.style.pointerEvents = "none";

    petal.style.transition = "transform linear";

    petals.appendChild(petal);

    let pos = -40;

    const speed = 1 + Math.random()*2;

    const drift = (Math.random()*2)-1;

    const fall = setInterval(()=>{

        pos += speed;

        petal.style.top = pos + "px";

        petal.style.left =
        (parseFloat(petal.style.left)+drift) + "px";

        petal.style.transform =
        `rotate(${pos*3}deg)`;

        if(pos > window.innerHeight+50){

            clearInterval(fall);

            petal.remove();

        }

    },20);

}

setInterval(createPetal,500);

// ==============================
// Fade Animation
// ==============================

const cards = document.querySelectorAll(

'.person-card,.event-card,.story-card
