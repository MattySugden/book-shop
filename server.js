require('dotenv').config()

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const connectDB = require('./config/dbConnection')

const indexRouter = require('./routes/index')
const authorRouter = require('./routes/authors')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false}))

// DB Connection
connectDB()

app.use('/', indexRouter)
app.use('/authors', authorRouter)

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(process.env.PORT || 3000, console.log('Server running on port 3000'))
})