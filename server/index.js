const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.use("/books", router); //localhost:4000/books

mongoose.connect(
  "mongodb+srv://aadi:aadi1999@cluster1.sggxxty.mongodb.net/Lib-Mgmt-prototype?retryWrites=true&w=majority"
);

app.listen(4000, () => {
  console.log("Running");
});
