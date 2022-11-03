import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css'

function TodoSearch() {

  const {searchValue, setSearchValue} = React.useContext(TodoContext)
  const onSearchValueChange=(event)=>{
    console.log(event.target.value)
    setSearchValue(event.target.value)
    console.log(searchValue)
  }
    return [
      <input 
      className="TodoSearch" placeholder="Buscar" 
      value={searchValue}
      onChange={onSearchValueChange}
      
      />,
      
    ];
  }
  
  export { TodoSearch };