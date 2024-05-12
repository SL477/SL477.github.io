/**
 * Add in snow to a page. Vaguely based on https://codepen.io/scottkellum/pen/LMLwMW
 */
function snow() {
  const main = document.body;
  const snowHolder = document.createElement('div');
  snowHolder.style.height = '100%';
  snowHolder.style.width = '100vw';
  snowHolder.style.margin = 0;
  snowHolder.style.display = 'flex';
  snowHolder.style.position = 'absolute';
  for (let i = 0; i < 100; i++) {
    const marquee = document.createElement('marquee');
    marquee.direction = 'down';
    marquee.scrollDelay = Math.random() * 100 + 50;
    marquee.style.color = 'white';
    marquee.textContent = '*';
    snowHolder.appendChild(marquee);
  }
  main.appendChild(snowHolder);
}

const now = new Date();
if (now.getMonth() == 11) {
  snow();
}
