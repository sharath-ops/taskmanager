import { useState } from "react"
import {Link} from "react-router-dom"
import axios  from "axios"
export default function Signup(){
    const [name , setname] = useState("")
    const [age , setage] = useState(0)
    const [email , setemail] = useState("")
    const [password, setpassword] = useState("")
    const [cpassword , setcpassword] = useState("")

    async function handlesubmit(){
        if(!name  | !email | !password){
            return
        }
        if( cpassword !== password){
            alert("password and confirm password should be same")
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

    return <div className="w-screen bg-slate-800 h-screen gap-[2vh] font-serif   flex flex-col justify-center items-center">
                <div className="text-slate-700 text-5xl">
                    <h1 >welcome to TASK.IO</h1>
                </div>
            
            <div className="flex flex-col h-[70vh] rounded-t-lg bg-slate-600  gap-4 justify-center items-center w-[100vw] lg:w-[50vw] border-black border-[2px] ">
            <input className=" placeholder:text-center placeholder:text-[2vhvh] border-[2px] h-[7vh] bg-slate-400  placeholder:text-slate-900 focus:border-[4px] rounded-lg  border-slate-700 text-slate-700" placeholder="NAME" type="text" onChange={function(e){setname(e.target.value)}}></input>

                <input className=" placeholder:text-center placeholder:text-[2vhvh] border-[2px] h-[7vh] bg-slate-400  placeholder:text-slate-900 focus:border-[4px] rounded-lg  border-slate-700 text-slate-700" placeholder="EMAIL" type="email" onChange={function(e){setemail(e.target.value)}}></input>
                <input className=" placeholder:text-center placeholder:text-[2vhvh] border-[2px] h-[7vh] bg-slate-400  placeholder:text-slate-900 focus:border-[4px] rounded-lg  border-slate-700 text-slate-700" placeholder="AGE" type="number" onChange={function(e){setage(e.target.value)}}></input>

                <input  className=" placeholder:text-center border-[2px] h-[7vh] rounded-lg bg-slate-400 focus:border-[4px] border-slate-800 placeholder:text-slate-900" placeholder="PASSWORD" type="password" onChange={function(e){setpassword(e.target.value)}}></input>
                <input  className=" placeholder:text-center border-[2px] placeholder:text-[2vh] h-[7vh] rounded-lg bg-slate-400 focus:border-[4px] border-slate-800 placeholder:text-slate-900 " placeholder="CONFIRM-PASSWORD" type="password" onChange={function(e){setcpassword(e.target.value)}}></input>
            <button className=" border-[2px] h-[5vh] rounded-lg text-slate-800 w-[20vw] border-black text-nowrap hover:bg-slate-400" onClick={handlesubmit} > SIGN IN</button>
            <h1>have an account already ? <Link to="/signin" className="font-bold">SIGN IN</Link></h1>
            </div>
            </div>


    // return <div className=" flex justify-center flex-col items-center h-screen gap-[10px]">
    //     <input className="w-[1000px] bg-slate-500 border-[2px]  border-black"  placeholder="name" type="text" onChange={function(e){setname(e.target.value)}}></input>
    //     <input className="w-[1000px] bg-slate-500  border-[2px]  border-black" placeholder="age" type="number" onChange={function(e){setage(e.target.value)}}></input>
    //     <input className="w-[1000px] bg-slate-500  border-[2px]  border-black" placeholder="email" type="email" onChange={function(e){setemail(e.target.value)}}></input>
    //     <input  className="w-[1000px] bg-slate-500  border-[2px]  border-black" placeholder="passoword" type="password" onChange={function(e){setpassword(e.target.value)}}></input>
    //     <button className="w-[1000px] bg-slate-500  border-[2px]  border-black" onClick={handlesubmit} > SIGN UP</button>
    // </div>
}