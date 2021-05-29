const express = require("express");
const cors = require("cors");
const router = require("./const/router.const");
const session = require("./const/session.const");
const helmet = require("helmet");
const { urlencoded } = require("body-parser");

const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

app.use(router);

app.listen(PORT, HOST, () => {
  console.log("Server is listening at http://localhost:3000");
});
