import heml from "heml";
import fs from "fs";
import writeFile from "./src/writeFile";
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
  brandingColor: "#8BD2E0",
  backgroundsColor: "#3976BD",
  secondaryBackgroundColor: "#BABABA",
  fontsColor: "#FDFDFD",
  fontSize: "16px",
  h1FontSize: "30px"
};

const promoStyle = {
  brandingColor: "#99CC00",
  backgroundsColor: "blue",
  secondaryBackgroundColor: "olive",
  fontsColor: "#FFFFFF",
  fontSize: "10px",
  h1FontSize: "20px"
};

//Html template file name
const name = process.argv[2] || "email";

if (!name) throw new Error("No template name defined");

//Get template content
const template = fs
  .readFileSync(__dirname + "/templates/" + name + ".heml")
  .toString();

const mailTemplate = heml(template, options).then(
  ({ html, metadata, errors }) => {
    //Apply custom styles
    Object.keys(style).map((key, index) => {
      var value = style[key];
      console.log(`${key}: ${value}`);
      html = html.replace(new RegExp(key, "g"), value);
    });

    //Write output mail template
    writeFile(html, name);
  }
);
