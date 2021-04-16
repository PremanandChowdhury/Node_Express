const http = require('http')

const server = http.createServer((req, res) => {

  if(req.url === '/') {
    res.end('Welcome to my World folk!!!')
  }
  if(req.url === '/about') {
    res.end('About me, I\'ll be updating soon....😉')
  }

  res.end(`
    <h1>OOPS!</h1>
    <p>We can't seem to find, what you asked for</p>
    <a href="/">Home</a>
  `) 
})

server.listen(5000)