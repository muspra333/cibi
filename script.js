
let musicPlaying = false;
const bgMusic = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');

function showWish() {
  document.getElementById("wishMessage").style.display = "block";
  createSparkles();
}

function toggleMusic() {
  if (musicPlaying) {
    bgMusic.pause();
    musicBtn.textContent = "🎵 Play Music";
    musicBtn.classList.remove('playing');
    musicPlaying = false;
  } else {
    bgMusic.play().then(() => {
      musicBtn.textContent = "🔇 Stop Music";
      musicBtn.classList.add('playing');
      musicPlaying = true;
    }).catch(e => {
      console.log("Music play failed:", e);
      alert("Please interact with the page first to enable audio!");
    });
  }
}

// Create floating hearts
function createHearts() {
  for (let i = 0; i < 25; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.style.left = Math.random() * 100 + "%";
      heart.style.setProperty('--i', Math.random());
      heart.style.animationDuration = (4 + Math.random() * 4) + "s";
      heart.style.animationDelay = Math.random() * 2 + "s";
      document.body.appendChild(heart);
      
      // Remove heart after animation
      setTimeout(() => {
        if (heart.parentNode) {
          heart.parentNode.removeChild(heart);
        }
      }, 8000);
    }, i * 200);
  }
}

// Create sparkle effect
function createSparkles() {
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";
      sparkle.style.left = Math.random() * 100 + "%";
      sparkle.style.top = Math.random() * 100 + "%";
      sparkle.style.animationDelay = Math.random() * 1 + "s";
      document.body.appendChild(sparkle);
      
      // Remove sparkle after animation
      setTimeout(() => {
        if (sparkle.parentNode) {
          sparkle.parentNode.removeChild(sparkle);
        }
      }, 3000);
    }, i * 100);
  }
}

// Auto-create hearts periodically
setInterval(createHearts, 8000);

// Initial hearts
createHearts();

// Handle audio autoplay restrictions
document.addEventListener('click', function() {
  if (bgMusic.paused && musicPlaying) {
    bgMusic.play().catch(e => console.log("Autoplay blocked:", e));
  }
}, { once: true });

// Add some initial sparkles
setTimeout(createSparkles, 1000);
