const express = require('express');
const path = require('path');
require('./server/config/mongodb');

const taskController = require('./server/controller/task');


const app = express();
const port = process.env.PORT || 8080;

app.get('/hola', (req, res) => {
  res.send('Hello World!')
});

//expose the statics files.
app.use(express.static(path.join(__dirname,'/client/build')));


app.use(express.json())

// routes api.
app.get('/api/Task/',taskController.allTask);
app.get('/api/Task/check',taskController.allTaskStatus);
app.get('/api/task/:id',taskController.taskId);
app.put('/api/Task/',taskController.taskInsert);
app.post('/api/Task/:id',taskController.taskIdUpdate);
app.delete('/api/Task/:id',taskController.taskIdDelete);


app.listen(port, () => {
  console.log(`server listening http://localhost:${port}`)
});