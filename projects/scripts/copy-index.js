const path = require("path");
const fs = require("fs");
const indexDir = path.join(__dirname, "/../../docs/browser/index.html");
const pageDir = path.join(__dirname, "/../../docs/browser/404.html");
fs.copyFileSync(indexDir, pageDir);
