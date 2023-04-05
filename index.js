const express = require("express");
const app = express();
const port = 9999;
const router = require('./router/routers')

app.use(express.json());
app.use(express.urlencoded())
app.use(router)

app.listen(port,()=>{
    console.log(`This app running at http://localhost:${port}/`)
})