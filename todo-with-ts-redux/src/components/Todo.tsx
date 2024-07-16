import React, { useState } from 'react';
import "../css/Todo.css"
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { TodoType } from '../types/TodoInitialState';
import { useDispatch } from 'react-redux';
import { deleteTodoById, updateTodoById } from '../redux/todoSlice';

interface TodoProps{
  todoProps: TodoType
}

function Todo({todoProps}:TodoProps) {
const { id, content}= todoProps

const [editable, setEdidtable]= useState<boolean>(false);
const [editedTodo , setEditedTodo]= useState<string>(content);


const dispatch= useDispatch();
const handleDeleteId=()=>{
 dispatch(deleteTodoById(id));
}
const handleUptadeTodo=()=>{
 const payload:TodoType={
  id:id,
  content: editedTodo
 }
 dispatch(updateTodoById(payload))
 setEdidtable(false);

}

  return (
    <div className='flex-row'>
         {
          editable ? <input style={{width:"400px", borderBottom:"1px solid ligthblack", outline:"none"}} type='text' value={editedTodo} 
          onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setEditedTodo(e.target.value)}/> : <div>{content}</div>
         }
        <div>
            <IoIosRemoveCircleOutline className='icons' onClick={handleDeleteId} />
            {
              editable ? <FaCheck className='icons' onClick={handleUptadeTodo} /> : <CiEdit className='icons' onClick={()=> setEdidtable(true)}/>
            }    
           
        </div>
    </div>
  )
}

export default Todo