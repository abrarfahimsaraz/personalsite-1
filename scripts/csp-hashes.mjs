// Recompute the SHA-256 hashes that pin the inline <script> blocks in the
// Content-Security-Policy (see vercel.json → script-src).
//
// Run AFTER `npm run build` whenever the inline scripts in index.html change
// (the bootstrap theme/font script, or the JSON-LD block):
//
//   node scripts/csp-hashes.mjs
//
// Then paste the printed 'sha256-...' values into the script-src directive.
//
// IMPORTANT: browsers normalize CRLF -> LF before hashing inline scripts, so
// the hash is ALWAYS computed over LF-normalized content, regardless of the
// file's on-disk line endings. Computing over raw CRLF bytes yields a hash the
// browser never matches, silently blocking the script. (.gitattributes also
// pins index.html to LF so builds stay deterministic.)
import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { join } from "node:path";

const distIndex = join(process.cwd(), "dist", "index.html");
const html = await readFile(distIndex, "utf8");

const re = /<script(?![^>]*\bsrc=)([^>]*)>([\s\S]*?)<\/script>/g;
let m;
const out = [];
while ((m = re.exec(html))) {
  const type = (m[1].match(/type="([^"]*)"/) || [])[1] || "(javascript)";
  const lf = m[2].replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  const hash = "sha256-" + createHash("sha256").update(lf, "utf8").digest("base64");
  out.push({ type, hash });
}

if (!out.length) {
  console.error("No inline <script> blocks found in dist/index.html. Run `npm run build` first.");
  process.exit(1);
}

console.log("Inline-script CSP hashes (LF-normalized) for vercel.json script-src:\n");
for (const { type, hash } of out) console.log(`  ${type.padEnd(22)} '${hash}'`);
console.log("\nscript-src fragment:");
console.log("  " + out.map((o) => `'${o.hash}'`).join(" "));
