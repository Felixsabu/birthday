function throwConfetti(event) {
  const confettiBox = document.querySelector('.confetti');
  const button = event.target;

  // Get button center position
  const rect = button.getBoundingClientRect();
  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height / 2;

  for (let i = 0; i < 80; i++) {
    let conf = document.createElement('div');
    conf.className = 'piece';
    conf.style.position = 'absolute';
    conf.style.left = originX + 'px';
    conf.style.top = originY + 'px';

    // Random size
    const size = Math.random() * 10 + 5;
    conf.style.width = conf.style.height = size + 'px';

    // Random color
    conf.style.background = ['#fd5c63', '#ffd662', '#88D9E6', '#d03e71', '#b565d9', '#fcb69f'][Math.floor(Math.random() * 6)];
    conf.style.borderRadius = '50%';
    conf.style.opacity = 1;

    document.body.appendChild(conf);

    // Random angle and speed for burst
    const angle = Math.random() * Math.PI * 2; // 0 to 360 degrees
    const speed = Math.random() * 6 + 4; // burst speed

    // End position
    const xMove = Math.cos(angle) * speed * 50;
    const yMove = Math.sin(angle) * speed * 50;

    setTimeout(() => {
      conf.style.transition = `transform 1s ease-out, opacity 1s ease-out`;
      conf.style.transform = `translate(${xMove}px, ${yMove + 100}px) rotate(${Math.random() * 720}deg)`;
      conf.style.opacity = 0;
    }, 20);

    // Remove after animation
    setTimeout(() => {
      if (conf.parentNode) conf.parentNode.removeChild(conf);
    }, 1200);
  }
}


// Add random balloons to balloons-container
function createHearts() {
  const container = document.getElementById('balloons-container');
  const colors = ['#f6002dff', '#fe002fff', '#f30d37ff']; // shades of pink/red
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = (Math.random() * 100) + 'vw';
    heart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    heart.style.animationDuration = (6 + Math.random() * 6) + 's';
    heart.style.animationDelay = (i * 300) + 'ms';
    container.appendChild(heart);
  }
}



// Add random stars for sparkling
function createStars() {
  const container = document.getElementById('stars-container');
  for(let i=0; i<30; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = (Math.random() * 100) + 'vh';
    star.style.left = (Math.random() * 100) + 'vw';
    const size = 1 + Math.random() * 3;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.animationDuration = (2 + Math.random() * 3) + 's';
    star.style.animationDelay = (i * 150) + 'ms';
    container.appendChild(star);
  }
}

createHearts();
// createStars();

