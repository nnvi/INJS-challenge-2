const express = require("express");
const app = express();
const midd = require('../middleware/middleware');
const ctr = require('../controller/controller');

app.get('/',ctr.welcome)

app.post('/login',midd.inputLoginChecker,ctr.login)

app.get('/getAllData',midd.auth,ctr.ShowTeacher)

module.exports = app