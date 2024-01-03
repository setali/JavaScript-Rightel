var http = require('http')

var server = http.createServer(function (req, res) {
  var person = {
    name: 'Ali'
  }

  console.log(Date.now(), 'salam')
  console.log(req.headers.origin)

  //   res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')
  res.setHeader('Access-Control-Allow-Origin', '*')

  res.end(JSON.stringify(person))
})

server.listen(4000, function () {
  console.log('Server is Started on Port 4000')
})
