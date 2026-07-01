function playMusic() {
  document.getElementById("music").play();
}

const weddingDate = new Date("February 2, 2027 19:00:00").getTime();

setInterval(function () {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("countdown").innerHTML =
    days + " Days " + hours + " Hours " + minutes + " Minutes";
}, 1000);
