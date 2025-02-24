const path = require("path");
const fs = require("fs");
const indexDir = path.join(__dirname, "/../../dist/index.html");
const pageDir = path.join(__dirname, "/../../dist/404.html");
fs.copyFileSync(indexDir, pageDir);
