const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, require: true, unique: true },
    hash: { type: String, require: true },
    location: { type: String, require: true },
});

module.exports = mongoose.model("User", UserSchema);
