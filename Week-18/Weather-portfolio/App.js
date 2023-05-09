const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const User = require("./models/user");
const bodyParser = require("body-parser");
const bcryptjs = require("bcryptjs");
const app = express();

mongoose.connect("mongodb://0.0.0.0:27017/database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// let db = mongoose.connection;
// console.log("mongoose connected 1");

// db.on('error', console.log.bind(console, 'connection error'));
// db.once('open', function(callback){
//     console.log('connection succeed');
// });

// console.log('mongoose connected 2');

app.use("/", express.static(path.join(__dirname, "static")));
app.use(bodyParser.json());

app.post("/login", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  // const user = User.findOne({ username, password }).lean();
  const userData = await User.find({
    username: username,
    password: password,
  }).exec();
  console.log("user data: ", userData);

  if (!userData) {
    return res.json({
      status: "error",
      error: "Invalid username",
    });
  }

  // if (await bcryptjs.compare(password, user._conditions.password)) {
  if (password == userData[0].password) {
    // const userData = jwt.sign(
    //   {
    //     id: user.id,
    //     username: user._conditions.username,
    //   },
    //   JWT_SECRET
    // );

    return res.json({
      status: "success",
      data: userData[0],
    });
  } else {
    return res.json({
      status: "error",
      data: "User not found",
    });
  }
});

app.post("/register", async function (req, res) {
  console.log("Request body: ", req.body);

  const username = req.body.username;
  const password = req.body.password;
  const assets = req.body.assets;
  const fixed_income = req.body.fixed_income;
  const expenses = req.body.expenses;
  const alternatives = req.body.alternatives;

  // const password = await bcryptjs.hash(pass, 10);
  let response = null;
  try {
    response = await User.create({
      username,
      password,
      assets,
      fixed_income,
      expenses,
      alternatives,
    });

    console.log(response);
  } catch (error) {
    console.log("Exception: ", error);

    if (error.code === 11000) {
      res.json({
        status: "error",
        error: "Duplicate username",
      });
    }
    res.json({ status: "error" });
  }

  res.json({
    status: "success",
    response: response,
  });
  // take req data -- username, pass, etc..
  // store that data in db under resp user
});

//read
app.get("/getInfo", async function (req, res) {
  // filter by year

  try {
    const username = req.body.username;
    const password = req.body.password;

    const userData = await User.find({
      username: username,
      password: password,
    }).exec();

    let fixedIncome = userData[0]._doc.fixed_income;
    console.log("fixedIncome", fixedIncome);

    let sortedFixedIncomeArray = fixedIncome.sort(function (a, b) {
      var x = a.year < b.year ? -1 : 1;
      return x;
    });
    res.json({
      status: "success",
      info: "Fixed income filtered by year",
      response: sortedFixedIncomeArray,
    });
  } catch (error) {
    res.json({ status: "error" });
  }
});

//update
app.patch("/upload", async function (req, res) {
  // upload bill

  const filter = { username: req.body.username }; //username filter
  const password = req.body.password;

  const updateData = req.body.update;
  const userData = null;

  try {
    const filter = { username: username };
    userData = User.findOneAndUpdate(filter, updateData, { new: true });
    console.log("user data", userData);
  } catch (error) {
    res.json({ status: "error" });
  }

  res.json({
    status: "success",
    response: userData,
  });
});

//delete
app.post("/delete", async function (req, res) {
  // delete info
  const username = req.body.username;
  try {
    console.log(await User.countDocuments({ username: username })); // 1

    const userData = await User.deleteOne({
      username: username,
    });
    console.log(await User.countDocuments({ username: username })); // 0

    res.json({
      status: "success",
      response: "user deleted",
    });
  } catch (error) {
    res.json({ status: "error" });
  }
});

//delete
app.post("/ClearAllData", async function (req, res) {
  try {
    const result = User.collection.drop();
    res.json({
      status: "success",
      response: "Dropped database",
    });
  } catch (error) {
    res.json({
      status: "Error",
      response: error,
    });
  }
});

var server = app.listen(8000, "192.168.101.3", function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("App listening at http://%s:%s", host, port);
});
