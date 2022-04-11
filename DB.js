const mongoose = require('mongoose');
const dbURL = "mongodb+srv://admin:abc12345@cluster0.colar.mongodb.net/test";

mongoose.connect(dbURL, {
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

let db = mongoose.connection;

db.on("error", function (err) {
    console.log("Mongoose Error: ", err);
});

db.once("open", function () {
    console.log("Mongoose connection successful.");
});