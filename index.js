const express = require("express");
const app = express();
const fs = require('fs')
const midd = require('./middleware/middleware')
const ctr = require('./controller/controller')

const port = 9999;

app.use(express.json());
app.use(express.urlencoded())

app.get('/',ctr.welcome)

app.post('/login',midd.inputLoginChecker,ctr.login)

app.get('/getAllData',midd.auth,ctr.ShowTeacher)

app.listen(port,()=>{
    console.log(`This app running at http://localhost:${port}/`)
})