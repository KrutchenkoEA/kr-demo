const path = require("path");
const fs = require("fs");
const indexDir = path.join(__dirname, "/../../docs/index.html");
const pageDir = path.join(__dirname, "/../../docs/404.html");
fs.copyFileSync(indexDir, pageDir);
