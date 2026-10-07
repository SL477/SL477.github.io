/**
 * Add in snow to a page. Vaguely based on https://pajasevi.github.io/CSSnowflakes/
 */
function snow() {
  const main = document.body;
  const snowHolder = document.createElement('div');
  snowHolder.ariaHidden = true;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 12; i++) {
    const flake = document.createElement('div');
    flake.className = 'snowflake';
    const inner = document.createElement('div');
    inner.className = 'snowflake-inner';
    inner.textContent = '❅';
    flake.appendChild(inner);
    fragment.appendChild(flake);
  }
  snowHolder.appendChild(fragment);
  main.appendChild(snowHolder);
}

if (new Date().getMonth() === 11) {
  snow();
}