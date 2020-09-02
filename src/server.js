const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const connectDb = require('./database')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)


connectDb()

app.listen(3333)