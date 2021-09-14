const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const { pushNotification} = require('./routers')

// settings
app.set('port', process.env.PORT || 3001)

// middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json({ limit: '50mb' }))

// routes
app.use('/api/push', pushNotification)

module.exports = app
