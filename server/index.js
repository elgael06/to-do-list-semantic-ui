const express = require('express')
const app = express()
const port = 8080

app.get('/hola', (req, res) => {
  res.send('Hello World!')
})

app.use(express.static('./client/build'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})