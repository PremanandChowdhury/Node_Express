/**
 * Middlewares
 */

const express = require('express')
const app = express()
const logger = require('./middleware/logger')
const authorize = require('./middleware/authorize')

// req => middleware => res

// app.use('route', middlewareName): this middleware function is added to every route
app.use([logger, authorize])

app.get('/', (req, res) => {
  res.send('Home Page')
})

app.get('/about', (req, res) => {
  res.send('About Page')
})

app.get('/api/products', (req, res) => {
  res.send('About Page')
})

app.get('/api/products/product/:id', (req, res) => {
  res.send('About Page')
})

app.listen(5000, () => {
  console.log('Server is running at port no. 5000!')
})