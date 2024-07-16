import React from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { TodoType } from '../types/TodoInitialState'

function TodoList() {
  const {todos}= useSelector((state:RootState)=> state.todo)
  return (
    <div>
      {todos && todos.map((todo:TodoType)=>{
       return <Todo key={todo.id} todoProps={todo}/>
      })}
    </div>
  )
}

export default TodoList