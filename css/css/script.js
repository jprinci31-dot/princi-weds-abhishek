// Wedding Countdown

const weddingDate = new Date("February 2, 2027 23:00:00").getTime();

const timer = setInterval(function () {

const now = new Date().getTime();

const distance = weddingDate - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("countdown").innerHTML =
`
<h2>⏳ Countdown</h2>
<h3>${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds</h3>
`;

if (distance < 0) {
clearInterval(timer);
document.getElementById("countdown").innerHTML =
"<h2>❤️ Wedding Day Has Arrived ❤️</h2>";
}

},1000);

// Music

function playMusic(){
document.getElementById("music").play();
}
