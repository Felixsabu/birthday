function throwConfetti() {
  const confettiBox = document.querySelector('.confetti');
  confettiBox.innerHTML = '';
  for(let i=0; i<70; i++) {
      let conf = document.createElement('div');
      conf.className = 'piece';
      conf.style.position = 'absolute';
      conf.style.left = Math.random() * window.innerWidth + 'px';
      conf.style.top = Math.random() * window.innerHeight/2 + 'px';
      conf.style.width = conf.style.height = Math.random()*12+6 + 'px';
      conf.style.background = ['#fd5c63','#ffd662','#88D9E6','#d03e71','#b565d9','#fcb69f'][Math.floor(Math.random()*6)];
      conf.style.borderRadius = '50%';
      conf.style.opacity = Math.random() * 0.5 + 0.5;
      confettiBox.appendChild(conf);
      // Animate
      setTimeout(() => {
          conf.style.transition = 'all 1.8s cubic-bezier(0,1.07,.67,1)';
          conf.style.top = (window.innerHeight-40) + 'px';
          conf.style.transform = 'rotate(' + (Math.random()*360) + 'deg)';
          conf.style.opacity = 0.15;
      }, 80);
      // Remove after animation
      setTimeout(() => {
          if(conf.parentNode) conf.parentNode.removeChild(conf);
      }, 2200);
  }
}
// Add random balloons to balloons-container
function createBalloons() {
  const container = document.getElementById('balloons-container');
  const colors = [
    'rgba(253, 92, 99, 0.8)',
    'rgba(255, 214, 165, 0.8)',
    'rgba(136, 217, 230, 0.8)'
  ];
  for(let i=0; i<10; i++) {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = (Math.random() * 100) + 'vw';
    balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    balloon.style.animationDuration = (5 + Math.random() * 7) + 's';
    balloon.style.animationDelay = (i * 700) + 'ms';
    container.appendChild(balloon);
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

createBalloons();
createStars();

