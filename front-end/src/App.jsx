import Todolist from "./components/todolist"
import { Route , Routes } from "react-router-dom"
import Signin from "./components/signin"

export default function App(){
  return <div className="">
      <Routes>
        <Route path="/" element={<Signin></Signin>}></Route>
        <Route path="/home" element={<Todolist></Todolist>}></Route>
      </Routes>
  </div>
}