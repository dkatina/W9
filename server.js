const express = require('express')
const dotenv = require('dotenv')
const path = require('path')

const app = express()
dotenv.config()

app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, '/src/templates/views'))

app.use(express.json())

app.listen(process.env.PORT, ()=>{
    console.log(`Running at http://localhost:${process.env.PORT} ...`)
})

app.get("/", (req, res)=>{
    res.render('index')
})

app.get("/profile", (req, res)=>{
    res.render('profile')
})

app.get("/login", (req, res)=>{
    res.render('login')
})

app.get("/register", (req, res)=>{
    res.render('register')
})

app.get("/user", (req, res)=>{
    res.render('user')
})


