const express = require('express')
const mongoose = require('mongoose')
const Entrys = require("./routes/entrys")
const holders = require("./routes/holders")
const laptops = require("./routes/laptops")
const laptops = require('./models/laptops')
require('dotenv').config()



const app = express()
app.use(express.json())
app.use("/api/Entrys",Entrys)
app.use("/api/holders",holders)
app.use("/api/laptops",laptops)

app.get

app.listen(process.env.PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
    mongoose.connect(process.env.CNX_MONGO)
    .then(() => console.log('Connected!'))
    .catch((error)=> console.log(error))
})