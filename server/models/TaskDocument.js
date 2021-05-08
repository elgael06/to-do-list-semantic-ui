const { Schema, model } = require("mongoose");


const TaskDocument = new Schema({
     body:String,
     status:Boolean
});

exports.TaskModel = model('TaskModel',TaskDocument);
