import { useState } from "react";
import axios from "axios";
import { useNavigate ,Link } from "react-router-dom";
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

        return  <div className="w-screen bg-slate-800 h-screen gap-[2vh] font-serif   flex flex-col justify-center items-center">
            <div className="text-slate-700 text-5xl">
                <h1 >welcome to TASK.IO</h1>
            </div>
        <div className="flex flex-col h-[70vh] rounded-t-lg bg-slate-600  gap-4 justify-center items-center w-[100vw] lg:w-[50vw] border-black border-[2px] ">
            <input className=" placeholder:text-center placeholder:text-[2vhvh] border-[2px] h-[7vh] bg-slate-400  placeholder:text-slate-900 focus:border-[4px] rounded-lg  border-slate-700 text-slate-700" placeholder="EMAIL" type="email" onChange={function(e){setemail(e.target.value)}}></input>
            <input  className=" placeholder:text-center border-[2px] h-[7vh] rounded-lg bg-slate-400 focus:border-[4px] border-slate-800 placeholder:text-slate-900" placeholder="PASSWORD" type="password" onChange={function(e){setpassword(e.target.value)}}></input>
        <button className=" border-[2px] h-[5vh] rounded-lg text-slate-800 w-[20vw] border-black text-nowrap hover:bg-slate-400" onClick={handlesubmit} > SIGN IN</button>
        <h1>don't have an account ? <Link to="/signup" className="font-bold">SIGN UP</Link></h1>
        </div>
        </div>

}