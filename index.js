const express = require("express")
const ejs = require("ejs");

const app = express()

app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')

const router = require('./routes/routes')

app.use(router)

app.listen('3000')