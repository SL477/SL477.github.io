function resizeMap() {
  const img = document.querySelector('.u-photo');
  const htmlMap = document.querySelector('map');
  // console.log('resize', img.naturalWidth);
  if (!img || !htmlMap || !img.naturalWidth) {
    return;
  }

  const scale = img.clientWidth / img.naturalWidth;

  htmlMap.querySelectorAll('area').forEach(area => {
    if (!area.dataset.originalCoords) {
      area.dataset.originalCoords = area.getAttribute('coords');
    }

    const scaledCoords = area.dataset.originalCoords.split(',').map(c => Math.round(Number.parseInt(c) * scale)).join(',');
    area.setAttribute('coords', scaledCoords);
  });
}
window.addEventListener('load', resizeMap);
window.addEventListener('resize', resizeMap);