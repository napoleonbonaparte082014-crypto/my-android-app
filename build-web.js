const fs = require("fs");
const path = require("path");

const source = path.join(__dirname, "index.html");
const destination = path.join(__dirname, "www");

fs.mkdirSync(destination, { recursive: true });

fs.copyFileSync(
  source,
  path.join(destination, "index.html")
);

console.log("Web application copied successfully");
