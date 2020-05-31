const express = require("express")
const chats = express.Router()
const cors = require("cors")
const Chat = require("../models/Chat")

chats.use(cors())
chats.post("/registerChat",(req,res)=>{
    const today = new Date()
    const chatData = {
        user_id : req.body.user_id,
        message : req.body.message,
        date : today,
        rol_user: req.body.rol_user
    }
    Chat.create(chatData)
    res.send("received")
})


module.exports = chats