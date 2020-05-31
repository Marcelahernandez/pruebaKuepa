var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()
const serverHttp = require('http').Server(app)
/**Configuración de socket.io que recibe como parametro a nuestro servidor */
const io = require('socket.io')(serverHttp)

/**Mensajes */
const myMessages = []

/**para enviar mensajes */
/**data es el  dato q envia el cliente*/
io.on('connection', function(socket){
    socket.on("send-message", function(data){
        myMessages.push(data)
        socket.emit('text-event',myMessages)
        socket.broadcast.emit('text-event', myMessages)
    })
})


var port = process.env.port || 3000
app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({extended:false})
)

var Users = require("./routes/Users")
var Chat = require("./routes/Chat")
app.use("/users", Users)
app.use("/chat", Chat)



serverHttp.listen(port, function(){
    console.log("server is running on port" + port)
})
