const { minify } = require('html-minifier-terser');
const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, '../dist');

const options = {
  collapseWhitespace: true,
  removeComments: true,
  minifyCSS: true,
  minifyJS: true,
};

function minifyHTML(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);

    if (fs.statSync(filePath).isDirectory()) {
      minifyHTML(filePath);
    } else if (file.endsWith('.html')) {
      const html = fs.readFileSync(filePath, 'utf8');
      const minified = minify(html, options);
      fs.writeFileSync(filePath, minified, 'utf8');
      console.log(`Minified: ${filePath}`);
    }
  });
}

minifyHTML(DIST_DIR);
