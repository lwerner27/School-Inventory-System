// Imports
const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");
const hbs = require("express-handlebars");

// Variables
const PORT = process.env.PORT || 8080;

// Express app setup
const app = express();

// Handlebars configuration
app.engine(
    "handlebars",
    hbs({ layoutsDir: "views/layouts/", defaultLayout: "main" })
);
app.set("view engine", "handlebars");
app.set("views", "views");

// Body Parser Setup
app.use(bodyParser.urlencoded({ extended: true }));

// Public Route
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.status(200).render("login", { pageTitle: "Inventory Login" });
});

// 404 Route
app.use((req, res) => {
    res.status(404).render("404", { pageTitle: "404: Page Not Found" });
});

app.listen(PORT, () => {
    console.log("The server is listening on port: " + PORT);
});
