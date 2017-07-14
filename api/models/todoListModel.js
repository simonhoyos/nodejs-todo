'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    Required: 'Enter a new task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['todo', 'ongoing', 'completed']
    }],
    default: ['todo']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);