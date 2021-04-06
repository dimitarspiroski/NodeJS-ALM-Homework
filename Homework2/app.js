const textService = require("./text-service");
const math = require("./math");

const readline = require("readline");
const { write } = require("fs/promises");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const textHandler = num => {
  if (+num > 4 || !isFinite(num) || +num < 1) {
    rl.close();
    return console.log("Invalid Selection");
  }
  rl.question("Enter file name: ", file => {
    if (num === "2") {
      textService.readTheFile(file);
      rl.close();
    } else if (num === "4") {
      textService.removeFile(file);
      rl.close();
      return;
    }
    rl.question("Enter text: ", txt => {
      if (num === "1") {
        textService.writeToFile(file, txt);
        rl.close();
      } else if (num === "3") {
        textService.appendToFile(file, txt);
        rl.close();
      } else {
        throw new Error("Invalid Selection");
      }
    });
  });
};

const mathHandler = num => {
  if (+num > 4 || !isFinite(num) || +num < 1) {
    rl.close();
    return console.log("Invalid Selection");
  }
  const options = ["sum", "subtract", "multiply", "divide"];
  rl.question("Enter the first number: ", num1 => {
    rl.question("Enter the second number: ", num2 => {
      console.log(math[options[num - 1]](+num1, +num2));
      rl.close();
    });
  });
};

rl.question(
  `
Choose an operation (input the respective number):
1. File Operations
2. Calculator
Selection: `,
  answer => {
    if (answer === "1") {
      rl.question(
        "Choose a file operation: \n1. Write\n2. Read\n3. Append\n4. Delete\nSelection: ",
        num => {
          textHandler(num);
        }
      );
    } else if (answer === "2") {
      rl.question(
        "Choose operation: \n1. Sum\n2. Subtract\n3. Multiply\n4. Divide\nSeleciton: ",
        num => {
          mathHandler(num);
          return;
        }
      );
    } else {
      throw new Error("Invalid Selection");
    }
  }
);
