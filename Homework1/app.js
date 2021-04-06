const userService = require("./user-service");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Actions (enter the respective number): ");
console.log("1. Sign-In");
console.log("2. Sign-Up");

rl.question("Choose an action: ", answer => {
  if (answer === "1") {
    rl.question("Username: ", username => {
      rl.question("Password: ", password => {
        const users = userService.getUsers();
        const user = users.find(
          user => user.username === username && user.password === password
        );
        if (!user) {
          throw new Error("Invalid username or password.");
        }
        console.log(user);
        rl.close;
      });
    });
  } else if (answer === "2") {
    console.log("Sign-Up User: ");
    rl.question("Enter Username: ", username => {
      rl.question("Enter Password: ", password => {
        userService.addUser({ username, password });
        rl.close();
      });
    });
  } else {
    throw new Error("Invalid Option");
  }
});
