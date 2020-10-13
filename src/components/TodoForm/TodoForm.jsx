import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import './TodoForm.css'

function TodoForm({ userInput, todos, setTodos, setUserInput }) {

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

    return (
        <div >
            <form className="form--container">
                <label className="form--label">Enter Your Todo!</label>
                <input className="input--text" type="text" placeholder="Todo..." value={userInput} onChange={handleChange}/>
                <input className="input--submit" type="submit" value="Submit" onClick={handleSubmit}/>
            </form>
        </div>
    )
}

export default TodoForm
