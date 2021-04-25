const express = require("express");
const app = express();

const people = require("./routes/people");
const auth = require("./routes/auth");

// Static assets
app.use(express.static("./Express/methods-public"));

// parse form data
app.use(
  express.urlencoded({
    extended: false,
  })
);

// pase json
app.use(express.json());

// Base Route
app.use("/api/people", people);
app.use("/login", auth);

app.listen(5000, () => {
  console.log("Server is listening to 5000!");
});
