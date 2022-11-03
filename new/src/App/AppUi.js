import React from "react";
import {TodoCounter} from '../TodoCounter'
import { TodoContext } from "../TodoContext";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import {TodoItem} from '../TodoItem';
import {Modal} from '../Modal'
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoForm } from "../TodoForm";



function AppUi (){

   const {error, 
    loading,
    searchTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    } = React.useContext(TodoContext)

    return(
        <React.Fragment>
    <TodoCounter/>
    <TodoSearch />

  
   
      <TodoList>
      
      {error && <p>hubo un error...</p>}
      {loading && <p>cargando, espera...</p>}
      {(!loading && !searchTodos.length)&&<p>crea tu primer todo</p>}
 
 
       {searchTodos.map(todo => (
         <TodoItem
           key={todo.text}
           text={todo.text}
           completed={todo.completed}
           onComplete = {() => completeTodo(todo.text)}
           onDelete = {() => deleteTodo(todo.text)}
         />
       ))}
     </TodoList>
    
  {openModal &&(
       <Modal>

       <TodoForm/>
 
      </Modal>
  )}

    <CreateTodoButton 
    
    setOpenModal={setOpenModal}
    />
  </React.Fragment>
    )
}

export {AppUi}