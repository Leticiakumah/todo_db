const { model } = require('mongoose')

const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    time: Date,
    isCompleted:Boolean
})

const todoModel = mongoose.model('todo',todoSchema);

module.exports = todoModel;