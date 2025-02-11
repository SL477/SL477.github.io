// From https://css-tricks.com/using-webp-images/

import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

const outputFolder = './images/webp';
const produceWebP = async () => {
  await imagemin(['images/*.png'], {
    destination: outputFolder,
    plugins: [
      imageminWebp({
        lossless: true,
      }),
    ],
  });
  console.log('PNGs processed');
  await imagemin(['images/*.{jpg,jpeg}'], {
    destination: outputFolder,
    plugins: [
      imageminWebp({
        quality: 65,
      }),
    ],
  });
  console.log('JPGs and JPEGs processed');
};
produceWebP();
