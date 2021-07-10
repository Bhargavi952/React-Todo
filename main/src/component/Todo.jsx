import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import styles from './Todo.module.css'

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
        <div className={styles.topCont}>
           <Card className={styles.todoCont} style={{width:"auto",height:"auto",backgroundImage:' linear-gradient(170deg,#793b5d 0%, #804b65 50%, #573d50 75%)'}}>
             <CardContent>
             <TodoInput inputData={todoData}/>
           { todo &&
               todo.map((item)=>{
               return( <TodoItem key={item.id} {...item} handleToggle={handleToggle} handleDelete={handleDelete}  />
               )
               })
           }
             </CardContent>
           </Card>
           {/* <TodoItem/> */}
        </div>
    )
}

export default Todo
