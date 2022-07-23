const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mongoose = require("mongoose");
const {
  createPollGetController,
  createPollPostController,
  getAllPolls,
  getViewPoll,
  postViewPoll,
} = require("./controller/pollController");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/create", createPollGetController);
app.post("/create", createPollPostController);

app.get("/polls", getAllPolls);
app.get("/polls/:_id", getViewPoll);
app.post("/polls/:_id", postViewPoll);

mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => {
    app.listen(3330, () => {
      console.log("running server & mongdb");
    });
  })
  .catch((err) => console.log(err));
