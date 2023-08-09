let express = require('express')
const app = express()

app.get('/status', function (req,res){
    res.send('Hello nodejs server mild')
})

app.get('/hello/name', function (req,res){
    console.log('hello - ' +req.params.name)
    res.send('sey hello with ' + req.params.name)
})


let port = 8081
app.listen(port, function(){
    console.log('server running on ' + port)
})

 