import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const folder = path.join(__dirname, "src", "assets");

fs.readdirSync(folder).forEach((file) => {
  if (/\.(jpg|jpeg)$/i.test(file)) {
    const input = path.join(folder, file);
    const output = path.join(
      folder,
      file.replace(/\.(jpg|jpeg)$/i, ".webp")
    );

    sharp(input)
      .webp({ quality: 80 })
      .toFile(output)
      .then(() => console.log(`Converted: ${file}`))
      .catch((err) => console.error(`Error converting ${file}:`, err));
  }
});