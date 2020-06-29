const express = require('express')
const app = express()
const mongoose = require('mongoose')

// init middleware
app.use(express.json())

// Connect DB
const db = 'mongodb+srv://selima123:selima123@cluster0-eoh37.mongodb.net/<dbname>?retryWrites=true&w=majority'
mongoose.connect(db,{useNewUrlParser: true , useUnifiedTopology: true} ,(err) => {
    if(err) throw err
    console.log('Database connected!')
})

app.use('/api/user', require('./routes/users'))
app.use('/api/admin', require('./routes/admins'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/auth', require('./routes/authadmin'))
app.use('/api/products', require('./routes/products'))


app.listen(5000, (err) => {
    if (err) throw err
    console.log('Server is running on port 5000')
})