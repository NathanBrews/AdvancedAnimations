const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3001;
// set static folder for
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => console.log("listening on " + PORT));
