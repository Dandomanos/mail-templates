import heml from "heml";
import del from "del";
import mkdirp from "mkdirp";
import fs from "fs";
import cheerio from "cheerio";
const options = {
  validate: "soft", // validation levels - 'strict'|'soft'|'none'
  cheerio: {}, // config passed to cheerio parser
  juice: {},
  beautify: {}, // config passed to js-beautify html method
  elements: [
    // any custom elements you want to use
  ]
};

const style = {
  brandingColor: "#99CC00",
  backgroundColor: "blue",
  secondaryBackgroundColor: "olive"
};

//Html template file name
const name = process.argv[2] || "email";

if (!name) throw new Error("No template name defined");

//Get template content
const template = fs
  .readFileSync(__dirname + "/templates/" + name + ".heml")
  .toString();

//Output folder
const output = __dirname + "/output/";
del.sync(output);
mkdirp.sync(output);

const mailTemplate = heml(template, options).then(
  ({ html, metadata, errors }) => {
    // console.log("HTML", html);
    // const styledHtml = html.split("$brandingColor").join("blue");
    Object.keys(style).map((key, index) => {
      var value = style[key];
      console.log(`${key}: ${value}`);
      html = html.replace(new RegExp(key, "g"), value);
    });
    const styledHtml = html.replace(new RegExp("brandingColor", "g"), "blue");
    //Init $ instance
    let $ = cheerio.load(styledHtml);
    let $c = $("html").clone();
    mkdirp.sync(output);
    let file = output + `${name}.html`;

    //Write html file
    fs.writeFileSync(file, $c.html());
    console.log("Writed " + file);
  }
);
