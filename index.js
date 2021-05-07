const express = require('express');
const path = require('path');
require('./server/config/mongodb');

const taskController = require('./server/controller/task');


const app = express();
const port = process.env.PORT || 8080;


//expose the statics files.
app.use(express.static(path.join(__dirname,'/client/build')));


app.use(express.json())

// routes api.
app.get('/api/Task/',taskController.allTask)
.get('/api/Task/check',taskController.allTaskStatus)
.get('/api/task/:id',taskController.taskId)
.put('/api/Task/',taskController.taskInsert)
.post('/api/Task/:id',taskController.taskIdUpdate)
.delete('/api/Task/:id',taskController.taskIdDelete);


app.get('/*', (req, res) => {
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`server listening http://localhost:${port}`)
});