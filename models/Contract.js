const { DataTypes } = require('sequelize');
const sequelize = require('./index')

const Contract = sequelize.define('Contract', {
    contractID: {
        type: DataTypes.INTEGER,
        primaryKey: true

    },
    totalRate: {
        type: DataTypes.INTEGER
    },
    cnlID: {
        type: DataTypes.INTEGER
    }
},
{
    tableName: 'contracts',
    createdAt: false,
    updatedAt: false
});

module.exports = Contract
