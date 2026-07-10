// ===============================
// COUNTDOWN
// ===============================

const weddingDate = new Date("February 2, 2027 23:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance < 0) {

        document.getElementById("countdown").innerHTML =
            "<h2>🎉 Happily Married 🎉</h2>";

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").textContent = days;

    document.getElementById("hours").textContent = hours;

    document.getElementById("minutes").textContent = minutes;

    document.getElementById("seconds").textContent = seconds;

}

updateCountdown();

setInterval(updateCountdown,1000);


// ===============================
// HEADER SHADOW
// ===============================

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.boxShadow="0 10px 30px rgba(0,0,0,.15)";

}else{

header.style.boxShadow="0 5px 15px rgba(0,0,0,.08)";

}

});


// ===============================
// GALLERY POPUP
// ===============================

const galleryImages=document.querySelectorAll(".gallery-item img");

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

const popup=document.createElement("div");

popup.className="popup";

popup.innerHTML=`
<img src="${img.src}">
`;

document.body.appendChild(popup);

popup.addEventListener("click",()=>{

popup.remove();

});

});

});


// ===============================
// FADE ANIMATION
// ===============================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});

document.querySelectorAll("section").forEach(section=>{

observer.observe(section);

});
