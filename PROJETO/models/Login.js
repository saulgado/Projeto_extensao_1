const { DataTypes } = require('sequelize')
const db = require ('../db/conn')
const bcrypt = require('bcrypt');


const Login = db.define('Login', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username : {
        type : DataTypes.STRING,
        allowNull : false
    },
    password : {
        type : DataTypes.STRING,
        allowNull : false
    },
    rol: { 
        type: DataTypes.ENUM('admin', 'user'),
        allowNull: false,
        defaultValue: 'user'
    }
}, {
    hooks: {
        beforeCreate: async (user) => {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(user.password, saltRounds);
            user.password = hashedPassword;
        },
        beforeUpdate: async (user) => {
            if (user.changed('password')) {
                const saltRounds = 10;
                const hashedPassword = await bcrypt.hash(user.password, saltRounds);
                user.password = hashedPassword;
            }
        }
    }
});

module.exports = Login