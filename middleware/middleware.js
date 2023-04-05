const { error } = require('console')
const ctr = require('../controller/controller')
const fs = require('fs')

function inputLoginChecker(req,res,next){
    if(req.body.username=== null || req.body.username=== undefined ||req.body.username===""){
        res.status(400).send("Username anda Kosong !")
    }else if( req.body.password === null || req.body.password === undefined || req.body.password ===""){
        res.status(400).send("Password anda Kosong !")
    }
    next()
}

function auth(req,res,next){
    const payload = ctr.verifyToken(req.headers['token']);
    const rawdata = fs.readFileSync('./data/user.json')
    const data = JSON.parse(rawdata)
    if(payload.id !== data[0].id){
        res.status(401).json({
            status : 401,
            message : "Unauthorized"
        })
    }else{
        return next()
    }
    
}

module.exports= {inputLoginChecker,auth}