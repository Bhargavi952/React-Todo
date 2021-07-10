import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'

const Todo = () => {
    const [todo , setTodo] = useState([])
  const  todoData = (item)=>{
      setTodo([...todo,item])
  } 
  console.log(todo)
  const handleDelete = (id) => {
    const updatedTodos = todo.filter((item) => item.id !== id);
    setTodo(updatedTodos);
  };
  const handleToggle = (id) => {
    const updatedTodo = todo.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setTodo(updatedTodo);
  };
    return (
        <div>
            <TodoInput inputData={todoData}/>
           { todo &&
               todo.map((item)=>{
               return( <TodoItem key={item.id} {...item} handleToggle={handleToggle} handleDelete={handleDelete}  />
               )
               })
           }
           {/* <TodoItem/> */}
        </div>
    )
}

export default Todo
