require("dotenv").config();
const Model = require("./models/model.js");
const model = new Model();

model.listen();
