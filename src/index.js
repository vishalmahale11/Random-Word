const express = require("express");
const cors = require("cors");
const randomWord = require("random-words");
const connection = require("../config/db");
const UserModel = require("../models/user.models");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8040;

app.get("/", (req, res) => {
  res.send("Get Random Word");
});

app.get("/randomWordsEasy", async (req, res) => {
  try {
    let word = await randomWord({ exactly: 2, join: "" });
    res.send({ word });
  } catch (error) {
    console.log(error);
  }
});

app.get("/randomWordsMedium", async (req, res) => {
  try {
    let word = await randomWord({ exactly: 6, join: "" });
    res.send({ word });
  } catch (error) {
    console.log(error);
  }
});

app.get("/randomWordsHigh", async (req, res) => {
  try {
    let word = await randomWord({ exactly: 10, join: "" });
    res.send({ word });
  } catch (error) {
    console.log(error);
  }
});

app.post("/user", async (req, res) => {
  const { name, difficulty } = req.body;
  const user = new UserModel({
    name,
    difficulty,
  });
  await user.save();
  res.send({ user });
});

app.listen(PORT, async () => {
  try {
    await connection();
    console.log(`http://localhost:${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
