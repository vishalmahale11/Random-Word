const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  difficulty: { type: String, required: true },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
