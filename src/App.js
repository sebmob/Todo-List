import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm/TodoForm'

function App() {

  const [userInput, setUserInput ] = useState('');
  const [ todo, setTodo ] = useState('');

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    setTodo(userInput);


  }

  return (
    <div className="App">
      <TodoForm />
    </div>
  );
}

export default App;
