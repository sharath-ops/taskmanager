import { PrismaClient } from "@prisma/client";
import express from "express";
import jwt from "jsonwebtoken"
import router from "./routes/apiroute.mjs"
import cors from "cors"
export const secret = "thisissecret"

export const prisma = new PrismaClient()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api", router)


app.post("/signup" ,async function(req, res){

    const user = await prisma.user.create({
        data : {
            name : req.body.name,
            age : parseInt(req.body.age),
            email : req.body.email,
            password : req.body.password,
        }

    })

    
    const token = jwt.sign({userid : user.id} , secret)

    return res.status(200).send({token})
})

app.post("/signin" , async function(req, res) {
    const user = await prisma.user.findFirst({
        where : {
            email : req.body.email,
        }   
    })
    console.log(user)
    const token = jwt.sign({userid : user.id}, secret)
    return res.status(200).send({token})
})
app.listen(3000)



