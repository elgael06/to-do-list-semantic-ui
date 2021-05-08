const { TaskModel } = require("../models/TaskDocument");

const taskModel =  {
     _id:1,
     "title":"",
     "body":"",
     "status":false
};


exports.allTask =  (req, res) => {

     const task =  TaskModel.find({});

     task.then(data=>{
          res.json({'data':data,'status':true,'message':'successfully'});
     }).catch(e=>{    
          res.json({'data':null,'status':false,'message':e.toString()});
     });
};
exports.allTaskStatus =  (req, res) => {

     let status= req.query.status;
     const task =  TaskModel.find({status:status});

     task.then(data=>{
          res.json({'data':data,'status':true,'message':'successfully'});
     }).catch(e=>{
          console.log(e);          
          res.json({'data':[],'status':false,'message':e.toString()});
     });
};

exports.taskId =  (req, res) => {

     let id = req.params.id;
     const task =  TaskModel.findOne({_id:id});

     task.then(data=>{          
          res.json({'data':data,'status':true,'message':'successfully'});
     }).catch(e=>{        
          res.json({'data':[],'status':false,'message':e.toString()});
     });
};

exports.taskInsert =  (req, res) => {

     let taskUpdate = req.body || taskModel;
     const task     = TaskModel();
     task.body      = taskUpdate.body;
     task.status    = true;

     task.save().then(data=>{          
          res.json({'data':data,'status':true,'message':'successfully'});
     }).catch(e=>{
          res.status = 404;
          res.json({'data':null,'status':false,'message':e.toString()});
     });
};

exports.taskIdUpdate =  (req, res) => {

     let id         = req.params.id;
     let taskUpdate = req.body || taskModel;
     let task       = TaskModel.findOneAndUpdate({_id:id},{
          body      : taskUpdate.body,
          status    : taskUpdate.status
     });

     task.then(data=>{
          res.json({'data':data,'status':true,'message':'successfully'});
     }).catch(e=>{
          res.json({'data':null,'status':false,'message':e.toString()});
     });
};

exports.taskIdDelete =  (req, res) => {

     let id     = req.params.id;
     const task =  TaskModel.findOneAndDelete({_id:id});

     task.then(data=>{          
          res.json({'data':data,'status':true,'message':'successfully'});
     }).catch(e=>{
          res.status = 404;
          res.json({'data':null,'status':false,'message':e.toString()});
     });
};