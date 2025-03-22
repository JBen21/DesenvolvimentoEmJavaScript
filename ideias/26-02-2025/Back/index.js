const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')
const crypto = require('crypto')
const { connect } = require('http2')
const porta = 3000
const server = express()
server.use(cors())
server.use(express.json())

const pool = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    port:3306,
    database:"loja"
})

pool.connect((erro)=>{
    if(erro){
        console.log(erro)
    }else{
        console.log("Conectado ao Banco de dados")
    }
})

server.listen(porta,()=>{
    console.log("O servidor está rodando")
})

server.get('/home',(req,res)=>{
    res.send("Você está muito longe de casa, aqui é o meu servidor")
})

server.get('/hash',(req,res)=>{
    const senha = req.query.senha

    const hash_gerada = crypto.createHash("sha256").update(senha).digest("hex")

    res.send(hash_gerada)
})

server.post('/cadastrar',async(req,res)=>{
    try {

        if (login.trim()===""|| senha.trim()==="") {
            return res.json({msg:"Login ou Senha Ivalido!"})
        }

        const {login, senha} = req.body
        const hash_gerada = crypto.createHash("sha256").update(senha).digest("hex")
        const sql = `INSERT INTO usuarios (login, senha) VALUES (?,?)`
        const linha = await pool.execute(sql,[login,hash_gerada])
        console.log(linha)
        res.json({mensagem:"Registro Gravado"})
    } catch (error) {
        console.log(error)
    }
})

server.post('/logar',async(req,res)=>{
    const {usuario} = req.body
    const sql = `SELECT * FROM usuarios WHERE login = '${usuario}' and senha = '${hash_gerada}'`
})