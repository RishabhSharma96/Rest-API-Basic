const express = require('express')
const mongoose = require('mongoose')
const connection = require('./connection.js')
const routers = require('./routers.js')

const port = process.env.PORT || 5000

const server = express()
server.use(express.json())
server.use(routers)

server.listen(port, () => {
    console.log(`server is listening at port ${port}`)
})