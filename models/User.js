const Sequelize = require("sequelize")
const db = require("../database/db.js")

module.exports = db.sequelize.define(
    'user',
    {
        id:{
            type:Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        user_name:{
            type:Sequelize.STRING
        },
        email:{
            type:Sequelize.STRING
        },
        user_password:{
            type:Sequelize.STRING
        },
        created:{
            type:Sequelize.DATE,
            defaultValue: Sequelize.Now
        },
        user_rol:{
            type:Sequelize.INTEGER
        }
    },
    {
        timestamps:false
    }
)