const { DataTypes } = require('sequelize');
const sequelize = require('./index')

const Block = sequelize.define('Block', {
    blockID: {
        type: DataTypes.INTEGER,
        primaryKey: true

    },
    blockDur: {
        type: DataTypes.INTEGER
    },
    cnlID: {
        type: DataTypes.INTEGER
    },
    rate: {
        type: DataTypes.INTEGER
    },
},
{
    tableName: 'blocks',
    createdAt: false,
    updatedAt: false
});

module.exports = Block
