const mongoose = require("mongoose");
const transactionSchema = mongoose.Schema({
   email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  transactionid: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("transaction", transactionSchema);
