var express = require("express");
var router = express.Router();
const User = require("./model/usermodel");
const Transaction = require("./model/transactionmodel");
const unlink = require("./config/delete");

router.post("/addnewrecord", async function (req, res, next) {
  const { name, mobile, email, password } = req.body;
  const newUser = new User({ name, mobile, email, password });
  newUser.save(function (error, result) {
    if (error) {
      console.log(error);
      return res.status(500).json({ RESULT: false });
    } else {
      return res.status(200).json({ RESULT: true });
    }
  });
});

router.post("/checkuser", function (req, res, next) {
  const { email, password } = req.body;
  User.find({ email, password }, function (error, result) {
    if (error) {
      return res.status(500).json({ RESULT: false });
    } else {
      if (result.length > 0) {
        return res.status(200).json({ RESULT: true });
      } else {
        return res.status(201).json({ RESULT: false });
      }
    }
  });
});

router.post("/transaction", async function (req, res, next) {
  const { name, email, amount, transactionid } = req.body;
  const newTransaction = new Transaction({ name, email, amount, transactionid });
  newTransaction.save(function (error, result) {
    if (error) {
      console.log(error);
      return res.status(500).json({ RESULT: false });
    } else {
      return res.status(200).json({ RESULT: true });
    }
  });
});

module.exports = router;
