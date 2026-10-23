const confettiCanvas = document.getElementById("confetti-canvas");
const ctx = confettiCanvas.getContext("2d");
let confetti = [];
let animationFrame = null;

function resizeCanvas() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  confettiCanvas.width = window.innerWidth * dpr;
  confettiCanvas.height = window.innerHeight * dpr;
  confettiCanvas.style.width = window.innerWidth + "px";
  confettiCanvas.style.height = window.innerHeight + "px";
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function burstConfetti(amount = 150) {
  const colors = ["#ff91c8", "#c6a4ff", "#ffd8a8", "#fff4ee", "#a7e8dc", "#f5b6ff"];
  for (let i = 0; i < amount; i++) {
    confetti.push({
      x: window.innerWidth * (0.15 + Math.random() * 0.7),
      y: -20 - Math.random() * window.innerHeight * 0.25,
      vx: (Math.random() - 0.5) * 5,
      vy: 2 + Math.random() * 4,
      size: 3 + Math.random() * 5,
      rotation: Math.random() * Math.PI,
      spin: (Math.random() - 0.5) * 0.18,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 0
    });
  }
  if (!animationFrame) animateConfetti();
}
function animateConfetti() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  confetti = confetti.filter(p => p.y < window.innerHeight + 30 && p.life < 260);
  confetti.forEach(p => {
    p.x += p.vx; p.y += p.vy; p.vy += 0.018; p.rotation += p.spin; p.life++;
    ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rotation);
    ctx.fillStyle = p.color; ctx.globalAlpha = Math.max(0, 1 - p.life / 280);
    ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.7);
    ctx.restore();
  });
  if (confetti.length) animationFrame = requestAnimationFrame(animateConfetti);
  else { cancelAnimationFrame(animationFrame); animationFrame = null; ctx.clearRect(0, 0, window.innerWidth, window.innerHeight); }
}

const surpriseBtn = document.getElementById("surprise-btn");
surpriseBtn.addEventListener("click", () => {
  document.getElementById("letter").scrollIntoView({ behavior: "smooth" });
  burstConfetti(170);
  showToast("A little birthday magic for Kenuu 🌹💝");
});

document.querySelectorAll(".memory-card").forEach(card => {
  const img = card.querySelector("img");
  img.addEventListener("load", () => {
    if (img.naturalWidth > 0) card.querySelector(".memory-image").classList.add("has-image");
  });
  img.addEventListener("error", () => card.querySelector(".memory-image").classList.remove("has-image"));
  if (img.complete && img.naturalWidth > 0) card.querySelector(".memory-image").classList.add("has-image");
  card.addEventListener("click", () => {
    if (!img.complete || !img.naturalWidth) {
      showToast("Add your favourite photo in the static/images folder 💗");
      return;
    }
    const modal = document.getElementById("photo-modal");
    document.getElementById("modal-image").src = img.src;
    document.getElementById("modal-image").alt = card.dataset.caption;
    document.getElementById("modal-caption").textContent = card.dataset.caption;
    modal.classList.add("open");
    document.getElementById("modal-close").focus();
  });
});
function closeModal() {
  document.getElementById("photo-modal").classList.remove("open");
}
document.getElementById("modal-close").addEventListener("click", closeModal);
document.getElementById("photo-modal").addEventListener("click", e => {
  if (e.target.id === "photo-modal") closeModal();
});
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

document.getElementById("wish-btn").addEventListener("click", () => {
  const response = document.getElementById("wish-response");
  response.classList.add("show");
  burstConfetti(220);
  showToast("Wish sent with extra sparkle ✨");
});

let toastTimeout;
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 3200);
}


// Gift-box reveal: a little interactive birthday surprise.
const giftBoxButton = document.getElementById("gift-box-button");
const giftReveal = document.getElementById("gift-reveal");
function openGift() {
  giftBoxButton.classList.add("opened");
  giftBoxButton.setAttribute("aria-label", "Birthday gift opened");
  giftReveal.classList.add("show");
  burstConfetti(190);
  showToast("A special little gift for Kenuu 💝");
  window.setTimeout(() => giftReveal.scrollIntoView({ behavior: "smooth", block: "center" }), 250);
}
giftBoxButton.addEventListener("click", openGift);
document.getElementById("jump-gift-btn").addEventListener("click", () => {
  document.getElementById("gift").scrollIntoView({ behavior: "smooth" });
  showToast("There's a little surprise waiting 🎁");
});
document.getElementById("gift-close-message").addEventListener("click", () => {
  showToast("Saved in your heart, Kenuu ♡");
  document.getElementById("gift").scrollIntoView({ behavior: "smooth", block: "start" });
});
