var mongoose = require('mongoose');

var employee = new mongoose.Schema({

    name: String,
    department: String,
    email: String,
    date: { type: Date, default: Date.now }
    // date: Date,
})

var employee = mongoose.model('employee', employee);
module.exports = employee;