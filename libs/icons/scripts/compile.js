const path = require("path");
const fs = require("fs");

const srcDir = __dirname + "/../icons";
const destDir = __dirname + "/../constants";
const iconPrefix = "kruiIcon";

// --
const toCamelCase = (str) =>
  str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase());

const upprerCaseFirst = (str) =>
  str ? str[0].toUpperCase() + str.substr(1) : str;

const basename = (str) =>
  str
    .replace(/\.(.)*$/, "")
    .split(/\s+/)
    .shift();

const readdirRecursive = (root) =>
  fs
    .readdirSync(path.normalize(root), {
      withFileTypes: true,
    })
    .reduce((acc, curr) => {
      if (curr.isFile() && curr.name.match(/\.svg$/)) {
        (acc["_"] = acc["_"] || []).push({
          path: root + "/" + curr.name,
          name: curr.name,
        });
      } else if (curr.isDirectory()) {
        acc[curr.name] = readdirRecursive(root + "/" + curr.name);
      }
      return acc;
    }, {});

const formatSvg = (svg, replaceColor = false) => {
  if (replaceColor) {
    svg = svg.replace(/stroke="#[0-9A-F]+"/gi, 'stroke="currentColor"');
    svg = svg.replace(/fill="#[0-9A-F]+"/gi, 'fill="currentColor"');
  }
  svg = svg.replace(/[\n\r]/g, "");
  svg = svg.replace(/["]/g, '\\"');
  return svg;
};

const compilePack = (input, output) => {
  const { files, group } = input;
  const packName = ["icons", group].filter((e) => e).join("-");

  const statements = [];
  for (let file of files) {
    const constName =
      iconPrefix + upprerCaseFirst(toCamelCase(basename(file.name)));
    const content = fs.readFileSync(file.path).toString();
    statements.push(
      `export const ${constName} = "${formatSvg(content, group !== "flag")}";`
    );
  }
  fs.writeFileSync(
    output + "/" + packName + ".ts",
    statements.join("\n") + "\n"
  );

  return packName;
};

const compile = (input, output) => {
  const bundles = [];

  const dir = readdirRecursive(input);

  for (let group in dir) {
    const files = dir[group]["_"];
    if (files && files.length) {
      const pack = compilePack({ files, group }, output);
      console.log(
        "\x1b[32m✔ \x1b[37m %s.ts (\x1b[36m%d\x1b[0m icons)",
        path.normalize(output + "/" + pack),
        files.length
      );
      bundles.push(pack);
    }
  }

  return bundles;
};

const assembly = (input, output) => {
  fs.writeFileSync(
    output,
    input.map((pack) => `export * from "./${pack}";`).join("\n") + "\n"
  );
  console.log("\x1b[32m✔ \x1b[37m %s \x1b[0m", path.normalize(output));
};

const build = (src, dest) => {
  fs.rmdirSync(dest, { recursive: true });
  fs.mkdirSync(dest);
  console.log("Compiling packs...");
  const packs = compile(src, dest);
  console.log("Assembling...");
  assembly(packs, dest + "/index.ts");
};

build(srcDir, destDir);
