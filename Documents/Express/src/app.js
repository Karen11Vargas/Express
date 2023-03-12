const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000

// app.use(express.json()) //Convierte los formatos json que se reciben en objetos js

const user = require('./users.controller')
const apis = require('../consumo')

mongoose.connect('mongodb+srv://karenvargas:1011201964@cluster0.gmipu7x.mongodb.net/api-db?retryWrites=true&w=majority');


app.get('/app', user.list)
app.post('/app', user.create)
app.get('/app/:id', user.get)
app.put('/app/:id', user.update)
app.delete('/app/:id', user.delete)
app.get('/consumo', apis.getUsers)




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`Run in: http://localhost:${port}`)
})