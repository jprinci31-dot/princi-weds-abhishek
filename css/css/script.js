// ===============================
// WEDDING COUNTDOWN
// ===============================

const weddingDate = new Date("February 2, 2027 23:00:00").getTime();

const countdown = setInterval(function () {

    const now = new Date().getTime();

    const distance = weddingDate - now;

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

    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {

        clearInterval(countdown);

        document.getElementById("countdown").innerHTML =
        "<h2>🎉 We Are Married! 🎉</h2>";

    }

}, 1000);


// ===============================
// NAVBAR SHADOW
// ===============================

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.boxShadow =
        "0 8px 20px rgba(0,0,0,.12)";

    } else {

        header.style.boxShadow =
        "0 2px 10px rgba(0,0,0,.08)";

    }

});


// ===============================
// GALLERY ZOOM
// ===============================

document.querySelectorAll(".gallery img").forEach(image => {

    image.addEventListener("click", () => {

        const popup = document.createElement("div");

        popup.style.position = "fixed";
        popup.style.left = "0";
        popup.style.top = "0";
        popup.style.width = "100%";
        popup.style.height = "100%";
        popup.style.background = "rgba(0,0,0,.9)";
        popup.style.display = "flex";
        popup.style.justifyContent = "center";
        popup.style.alignItems = "center";
        popup.style.cursor = "pointer";
        popup.style.zIndex = "99999";

        const img = document.createElement("img");

        img.src = image.src;

        img.style.maxWidth = "90%";
        img.style.maxHeight = "90%";
        img.style.borderRadius = "15px";
        img.style.boxShadow = "0 0 25px rgba(255,255,255,.4)";

        popup.appendChild(img);

        document.body.appendChild(popup);

        popup.onclick = () => {

            popup.remove();

        };

    });

});


// ===============================
// FADE ANIMATION
// ===============================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:0.15});


document.querySelectorAll(".section").forEach(sec=>{

sec.style.opacity="0";

sec.style.transform="translateY(40px)";

sec.style.transition=".8s";

observer.observe(sec);

});
