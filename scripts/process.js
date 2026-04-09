const fs = require("fs");
const path = require("path");

const rawDir = path.join(__dirname, "../data/raw");
const finalDir = path.join(__dirname, "../data/final");

if (!fs.existsSync(finalDir)) fs.mkdirSync(finalDir, { recursive: true });

const files = fs.readdirSync(rawDir);

let data = [];

files.forEach(file => {
  const content = fs.readFileSync(path.join(rawDir, file), "utf-8");

  data.push({
    id: file,
    text: content.trim()
  });
});

fs.writeFileSync(
  path.join(finalDir, "documents.json"),
  JSON.stringify(data, null, 2)
);

console.log("ETL DONE");
