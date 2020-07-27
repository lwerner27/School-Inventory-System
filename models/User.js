const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, require: true, unique: true },
  hash: { type: String, require: true },
  location: { type: String, require: true },
});

UserSchema.methods.comparePassword = (password, hash, cb) => {
  bcrypt.compare(password, hash, (err, isMatch) => {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

module.exports = mongoose.model("User", UserSchema);
