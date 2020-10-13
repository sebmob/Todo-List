import React from 'react'
import './Todo.css'

function Todo({ todos, setTodos, desc, id }) {

    const deleteTodo = () => {
        setTodos(todos.filter((e) => e.id !== id)) 
    }

    const completeTodo = () => {
        setTodos(todos.map((item) => {
            if (item.id === id) {
                return {
                    ...item, completed: !item.completed
                }
            }
        })) 
    }

    return (
        <div className="todo--container">
            <p>{desc}</p>
            <button onClick={completeTodo}>Done</button>
            <button onClick={deleteTodo}>Delete</button>
        </div>
    )
}

export default Todo
