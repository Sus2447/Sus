const totalStars = 300;
for (let i = 0; i < totalStars; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.top = Math.random() * 100 + 'vh';
  star.style.left = Math.random() * 100 + 'vw';
  star.style.animationDuration = (Math.random() * 3 + 1) + 's';
  star.style.opacity = Math.random();
  document.body.appendChild(star);
}

function random(min, max) {
  return Math.random() * (max - min) + min;
}

document.addEventListener('click', (e) => {
  const directions = [
    { x: -1, y: -1 },
    { x: 1, y: -1 },
    { x: -1, y: 1 },
    { x: 1, y: 1 }
  ];

  const amongUsImages = [
    '/img/among-us.svg',
    '/img/among-us (2).svg',
    '/img/among-us (3).svg',
    '/img/among-us (5).svg'
  ];

  const distance = 60;

  for (let i = 0; i < 4; i++) {
    const dir = directions[i];
    const imgSrc = amongUsImages[i % amongUsImages.length];

    const img = document.createElement('img');
    img.src = imgSrc;
    img.style.position = 'absolute';
    img.style.width = '30px';
    img.style.height = '30px';
    img.style.left = `${e.clientX}px`;
    img.style.top = `${e.clientY}px`;
    img.style.transform = 'translate(-50%, -50%)';
    img.style.pointerEvents = 'none';
    img.style.zIndex = 9999;
    img.style.userSelect = 'none';

    document.body.appendChild(img);

    img.animate([
      { transform: 'translate(-50%, -50%) translate(0, 0)', opacity: 1 },
      { transform: `translate(calc(-50% + ${dir.x * distance}px), calc(-50% + ${dir.y * distance}px))`, opacity: 0 }
    ], {
      duration: 1500,
      easing: 'ease-out',
      fill: 'forwards'
    });

    setTimeout(() => {
      img.remove();
    }, 1500);
  }
});