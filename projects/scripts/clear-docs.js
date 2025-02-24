const path = require("path");
const fs = require("fs");

fs.rmSync(path.join(__dirname, "/../../dist/kr-app"), { recursive: true });
