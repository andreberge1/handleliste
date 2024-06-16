const { DataTypes } = require("sequelize");
const sequelize = require("./db.config");

const User = sequelize.define('user', {
    email: {
        type: DataTypes.CHAR,
        allowNull: false,
        unique: true
    },
    first_name: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    last_name: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    password: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    created_date: {
        type: DataTypes.DATE
    },
    active: {
        type: DataTypes.BOOLEAN,
    }
}, {
    tableName: 'users'
});

module.exports = User;