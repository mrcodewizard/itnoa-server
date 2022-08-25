const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
app.use(cors());
const contactUs = require("./routes/contactUs");
const { contactUsValidator } = require("./controllers/contactUs");
const { body, validationResult, checkSchema } = require("express-validator");
const { env } = require("process");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

/*  build client and server index.html at start */
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static(path.join(__dirname, "/client")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/build", "index.html"));
  });
}

app.use("/send-email", checkSchema(contactUsValidator), contactUs);

const port = process.env.PORT | 4000;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
