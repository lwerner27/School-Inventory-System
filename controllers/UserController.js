const db = require("../models");

module.exports = {
  // Finds user by username.
  AttemptLogin: function (req, res) {
    db.User.findOne({ username: req.body.username }).then((user, err) => {
      if (err) console.log("Error: ", err);

      if (!user) {
        res.status(401).send({
          success: false,
          msg: "Authentication failed. User not found.",
        });
      } else {
        console.log("Hello world.");
        user.comparePassword(req.body.password, user.hash, (err, isMatch) => {
          if (isMatch && !err) {
            console.log("Passwords match.");
          } else {
            if (err) console.log(err);
            console.log("Passwords do not match.");
          }
        });
      }
    });
  },
  // Finds one user by username and returns all data excluding the hash.
  findUserByUsername: (req, res) => {
    db.User.findOne({ username: req.body.username })
      .select("firstName lastName username location")
      .then((user, err) => {
        if (user && !err) {
          console.log(user);
        }
      });
  },
};
