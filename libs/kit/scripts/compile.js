const path = require("path");
const fs = require("fs");
const readdirGlob = require("readdir-glob");
const hljs = require("highlight.js/lib/core");
const ts = require("highlight.js/lib/languages/typescript");
const xml = require("highlight.js/lib/languages/xml");
const scss = require("highlight.js/lib/languages/scss");

// import path from "path";
// import fs from "fs";
// import readdirGlob from "readdir-glob";
// import hljs from "highlight.js/lib/core";
// import ts from "highlight.js/lib/languages/typescript";
// import xml from "highlight.js/lib/languages/xml";
// import scss from "highlight.js/lib/languages/scss";

hljs.registerLanguage("ts", ts);
hljs.registerLanguage("html", xml);
hljs.registerLanguage("scss", scss);

const srcDir = path.join(__dirname, "/../pages");
const destDir = path.join(__dirname, "/../example/constants");

const glob = (root, pattern) =>
  new Promise((r, j) => {
    const items = [];
    const globber = readdirGlob(root, {
      pattern
    });
    globber.on("match", (m) => items.push(m));
    globber.on("error", (e) => j(e));
    globber.on("end", () => r(items));
  });

const processSource = (content, name) => {
  const tsRegExpr = /\.(ts|js)$/;
  const htmlRegExpr = /\.html$/;
  const language = tsRegExpr.test(name)
    ? "ts"
    : htmlRegExpr.test(name)
      ? "html"
      : "scss";
  return hljs.highlight(content, { language }).value.replaceAll("`", "&#39;");
};

const parseExampleModule = (filePath) => {
  const content = fs.readFileSync(filePath).toString();
  const root = path.dirname(filePath);
  const moduleRegExpr = /@NgModule\([\s\S]*\)[\s\S]*export class (\w+)/i;
  const packagePath = filePath.split("/").slice(-1, 4).join();
  const moduleName = content.match(moduleRegExpr)?.[1];
  const importPath = path.relative(destDir, root).replaceAll("\\", "/");
  let components = [];

  fs.readdirSync(root, {
    withFileTypes: true
  })
    .filter((d) => !d.isFile())
    .forEach((d) => {
      let dirPath = root + "/" + d.name;
      components.push(parseExampleComponent(dirPath));
    });

  return {
    components,
    packagePath,
    moduleName,
    importPath
  };
};

const parseExampleComponent = (root) => {
  const titleRegExpr = /\/\*\*\s*@title\s+(.+?)\s*\*\//i;
  const tsRegExpr = /\.ts/i;
  const selector = path.basename(root);
  const componentRegExpr = new RegExp(
    `@Component[\\s\\S]*selector:\\s*['"]${selector}['"][\\s\\S]*export class (\\w+)`,
    "i"
  );

  let title = "";
  let componentName = "";
  const files = [];
  for (const file of fs.readdirSync(root, {
    withFileTypes: true
  })) {
    const name = file.name;
    const content = fs.readFileSync(root + "/" + file.name).toString();
    if (tsRegExpr.test(name) && name.search(selector) !== -1) {
      title = content.match(titleRegExpr)?.[1];
      componentName = content.match(componentRegExpr)?.[1];
    }
    files.push({ name, content: processSource(content, name) });
  }
  return { files, title, componentName, selector };
};

const compile = async (input) => {
  const paths = await glob(input, "**/examples/*.ts");
  return paths.map((m) => parseExampleModule(m.absolute));
};

const assembly = (input, output) => {
  const examples = [];
  const exampleFiles = [];
  for (const module of input) {
    for (const component of module.components) {
      examples.push(
        `  '${component.selector}' : {
    title: '${component.title}',
    packagePath: '${module.packagePath}',
    moduleName: '${module.moduleName}',
    componentName: '${component.componentName}',
    selector: '${component.selector}',
    files: [${component.files.map((f) => `'${f.name}'`)}],
    loadAsync: () => import('${module.importPath}'),
  }`
      );

      exampleFiles.push(
        component.files
          .map((file) => [module.packagePath, file.name, file.content])
          .map(
            ([packagePath, fileName, fileContent]) =>
              `\t'${packagePath}/${component.selector}/${fileName}': \`${fileContent}\``
          )
      );
    }
  }

  const header =
    "/** Don't edit this file! It has been generated automatically. */";

  fs.writeFileSync(
    output + "/examples.ts",
    `${header}\n\nexport const EXAMPLES = {\n${examples.join(",\n")}\n};`
  );

  console.log(
    "\x1b[32m✔ \x1b[37m %s \x1b[0m",
    path.normalize(output + "/examples.ts")
  );

  fs.writeFileSync(
    output + "/example-files.ts",
    `${header}\n\nexport const EXAMPLE_FILES = {\n${exampleFiles.join(
      ",\n"
    )}\n};`
  );

  console.log(
    "\x1b[32m✔ \x1b[37m %s \x1b[0m",
    path.normalize(output + "/example-files.ts")
  );

  fs.writeFileSync(
    output + "/index.ts",
    `${header}\n\nexport * from './examples';\nexport * from './example-files';\n`
  );

  console.log(
    "\x1b[32m✔ \x1b[37m %s \x1b[0m",
    path.normalize(output + "/index.ts")
  );
};

const build = async (src, dest) => {
  fs.rmSync(dest, { recursive: true });
  fs.mkdirSync(dest);
  console.log("Compiling packs...");
  const packs = await compile(src, dest);
  console.log("packs", packs);
  console.log("Assembling...");
  assembly(packs, dest);
};

build(srcDir, destDir);
