const { Schema, model } = require("mongoose");


const TaskDocument = new Schema({
     title:String,
     body:String,
     status:Boolean
});

exports.TaskModel = model('TaskModel',TaskDocument);
