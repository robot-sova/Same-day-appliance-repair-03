const fs = require("fs");
const path = require("path");

const DIST_DIR = path.join(__dirname, "../dist");

function addHeadersToFiles(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      addHeadersToFiles(filePath); // Recursively handle subdirectories
    } else if (file.endsWith(".html") || file.endsWith(".js") || file.endsWith(".css")) {
      const headers = "Cache-Control: max-age=31536000, immutable\n";
      fs.appendFileSync(filePath, `<!-- ${headers} -->`);
      console.log(`Added headers to: ${filePath}`);
    }
  });
}

addHeadersToFiles(DIST_DIR);
