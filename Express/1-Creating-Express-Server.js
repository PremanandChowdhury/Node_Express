const express = require('express')
const app = express()

// Serve all the static files which are present in public folder
app.use(express.static('./public'))

app.listen(5000, () => {
  console.log('Server listening to port: 5000');
})

app.get('/', (req, res) => {
  console.log('User is in Home Page');
  res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
  console.log('User is in About Page');
  res.status(200).send('About Page')
})

app.all('*', (req, res) => {
  res.status(404).send('<h1> Resource not Found <h1>')
})