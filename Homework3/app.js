const fs = require("fs");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getQuestions = () => {
  const data = JSON.parse(fs.readFileSync("./quiz.json"));
  return data.questions;
};

const questions = getQuestions();

let i = 0;
let points = 0;

const testing = () => {
  console.log(questions[i].meta);
  questions[i].all.forEach((answer, index) => {
    console.log(`${index + 1}. ${answer}`);
  });
  rl.question("Select answer (respective number): ", answer => {
    if (questions[i].all[answer - 1] === questions[i].correct) points++;
    console.log(`Points: ${points}`);
    if (i === questions.length - 1) {
      return rl.close();
    } else {
      i++;
      testing();
    }
  });
};

testing();
