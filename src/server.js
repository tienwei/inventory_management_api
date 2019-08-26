const express = require('express')
const fs = require('fs')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const basicAuth = require('express-basic-auth')
const bodyParser = require('body-parser')
const path = require('path')
const router = require('./routers')

const port = 3001
const app = express()

// configure middleware
app.set('port', process.env.port || port) // set express to use this port
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json()) // parse form data client
// enable cors
app.use(cors())

// basic auth
app.use(
  basicAuth({
    users: {testuser: 'testpassword'},
    unauthorizedResponse: getUnauthorizedResponse
  })
)
function getUnauthorizedResponse(req) {
  return req.auth
    ? 'Credentials ' + req.auth.user + ':' + req.auth.password + ' rejected'
    : 'No credentials provided'
}

// enhance security
app.use(helmet())

// parse json bodies to js obj
app.use(bodyParser.json())

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'access.log'),
  {
    flags: 'a'
  }
)

// setup the logger
app.use(morgan('common', {stream: accessLogStream}))
app.use('/api', router)

app.get('/', function(req, res) {
  res.send('api server is running')
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
module.exports = app
