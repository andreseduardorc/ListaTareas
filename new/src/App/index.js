import React from "react";
import { AppUi } from "./AppUi";
import {TodoProvider} from '../TodoContext'

// import  ReactDOM  from "react-dom";
// import App from './App'
// import './App.css';

// const defaultItem=[
//   {text:'cortar', completed: false},
//   {text:'lavar', completed: false},
//   {text:'picar', completed: false},
//   {text:'revolver', completed: false},

// ];





function App() {

  
 return (
    <TodoProvider>
        
    <AppUi />

    </TodoProvider>
    
);
}


export default App;
