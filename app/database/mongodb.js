const mongoose = require("mongoose");
const DB_Name = process.env.DB_DATABASE;
const DB_Uname = process.env.DB_USERNAME;
const DB_Password = process.env.DB_PASSWORD;

const databaseConnect = () => {
  mongoose
    .connect(
      `mongodb+srv://${DB_Name}:${DB_Password}@cluster0.33ks6.mongodb.net/${DB_Uname}?retryWrites=true&w=majority&appName=Cluster0`
    )
    .then(() => console.log("Connected!"));
};

module.exports = databaseConnect;
