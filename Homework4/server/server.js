const http = require("http");
const { v4: uuidv4 } = require("uuid");
const textService = require("./textService");
const PORT = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, PUT, OPTIONS"
  );
  res.setHeader("Access-Control-Max-Age", 2592000);

  if (method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    res.end();
  }

  if (url.startsWith("/users")) {
    if (method === "GET") {
      const text = textService.readDataFromDb("../db.json");
      res.setHeader("Content-Type", "text/html");
      res.write(text);
      res.end();
    }
  }

  if (method === "POST") {
    const body = [];
    req.on("data", chunk => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const user = JSON.parse(parsedBody);
      user.id = uuidv4();

      const dbData = textService.readDataFromDb("../db.json");
      const dbDataObject = JSON.parse(dbData);

      dbDataObject.push(user);
      const dbDataStringified = JSON.stringify(dbDataObject);

      textService.writeDataToDb("../db.json", dbDataStringified);
    });
    // res.setHeader("Content-Type", "text/html");
    // res.write('{"message": "New user added!"}');
    res.end();
  }
});

server.listen(PORT, () => {
  console.log("Server is active at http://localhost:3000");
});
