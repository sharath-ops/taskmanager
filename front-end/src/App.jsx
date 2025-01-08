import Todolist from "./components/todolist"
import { Route , Routes } from "react-router-dom"
import Signin from "./components/signin"
import Signup from "./components/signup"

export default function App(){
  return <div className="">
      <Routes>
        <Route path="/signin" element={<Signin></Signin>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/home" element={<Todolist></Todolist>}></Route>
      </Routes>
  </div>
}