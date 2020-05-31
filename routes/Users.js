const express = require("express")
const users = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const User = require("../models/User")

users.use(cors())

process.env.SECRET_KEY = 'secret'



//Registro 

users.post("/register",(req,res)=>{
    const today = new Date()
    
    const userData = {
        user_name : req.body.user_name,
        email : req.body.email,
        user_password : req.body.user_password,
        created: today,
        user_rol: req.body.user_rol
    }
    
    User.findOne({
        where:{
            email : req.body.email
        }
    })
    .then( user =>{
        if(!user){
            const hash = bcrypt.hashSync(userData.user_password, 10)
            userData.user_password = hash
            User.create(userData)
            .then(user=>{
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY,{
                    expiresIn:1440
                })
                res.json({token:token})
            })
            .catch(err => {
                res.send("error" + err)
            })
        } else {
            res.json({error: "Usuario ya existe"})
        }
    })
    .catch(err => {
        res.send("error " + err)
    })
})
//Login

users.post("/login",(req,res)=>{
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        if(bcrypt.compareSync(req.body.user_password, user.user_password)){
            let token = jwt.sign(user.dataValues, process.env.SECRET_KEY,{
                expiresIn:1440
            })
            res.json({token:token, email:req.body.email, name:user.dataValues.user_name, user_rol:user.dataValues.user_rol, id: user.dataValues.id})
        } else {
            res.send('Usuario no existe')
        }
    })
    .catch(err =>{
        res.send('error: '+ err)
    })
})

module.exports = users