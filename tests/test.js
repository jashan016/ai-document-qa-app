const fs = require("fs");

const data = JSON.parse(fs.readFileSync("data/final/documents.json"));

if (data.length > 0) {
  console.log("Test Passed ✅");
} else {
  console.log("Test Failed ❌");
}
