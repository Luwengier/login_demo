//-----definition parameter-----
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const loginCheck = require('./login_logi.js')
const port = 3000
const app = express()


//--------basic setting---------

//setting engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
//setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))
//setting static files
app.use(express.static('public'))


//----------set routing----------

//setting routing
app.get('/', (req, res) => {
  res.render('index')
})
app.post('/', (req, res) => {
  const checkAns = loginCheck(req.body)
  if (checkAns.includes('Welcome')) {
    res.render('index1', { checkAns })
  } else {
    res.render('index', { checkAns })
  }
})

//setting listener
app.listen(port, () => {
  console.log(`The server is listen on port ${port}`)
})

