// Imports
const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");
const router = require("./routes/router");
const hbs = require("express-handlebars");
const mongoose = require("mongoose");

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

// Main router
app.use("/", router);

// 404 Route
app.use((req, res) => {
    res.status(404).render("404", { pageTitle: "404: Page Not Found" });
});

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/SchoolInventory",
    { useNewUrlParser: true }
);

app.listen(PORT, () => {
    console.log("The server is listening on port: " + PORT);
});
