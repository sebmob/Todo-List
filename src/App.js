import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList';

function App() {

  const [userInput, setUserInput ] = useState('');
  const [ todos, setTodos ] = useState([]);

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.value = '';
    setTodos(userInput);


  }

  return (
    <div className="App">
      <TodoForm handleChange={handleChange} handleSubmit={handleSubmit} />
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
