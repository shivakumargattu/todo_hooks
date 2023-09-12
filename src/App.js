import React,{useState} from "react";
import "./App.css"
function App(){
  const [task,setTask]=useState("");
  const [todo,setTodo]=useState([]);

  const changeHandler=(e)=>{
     setTask(e.target.value)
     console.log(task)
  }

  const AddTodo=()=>{
    if(task!==""){
      setTodo([...todo,task])
    setTask("")
    }else{
      alert("Please Enter atleat one Latter")
    }
    
  }
  
  const removeTodo=(index)=>{
    const removeTask=[...todo]
    removeTask.splice(index,1)
    setTodo([...removeTask])
 }


  const searchItem=todo.filter((each)=>each.includes(task))
  console.log(searchItem)
 
  return(
    <>
    <center>
      <div>
         <h1 className="pt-3 pb-2">Todos Application</h1>
           <div className="bg-continer d-flex">
              <input type="text" placeholder="Enter Todo Name" value={task} onChange={changeHandler} className="form-control w-50 p-2 m-3"/>
               <button className="btn btn-primary" onClick={AddTodo}>Add</button>
         </div>
          <ul>{todo.length>0?searchItem.map((item,index)=>
            <div className="bg-warning m-2" key={index}>
                  <p className="pt-3">{item}</p>
                  <button className="btn" onClick={removeTodo}>❌</button>
              </div>
          ):<h1>No Data found</h1>}
             
          </ul>
         
      </div>
      </center>
    </>
  )
}
export default App