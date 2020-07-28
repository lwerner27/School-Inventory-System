const express = require("express");
const bodyParser = require("body-parser");
const hbs = require("express-handlebars");
const path = require("path");

// Initialize Express App
const app = express();

app.engine(
    "handlebars",
    hbs({
        layoutsDir: "views/layouts/",
        defaultLayout: "main",
    })
);
app.set("view engine", "handlebars");
app.set("views", "views");

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

// Public Static Route
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", require("./routes/index"));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log("Server started on port: " + PORT);
});
