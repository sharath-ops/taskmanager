import { useState } from "react"
import axios  from "axios"
export default function Signup(){
    const [name , setname] = useState("")
    const [age , setage] = useState(0)
    const [email , setemail] = useState("")
    const [password, setpassword] = useState("")

    async function handlesubmit(){
        if(!name | !age | !email | !password){
            return
        }
        try{
            const response = await axios.post("http://localhost:3000/signup",{
                name,
                age ,
                email, 
                password
            });
            console.log(response.data.token)
            localStorage.setItem('token' , response.data.token)
        }catch(e){
            console.error(e)
        }

    }


    return <div className=" flex justify-center flex-col items-center h-screen gap-[10px]">
        <input className="w-[1000px] bg-slate-500 border-[2px]  border-black"  placeholder="name" type="text" onChange={function(e){setname(e.target.value)}}></input>
        <input className="w-[1000px] bg-slate-500  border-[2px]  border-black" placeholder="age" type="number" onChange={function(e){setage(e.target.value)}}></input>
        <input className="w-[1000px] bg-slate-500  border-[2px]  border-black" placeholder="email" type="email" onChange={function(e){setemail(e.target.value)}}></input>
        <input  className="w-[1000px] bg-slate-500  border-[2px]  border-black" placeholder="passoword" type="password" onChange={function(e){setpassword(e.target.value)}}></input>
        <button className="w-[1000px] bg-slate-500  border-[2px]  border-black" onClick={handlesubmit} > SIGN UP</button>
    </div>
}