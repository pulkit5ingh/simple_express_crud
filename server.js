const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

// cors
app.use(cors())

// parse application/json
app.use(bodyParser.json())

// Connection to MongoDB
mongoose
    .connect(
        'mongodb+srv://username:password@mycluster.rkncu.mongodb.net/MernTodo?retryWrites=true&w=majority',
        { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// routes 
app.use('/', require('./routes/index'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
