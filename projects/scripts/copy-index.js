const path = require("path");
const fs = require("fs");
const indexDir = path.join(__dirname, "/../../dist/kr-app/index.html");
const pageDir = path.join(__dirname, "/../../dist/kr-app/404.html");
fs.copyFileSync(indexDir, pageDir);
