const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/CSVUPLOAD").then(() => {
    console.log("Connection Established Successfully!");
}).catch((e) => {
    console.log("No Connection:", e);
});