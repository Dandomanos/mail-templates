import cheerio from "cheerio";
import del from "del";
import mkdirp from "mkdirp";
import fs from "fs";

//Output folder
const output = __dirname + "/output/";
del.sync(output);
mkdirp.sync(output);

const writeFile = (html, name = "test") => {
  //Init $ instance
  let $ = cheerio.load(html);
  let $c = $("html").clone();
  mkdirp.sync(output);
  let file = output + `${name}.html`;

  //Write html file
  fs.writeFileSync(file, $c.html());
  console.log("Writed " + file);
};

export default writeFile;
