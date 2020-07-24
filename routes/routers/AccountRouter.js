const express = require("express");

const router = express.Router();

router.get("/create", (req, res) => {
    res.status(200).render("create", {
        pageTitle: "Create Account",
        createJs: true,
    });
});

router.post("/create", (req, res) => {
    let { firstName, lastName, username, password, location } = req.body;

    // console.log("First Name:", firstName);
    // console.log("Last Name:", lastName);
    // console.log("Username:", username);
    // console.log("Password:", password);
    // console.log("Location:", location);

    res.status(200).send({ msg: "You information has been recieved." });
});

module.exports = router;
