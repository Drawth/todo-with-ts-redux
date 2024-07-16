import "../css/TodoCreate.css"
import React, { useState } from "react"
import {useDispatch} from "react-redux"
import { createTodo } from "../redux/todoSlice";
import { TodoType } from "../types/TodoInitialState";

function TodoCreate() {
  const dispatch= useDispatch();
  const [newTodo, setNewTodo]= useState<string>("");


  const handleCreateTodo=()=>{
          if (newTodo.trim().length==0) {
            alert("Todo giriniz");
            return;
          }

          const payload:TodoType={
            id:Math.floor(Math.random()*999),
            content: newTodo
          }
          dispatch(createTodo(payload))
          setNewTodo("")
  }



  return (
    <div className='todo-create'>
<input value={newTodo} className="todo-input" placeholder="Todo giriniz" type="text" onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setNewTodo(e.target.value)} />
<button className="todo-create-button" onClick={handleCreateTodo}> Oluştur </button>

    </div>
  )
}

export default TodoCreate