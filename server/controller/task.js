const { TaskModel } = require("../models/TaskDocument");

const taskModel =  {
     id:1,
     title:'',
     body:'',
     status:''
};


exports.allTask =  (req, res) => {
     const task =  TaskModel.find({});
     task.then(data=>{
          console.log('task: ',data);
          res.json({'data':data,'status':true,'message':'successfully'});
     }).catch(e=>{
          console.log(e);          
          res.json({'data':[],'status':false,'message':e.toString()});
     });
};

exports.taskId =  (req, res) => {
     let id = req.params.id;
     const task =  TaskModel.findById(id);
     task.then(data=>{
          console.log('task: ',data);
          res.json({'data':data,'status':true,'message':'successfully'});
     }).catch(e=>{        
          res.json({'data':[],'status':false,'message':e.toString()});
     });
};

exports.taskInsert =  (req, res) => {
     let task = req.body.task || taskModel;
     res.json({'data':{...task,id:0},'status':true});
};

exports.taskIdUpdate =  (req, res) => {
     let id = req.params.id;
     let task = req.body.task || taskModel;
     res.json({'data':{...task,id},'status':true});
};

exports.taskIdDelete =  (req, res) => {
     let id = req.params.id;
     res.json({'data':{...taskModel,id},'status':true});
};