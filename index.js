const express = require('express')
const app = express()
const path = require('path')
const expressValidator = require('express-validator')
const customValidations = require('./src/API/Core/Validator/Validator')
const bodyParser = require('body-parser')
var passport = require('passport');
var session = require('express-session');
const fileUpload = require('express-fileupload')


//API

// Schemas
 require('./src/API/User/Schemas/Schema')
 require('./src/API/Games/Schemas/Schema')
 require('./src/API/Platforms/Schemas/Schema')
 require('./src/API/Categories/Schemas/Schema')

// DB CONNECTION
 require('./src/API/Core/Mongo/mongooseConnection')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(expressValidator(customValidations))

app.use(fileUpload())

/** set server port for local and production */
app.set('port', process.env.PORT || 3000)
// app.set('port', process.env.PORT || 80)

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/readme.md.html'));
});
app.use(express.static('public'))


/** user routes */
app.use(require('./src/API/User/Routes/Routes'))
/** games routes */
app.use(require('./src/API/Games/Routes/Routes'))
/** Platforms routes */
app.use(require('./src/API/Platforms/Routes/Routes'))
/** Categories routes */
app.use(require('./src/API/Categories/Routes/Routes'))
/** Search Routes */
app.use(require('./src/API/Core/Search/Routes/SearchRoutes'))




app.listen(app.get('port'), function () {
  console.log('Server listen on port ' + app.get('port'))
})
