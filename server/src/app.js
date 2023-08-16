let express = require('express')
let bodyParser = require('body-parser')
const { sequelize } = require('./models')

const config = require('./config/config')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

require('./route')(app)

app.get('/status', function (req, res) {
    res.send('Hello nodejs server mild')
})

app.get('/hello/:name', function (req, res) {
    console.log('hello - ' + req.params.name)
    res.send('sey hello with ' + req.params.name)
})

let port = process.env.PORT || config.port
sequelize.sync({ force: false }).then(() => {
    app.listen(port, function () {
        console.log('Server running on ' + port)
    })
})



//page82