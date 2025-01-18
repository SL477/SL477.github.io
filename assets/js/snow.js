/**
 * Add in snow to a page. Vaguely based on https://codepen.io/scottkellum/pen/LMLwMW
 */
function snow() {
  const main = document.body;
  const snowHolder = document.createElement('div');
  // snowHolder.style.height = '100%';
  // snowHolder.style.width = '100vw';
  // snowHolder.style.margin = 0;
  // snowHolder.style.display = 'flex';
  // snowHolder.style.position = 'absolute';
  snowHolder.ariaHidden = true;
  for (let i = 0; i < 100; i++) {
    const flake = document.createElement('div');
    flake.style.color = 'white';
    flake.textContent = '❅';
    flake.className = 'snowflake snowflakeInner';
    snowHolder.appendChild(flake);
  }
  main.appendChild(snowHolder);
}

const now = new Date();
//if (now.getMonth() == 11) {
snow();
//}
