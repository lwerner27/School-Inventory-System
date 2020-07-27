const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../../models/User");
const db = require("../../controllers");

const saltRounds = 10;

const router = express.Router();

// Serves the registration page.
router.get("/create", (req, res) => {
  res.status(200).render("create", {
    pageTitle: "Create Account",
    createJs: true,
  });
});

// Post route for logins
router.post("/login", (req, res) => {
  db.User.AttemptLogin(req, res);
});

// Handles user accont creation information.
router.post("/create", (req, res) => {
  let { firstName, lastName, username, password, location } = req.body;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    // Checks for errors
    if (err) {
      console.log(err);
      res.status(500).send({
        msg: "There was an unknown server problem, please try again later.",
      });
    }

    let newUser = new User({
      firstName,
      lastName,
      username,
      hash,
      location,
    });

    newUser.save((err, user) => {
      if (err && err.code !== 11000) {
        console.log(err);
        res.status(500).send({
          statusCode: 500,
          msg: "There was an unknown issue, please try again later.",
        });

        return;
      }

      if (err && err.code === 11000) {
        res.status(409).send({
          statusCode: 409,
          msg: "That username is already taken, please try another.",
        });

        return;
      }

      res.status(201).send({
        statusCode: 201,
        msg: "Your account has been created.",
      });
    });
  });
});

module.exports = router;
