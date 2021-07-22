const express = require('express');
const cors = require('cors')

const addRoute = require('./routes/add')
const delRoute = require('./routes/delete');
const findRoute = require('./routes/find')
const updateRoute = require('./routes/update');


const app = express();
app.use(cors())

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use((req, res, next)=>{
    console.log(`${req.method} - ${req.url}`)
    next()
})

app.use('/add', addRoute)
app.use('/delete', delRoute)
app.use('/find', findRoute)
app.use('/update', updateRoute)




app.listen(4000, console.log("Running this app on 4000"))