import axios from "axios"

export default function Todocard({todo, settodos}){

    async function  deletehandler(todo) {
        const token = localStorage.getItem("token")
        const response = await axios.post("http://localhost:3000/api/removetodo", {
            todo
        },{
            headers : {

                token
            }
        });
        if(response.data.status){
            console.log("to is succefully deleted")
            // update the state
            settodos(function(ptodos){
               return  ptodos.filter(function(ptodo){
                return ptodo.id !== todo.id
               })
            })
        }
        
    }
    async function statushandler(ptodo) {
        const token = localStorage.getItem("token");
        const response = await axios.post("http://localhost:3000/api/editstatus" , {
            todo : { 
                    id : ptodo.id,
                    title : ptodo.title,
                    content : ptodo.content,
                    userid  : ptodo.userid,
                    status : !ptodo.status
            }

        }, {
            headers : {
                token
            }
        })
        console.log(response.data)
        if(response.data.status){
            settodos(function(ptodos){
                return ptodos.map(function(element){
                    if (element.id !== todo.id ){
                        return element
                    }
                    else {
                        return {
                            id :  element.id,
                            title : element.title,
                            content : element.content,
                            userid : element.userid,
                            status : !element.status
                        }
                    }
                }
            )})
        }
        
    }

    return <div>
        <h1>{todo.title}</h1>
        <h3>{todo.content}</h3>
        <button className="border-[2px] border-black" onClick={function(){statushandler(todo)}}>mark as {todo.status ? "INCOMPLETE" : "COMPLETE"}</button>
        <br></br>
        <button className="border-[2px] border-black" onClick={function(){deletehandler(todo)}}>delete</button>
    </div>
}