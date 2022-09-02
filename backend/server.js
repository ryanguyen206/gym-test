require('dotenv').config()
const path = require('path');
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

app.use(express.static(path.join(__dirname, "/frontend/build")))

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, "/frontend/build", "index.html"))
})

// connect to db
mongoose.connect(process.env.MONGO_URI)

    // listen for requests
app.listen(process.env.PORT || 3001, () => {
      console.log('connected to db & listening on port', process.env.FORT)
})
 