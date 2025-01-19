/**
 * Add in snow to a page. Vaguely based on https://pajasevi.github.io/CSSnowflakes/
 */
function snow() {
  const main = document.body;
  const snowHolder = document.createElement('div');
  snowHolder.ariaHidden = true;
  for (let i = 0; i < 12; i++) {
    const flake = document.createElement('div');
    flake.style.color = 'white';
    flake.className = 'snowflake';
    const inner = document.createElement('div');
    inner.className = 'snowflake-inner';
    inner.textContent = '❅';
    flake.appendChild(inner);
    snowHolder.appendChild(flake);
  }
  main.appendChild(snowHolder);
}

const now = new Date();
if (now.getMonth() == 11) {
  snow();
}
