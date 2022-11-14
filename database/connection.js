const mongoose = require("mongoose");

const main = async () => {
  mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
    console.log("db connected");
  });
};

export default main;
