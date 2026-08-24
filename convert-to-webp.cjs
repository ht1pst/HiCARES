const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const folder = path.join(__dirname, "src", "assets");

const files = fs.readdirSync(folder);

async function convert() {
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();

    if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;

    const input = path.join(folder, file);
    const output = path.join(
      folder,
      path.basename(file, ext) + ".webp"
    );

    try {
      await sharp(input)
        .webp({ quality: 80 })
        .toFile(output);

      console.log(`Converted: ${file} → ${path.basename(output)}`);
    } catch (error) {
      console.error(`Failed: ${file}`, error.message);
    }
  }

  console.log("\nDone! 🎉");
}

convert();