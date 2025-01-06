import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Signin(){
        const [email , setemail] = useState("")
        const [password , setpassword] = useState("")
        const navigate = useNavigate()
        async function handlesubmit() {
            if(!email | !password){
                return
            }
            const response = await axios.post("http://localhost:3000/signin",{
                email, password
            })
            console.log(response.data.token)
            localStorage.setItem("token" , response.data.token)
            navigate("/home")

        }

        return <div className="flex flex-col h-screen justify-center items-center ">
             <input className="w-[1000px] bg-slate-500  border-[2px]  border-black" placeholder="email" type="email" onChange={function(e){setemail(e.target.value)}}></input>
        <input  className="w-[1000px] bg-slate-500  border-[2px]  border-black" placeholder="passoword" type="password" onChange={function(e){setpassword(e.target.value)}}></input>
        <button className="w-[1000px] bg-slate-500  border-[2px]  border-black" onClick={handlesubmit} > SIGN IN</button>
        </div>
}