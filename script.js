
    function showWish() {
      document.getElementById("wishMessage").style.display = "block";
    }

    // Floating hearts animation
    for (let i = 0; i < 30; i++) {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.style.left = ${Math.random() * 100}%;
      heart.style.bottom = "-50px";
      heart.style.setProperty('--i', Math.random());
      heart.style.animationDuration = ${5 + Math.random() * 5}s;
      heart.style.opacity = Math.random();
      document.body.appendChild(heart);
    }
  
