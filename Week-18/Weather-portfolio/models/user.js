const mongoose = require("mongoose");

const assetsSchema = new mongoose.Schema({
  gold: { type: String },
  property: { type: String },
  bank_balance: { type: Number },
});

const fixed_incomeSchema = new mongoose.Schema({
  year: { type: Number },
  income: { type: Number },
});

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    assets: assetsSchema,
    fixed_income: [fixed_incomeSchema],
    expenses: { type: Number },
    Alternatives: { type: String },
  },
  { collection: "users" }
);

const model = mongoose.model("userSchema", userSchema);

module.exports = model;
