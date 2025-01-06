import express from "express"
import jwt from "jsonwebtoken"
import { prisma } from "../index.mjs"
import { secret } from "../index.mjs"
export  const router = express.Router()

router.use(function(req, res,next){
    const token = req.headers["token"]
    if(!token){
        return  res.status(401).send({status : "failure"})
    }
    try{
        const data = jwt.verify(token, secret)
        req.data = data 
        console.log(data)
        next()
    }catch(e){
        return res.status(301).send({status : "failure"})
    }
})
router.post("/createtodo" , async function(req,res){

    try{
        const todo = await prisma.todos.create({
            data :{
                title : req.body.todo.title,
                content : req.body.todo.content,
                userid : req.data.userid
    
            }
        })
        return res.json({status : "success" , todo})
    }catch(e){
            return res.send({status : "failure"})
    }
    
})

router.get('/todos', async function (req,res){
    try{
        const todos = await prisma.todos.findMany({
            where : {
                userid : req.data.userid
            }
        });
        return res.status(200).send({todos , status : "success"});
    }
    catch(e){
        console.error(e);
        return res.status(500).send({status : "failure"})
    }
});

router.post("/removetodo" , async function(req, res){
    try {
             await prisma.todos.delete({
            where : {
                id : req.body.todo.id
            }
        })
        
        return res.status(200).send({status : true})
    }catch(e){
        return res.status(301).send({status : "failure"})
    }   

})

router.post("/editstatus" , async function(req, res){
    const todo = req.body.todo
    try {
        const updatadtodo = await prisma.todos.update({
                where : {
                    id : todo.id
                },
                data : {
                    status : todo.status
                }
        })
        return res.send({status : true})
    }
   
    catch(e){
        return res.send({status : false})
    }
})

export default router;

