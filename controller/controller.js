const fs = require('fs')
const jwt = require('jsonwebtoken')
const secret_key ="rahasia"

function generateToken(payload){
    const token = jwt.sign(payload, secret_key)
    return token
}

function verifyToken(token){
    let headerToken = jwt.verify(token,secret_key)
    return headerToken
}

function welcome(req,res){
    res.status(200).json({
        status: "OK",
        Message : "Selamat Datang Silahkan Login"
    })
}

async function login (req,res){
    try{
        const rawdata = fs.readFileSync('./data/user.json')
        const data = JSON.parse(rawdata)
        if(req.body.username !== data[0].username){
            res.status(402).json({
                error :`Invalid Username !`
            })
        }else if(req.body.password !== data[0].password){
            res.status(403).json({
                error :`Invalid Password !`
            })
        }else{
            const token = await generateToken({id : data[0].id,username : data[0].username})
            const result  ={
                id : data[0].id, 
                username : data[0].username,
                token : token
            }
            return res.status(200).json(result)
        }
        }catch(err){
            res.status(400).json({
                error:err
            })
    }
}

async function ShowTeacher(req,res){
    try{
        const rawdata = fs.readFileSync('./data/teachers.json')
        const data = JSON.parse(rawdata)
        res.status(200).json(data)
    }catch(err){
        res.status(401).json({
            error:err
        })
    }
}

module.exports={
    login, 
    ShowTeacher,
    verifyToken,
    welcome
}