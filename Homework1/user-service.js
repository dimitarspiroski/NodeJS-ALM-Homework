const fs = require("fs");

const getUsers = () => {
  let data = fs.readFileSync("./users.json");
  let parsedData = JSON.parse(data);
  return parsedData.users;
};

const addUser = user => {
  let users = getUsers();
  const isRegistered = users.find(u => u.username === user.username);
  if (isRegistered) {
    throw new Error(`The user ${user.username} is already registered.`);
  }
  users = [...users, user];
  let data = { users };
  let stringifiedData = JSON.stringify(data);
  fs.writeFileSync("./users.json", stringifiedData);
  console.log(`${user.username} has been registered!`);
};

module.exports = {
  getUsers,
  addUser,
};
