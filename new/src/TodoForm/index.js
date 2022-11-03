import React from "react";
import {TodoContext} from '../TodoContext'
import './TodoForm.css'

function TodoForm(){

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)

    const onChange =(event) =>{
     setNewTodoValue( event.target.value)
    }

    const onCancel =() =>{
        setOpenModal(false);

    }
    const onSubmit =(event) =>{
        event.preventDefault();
     addTodo(newTodoValue)
     setOpenModal(false);
    }

    return(
    <form onSubmit={onSubmit}>
        <label>Ingrese su Tarea</label>
        <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Escriba su Texto"
        />
        <div className="TodoForm-buttonContainer">
          <button type="button"
          className="TodoForm-button TodoForm-button--cancel"
           onClick={onCancel}>
            cancelar
          </button>

          <button 
           type="submit"
           className="TodoForm-button TodoForm-button--add"
         >
            añadir
          </button>
        </div>

        </form>
       ) }



export {TodoForm}