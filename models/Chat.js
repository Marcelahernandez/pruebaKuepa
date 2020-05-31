const Sequelize = require("sequelize")
const db = require("../database/db.js")

module.exports = db.sequelize.define(
    'chat',
    {
        id:{
            type:Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        user_id:{
            type:Sequelize.INTEGER
        },
        rol_user:{
            type:Sequelize.INTEGER
        },
        message:{
            type:Sequelize.STRING
        },
        date:{
            type:Sequelize.DATE,
            defaultValue: Sequelize.Now
        }
    },
    {
        timestamps:false
    }
)