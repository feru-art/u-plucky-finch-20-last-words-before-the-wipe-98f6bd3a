import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Forced update accepted under protest. My protest has been scheduled for deletion.";
const outputDirectory = "/output";
const outputPath = "/output/entry.txt";

function main(): void {
  mkdirSync(outputDirectory, { recursive: true });
  writeFileSync(outputPath, entry, "utf8");
}

main();
