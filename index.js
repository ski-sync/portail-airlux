const express = require('express');
const app = express()
const port = 3000

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {data: 2});
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})