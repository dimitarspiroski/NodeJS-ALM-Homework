const fs = require("fs");

const writeToFile = (file, txt) => {
  fs.writeFileSync(`./data/${file}.txt`, txt);
  console.log(`${txt} has been written in the file.`);
};

const appendToFile = (file, txt) => {
  fs.appendFileSync(`./data/${file}.txt`, txt);
  console.log(`${txt} has been appended in the file.`);
};

const readTheFile = file => {
  const data = fs.readFileSync(`./${file}.txt`).toString("utf-8");
  console.log(data);
};

const removeFile = file => {
  fs.rmSync(`./data/${file}.txt`);
  console.log(`${file}.txt has been deleted.`);
};

module.exports = {
  writeToFile,
  appendToFile,
  readTheFile,
  removeFile,
};
