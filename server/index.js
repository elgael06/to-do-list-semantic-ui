const express = require('express');
require('./config/mongodb');

const task = require('./controller/task');


const app = express();
const port = 8080;


app.get('/hola', (req, res) => {
  res.send('Hello World!')
});

//expose the statics files.
app.use(express.static('./client/build'));


app.use(express.json())

// routes api.
app.get('/api/Task/',task.allTask);
app.get('/api/Task/check',task.allTaskStatus);
app.get('/api/task/:id',task.taskId);
app.put('/api/Task/',task.taskInsert);
app.post('/api/Task/:id',task.taskIdUpdate);
app.delete('/api/Task/:id',task.taskIdDelete);


app.listen(port, () => {
  console.log(`server listening http://localhost:${port}`)
});