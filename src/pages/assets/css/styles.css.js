import fs from 'node:fs';
import category from '../../../content/categories.json';

const categoryStyles = category.map(cat => `.p-category[data-tag='${cat.tag}'] {
    background-color: ${cat.background};
    color: ${cat.colour};
}`)

let cssString = fs.readFileSync('./src/content/styles.css', 'utf8');
cssString = `${cssString}\n${categoryStyles.join('\n')}`;

export function GET() {
  return new Response(cssString, {
    headers: {
      'Content-Type': 'text/css'
    }
  });
}
