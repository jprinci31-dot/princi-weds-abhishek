/* =====================================
   DIAMOND WEDDING SCRIPT - PART 1
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* Splash Screen */

    const splash = document.getElementById("splash");
    const enterBtn = document.getElementById("enterBtn");

    if (enterBtn) {

        enterBtn.addEventListener("click", () => {

            splash.style.opacity = "0";

            setTimeout(() => {

                splash.style.display = "none";

            }, 1000);

            startMusic();
            startPetals();
            startSparkles();
            startCountdown();

        });

    }

});

/* ===========================
BACKGROUND MUSIC
=========================== */

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

function startMusic(){

if(music){

music.volume = 0.4;

music.play();

playing = true;

}

}

if(musicBtn){

musicBtn.addEventListener("click",()=>{

if(!playing){

music.play();

playing=true;

musicBtn.innerHTML='<i class="fa-solid fa-volume-high"></i>';

}

else{

music.pause();

playing=false;

musicBtn.innerHTML='<i class="fa-solid fa-volume-xmark"></i>';

}

});

}

/* ===========================
COUNTDOWN
=========================== */

const targetDate = new Date("February 2, 2027 00:00:00").getTime();

function startCountdown(){

setInterval(()=>{

const now = new Date().getTime();

const distance = targetDate-now;

const days=Math.floor(distance/(1000*60*60*24));

const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

const seconds=Math.floor((distance%(1000*60))/1000);

document.getElementById("days").innerHTML=days;

document.getElementById("hours").innerHTML=hours;

document.getElementById("minutes").innerHTML=minutes;

document.getElementById("seconds").innerHTML=seconds;

},1000);

}

/* ===========================
FALLING PETALS
=========================== */

function startPetals(){

setInterval(()=>{

const petal=document.createElement("div");

petal.classList.add("petal");

petal.innerHTML="🌸";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=(5+Math.random()*5)+"s";

petal.style.fontSize=(18+Math.random()*18)+"px";

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},9000);

},350);

}

/* ===========================
SPARKLES
=========================== */

function startSparkles(){

setInterval(()=>{

const spark=document.createElement("div");

spark.classList.add("sparkle");

spark.innerHTML="✨";

spark.style.left=Math.random()*100+"vw";

spark.style.top=Math.random()*100+"vh";

document.body.appendChild(spark);

setTimeout(()=>{

spark.remove();

},2000);

},500);

}
/* =====================================
   DIAMOND WEDDING SCRIPT - PART 2
===================================== */

/* ===========================
SMOOTH SCROLL
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* ===========================
SCROLL REVEAL
=========================== */

const revealItems=document.querySelectorAll(
".person-card,.story-item,.event-card,.gallery-grid img,.time-box,.map-box,.rsvp form"
);

function reveal(){

const windowHeight=window.innerHeight;

revealItems.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<windowHeight-100){

item.style.opacity="1";

item.style.transform="translateY(0)";

}

});

}

revealItems.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(60px)";

item.style.transition="all .8s ease";

});

window.addEventListener("scroll",reveal);

reveal();

/* ===========================
GALLERY POPUP
=========================== */

const images=document.querySelectorAll(".gallery-grid img");

images.forEach(img=>{

img.addEventListener("click",()=>{

const popup=document.createElement("div");

popup.style.position="fixed";

popup.style.left="0";

popup.style.top="0";

popup.style.width="100%";

popup.style.height="100%";

popup.style.background="rgba(0,0,0,.9)";

popup.style.display="flex";

popup.style.justifyContent="center";

popup.style.alignItems="center";

popup.style.zIndex="999999";

const image=document.createElement("img");

image.src=img.src;

image.style.maxWidth="90%";

image.style.maxHeight="90%";

image.style.borderRadius="20px";

image.style.border="5px solid gold";

popup.appendChild(image);

popup.onclick=function(){

popup.remove();

};

document.body.appendChild(popup);

});

});

/* ===========================
RSVP
=========================== */

const form=document.querySelector(".rsvp form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("💖 Thank You! Your RSVP has been received.");

form.reset();

});

}

/* ===========================
CLICK SPARKLE
=========================== */

document.addEventListener("click",function(e){

const sparkle=document.createElement("div");

sparkle.innerHTML="✨";

sparkle.style.position="fixed";

sparkle.style.left=e.clientX+"px";

sparkle.style.top=e.clientY+"px";

sparkle.style.fontSize="24px";

sparkle.style.pointerEvents="none";

sparkle.style.animation="sparkle 1s linear forwards";

document.body.appendChild(sparkle);

setTimeout(()=>{

sparkle.remove();

},1000);

});

/* ===========================
HEADER EFFECT
=========================== */

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>80){

header.style.background="rgba(45,20,70,.92)";

header.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

}else{

header.style.background="rgba(40,20,70,.45)";

header.style.boxShadow="none";

}

});

/* ===========================
CONSOLE MESSAGE
=========================== */

console.log("💜 Princi ❤️ Abhishek");
console.log("💍 Wedding Date : 02 February 2027");
console.log("✨ Diamond Version Loaded Successfully");
