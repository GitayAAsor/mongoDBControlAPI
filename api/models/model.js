'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var transactionSchema = new Schema({
  name: {
    type: String,
    required: 'enter the name of the transaction'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('transactions', transactionSchema);