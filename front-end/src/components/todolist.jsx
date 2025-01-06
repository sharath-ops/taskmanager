import { useEffect, useState } from "react";
import axios from "axios"
import Todocard from "./todocard";
export default function Todolist(){
    const token = localStorage.getItem("token")
    const [todos , settodos] = useState([])
    const [loading , setloading] = useState(true)
    useEffect(function(){
        async function main() {
            const response = await axios.get("http://localhost:3000/api/todos",{ headers: {
                token
            }})
            console.log(response.data.todos)
                settodos(response.data.todos)
                setloading(false)
        }
        main()
    }, [])
    if(todos){
     console.log("after updating ",todos)
    }
    
    if(loading){
        return <div>
            loading......
        </div>
    }
   
    else{
       return <div>
            {todos.map(function(todo){
              return  <div key={todo.id} className="border-[2px] border-black">
                        <Todocard todo={todo}  settodos={settodos}></Todocard>
                </div>  
            })}
        </div>
    }
}