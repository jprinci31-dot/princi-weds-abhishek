
/* 💎 DIAMOND WEDDING EXPERIENCE ENGINE */

document.addEventListener("DOMContentLoaded", () => {
  console.log("💎 Diamond Wedding Website Loaded");
});

/* 🚀 START EXPERIENCE */
function startExperience() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("main").style.display = "block";

  startMusic();
  startCountdown();
  startPetals();
  startSparkles();
  fireworkBurst();
  revealOnScroll();
}

/* 🎵 MUSIC CONTROL (safe autoplay) */
function startMusic() {
  const music = document.getElementById("music");
  if (!music) return;

  music.volume = 0.6;

  const playPromise = music.play();

  if (playPromise !== undefined) {
    playPromise.catch(() => {
      console.log("🔇 User gesture required for autoplay");
    });
  }
}

/* ⏳ COUNTDOWN */
function startCountdown() {
  const targetDate = new Date("Feb 2, 2027 00:00:00").getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    const el = document.getElementById("timer");

    if (el) {
      el.innerHTML = `
        ${days} Days : ${hours} Hours : ${minutes} Min 💎
      `;
    }
  }, 1000);
}

/* 🌸 FALLING PETALS */
function startPetals() {
  setInterval(() => {
    const petal = document.createElement("div");
    petal.className = "petal";
    petal.innerHTML = "🌸";

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = (3 + Math.random() * 5) + "s";
    petal.style.fontSize = (14 + Math.random() * 10) + "px";

    document.body.appendChild(petal);

    setTimeout(() => petal.remove(), 9000);
  }, 200);
}

/* ✨ SPARKLE EFFECT */
function startSparkles() {
  setInterval(() => {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.innerHTML = "✨";

    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";
    sparkle.style.fontSize = (10 + Math.random() * 12) + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 2000);
  }, 250);
}

/* 🎇 FIREWORK BURST */
function fireworkBurst() {
  for (let i = 0; i < 25; i++) {
    const firework = document.createElement("div");
    firework.className = "firework";

    firework.style.left = Math.random() * 100 + "vw";
    firework.style.top = Math.random() * 100 + "vh";
    firework.style.background = randomGold();

    document.body.appendChild(firework);

    setTimeout(() => firework.remove(), 1000);
  }
}

/* 🎨 GOLD COLOR VARIATION */
function randomGold() {
  const shades = ["#ffd700", "#f7e7a1", "#d4af37", "#fff3c4"];
  return shades[Math.floor(Math.random() * shades.length)];
}

/* 💌 RSVP (WhatsApp style optional hook) */
function sendRSVP(name, guests, message) {
  const phone = "911234567890"; // change this

  const text = `Name: ${name}%0AGuests: ${guests}%0AMessage: ${message}`;

  const url = `https://wa.me/${phone}?text=${text}`;
  window.open(url, "_blank");
}

/* 🌊 SCROLL REVEAL ANIMATION */
function revealOnScroll() {
  const elements = document.querySelectorAll(".card, section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, {
    threshold: 0.1
  });

  elements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "0.8s ease";
    observer.observe(el);
  });
}

/* 🖱️ CLICK FIREWORK (extra luxury touch) */
document.addEventListener("click", (e) => {
  const spark = document.createElement("div");

  spark.className = "firework";
  spark.style.left = e.clientX + "px";
  spark.style.top = e.clientY + "px";

  document.body.appendChild(spark);

  setTimeout(() => spark.remove(), 800);
});
