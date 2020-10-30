
const express = require('express')
const app = express()
const port = 3000

const sequelize = require('./models/index')
const Contract = require('./models/Contract')
const Block = require("./models/Block");

async function boostrap() {

    await sequelize.authenticate();

    await Contract.sync()
    await Block.sync()

    // сюда нужно дописать методы

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
}

boostrap()


