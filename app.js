//Require dependencies
const express = require('express')
const morgan = require('morgan')

// Initialize our application
const app = express()

//app.use(morgan('dev'))

app.use('/', (req, res) => {
  res.send("Hello\n")
})

//List on server
app.listen(1337, () => {
  console.log('We are listening for your requests on port 1337!')
})
