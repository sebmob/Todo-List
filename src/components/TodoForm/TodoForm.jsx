import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './TodoForm.css'

function TodoForm({ userInput, todos, setTodos, setUserInput }) {

    const maxInputLength = 25;

    const handleChange = (e) => setUserInput(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, {
          id: uuidv4(),
          desc: userInput,
          completed: false
        }]);
        setUserInput('')
      }

      useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
          return () => {
              
          }
      }, [todos])

    return (
        <div className="div--container">
            <form className="form--container">
                <input className="input--text" type="text" maxLength="25" placeholder="Todo..." value={userInput} onChange={handleChange}/>
                <input className="input--submit" type="submit" value="Submit" onClick={handleSubmit}/>
                {userInput.length > 0 ? <p className="p--max--length">Characters left: {maxInputLength - userInput.length}</p> : <p className="p--max--length"></p>}
            </form>
        </div>
    )
}

export default TodoForm
