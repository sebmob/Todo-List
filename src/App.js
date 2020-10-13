import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList';

function App() {

  const [ userInput, setUserInput ] = useState('');
  const [ todos, setTodos ] = useState([]);



 

  return (
    <div className="App">
      <header className="header">
        <h1>Todo Or Not Todo, That Is The Question...</h1>
      </header>
      <TodoForm 
      userInput={userInput} 
      setUserInput={setUserInput} 
      todos={todos} 
      setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
library.add(fab, faCheckSquare, faCoffee)