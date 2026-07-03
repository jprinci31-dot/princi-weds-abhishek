// Smooth scroll for buttons

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior:"smooth"
        });
    });
});

// Countdown

const weddingDate = new Date("February 2, 2027 19:00:00").getTime();

const timer = document.getElementById("timer");

if(timer){

setInterval(function(){

const now = new Date().getTime();

const distance = weddingDate - now;

const days = Math.floor(distance / (1000*60*60*24));
const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
const minutes = Math.floor((distance % (1000*60*60))/60000);
const seconds = Math.floor((distance % 60000)/1000);

timer.innerHTML =
`${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

if(distance < 0){
timer.innerHTML="🎉 Wedding Day 🎉";
}

},1000);

}
