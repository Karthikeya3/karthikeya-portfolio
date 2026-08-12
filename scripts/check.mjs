// Sanity checks for the portfolio: required files exist and key content
// strings are present. Run with: node scripts/check.mjs
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = join(import.meta.dirname, "..");
const requiredFiles = ["package.json", "app/layout.js", "app/page.js", "app/globals.css", "public/resume.pdf"];
const requiredStrings = ["Karthikeya Gadadhasu", "0→1 products", "130M+", "HILO DESIGN", "ORAMAS", "CHIRTALAYAM", "SMILE GUARD"];

let fail = 0;
for (const f of requiredFiles) {
  if (!existsSync(join(root, f))) {
    console.error(`✗ missing ${f}`);
    fail++;
  }
}

const page = readFileSync(join(root, "app/page.js"), "utf8");
for (const s of requiredStrings) {
  if (!page.includes(s)) {
    console.error(`✗ page.js missing content: "${s}"`);
    fail++;
  }
}

if (fail) {
  console.error(`${fail} check(s) failed`);
  process.exit(1);
}
console.log("✅ all portfolio checks passed");
