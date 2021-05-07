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

// routes api.
/**
 * get methods
 */
app.get('/api/Task/',task.allTask);
app.get('/api/task/:id',task.taskId);
/**
 * post methods
 */


app.listen(port, () => {
  console.log(`server listening http://localhost:${port}`)
});