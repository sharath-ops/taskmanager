import Todolist from "./components/todolist"
import { Route , Routes } from "react-router-dom"
import Signin from "./components/signin"
import Signup from "./components/signup"
import Home from "./components/home"
import Input from "./components/input"
export default function App(){
  return <div className="">
      <Routes>
        
        <Route path="/addtodo" element={<Input></Input>}></Route>
        <Route path="/signin" element={<Signin></Signin>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/home" element={<Todolist></Todolist>}></Route>
      </Routes>
  </div>
}