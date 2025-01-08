export default function Input(){

    return <div className="flex justify-center items-center w-screen h-screen bg-slate-500  ">
                <div className="flex flex-col justify-center  items-center w-[99vw] h-[90%] gap-[10px]  bg-slate-700 lg:w-[50vw] ">
                <h1 className="font-extrabold text-4xl text-slate-900">ADD TASK</h1>
                <input type="text"  className="w-[90%] lg:w-[70%] bg-slate-400 font-bold  placeholder:text-slate-800 h-[8vh] text-center  text-2xl  border-[4px] border-slate-700 focus:border-slate-800 rounded-xl  placeholder:text-3xl placeholder:text-center" placeholder="Title"/>
                <textarea type="text" className="w-[90%] lg:w-[70%] bg-slate-400 h-[10vh] placeholder:text-2xl font-semibold text-2xl p-0 border-slate-700 placeholder:text-slate-800 focus:border-slate-800 border-[4px] placeholder:text-center" placeholder="Description"></textarea>
                <button className="border-slate-900  border-[5px] w-[50%] rounded-lg h-[5vh] font-semibold hover:bg-slate-500">Add to Tasks</button>
                </div>
          </div>
}