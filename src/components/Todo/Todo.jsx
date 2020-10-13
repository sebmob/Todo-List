import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import './Todo.css'

function Todo({ todos, setTodos, desc, id, completed }) {

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
            return item;
        })) 
    }

    return (
        <div className={completed ? "todo--container--completed" : "todo--container"}>
            <li className="todo--desc">{desc}</li>
            <button className="button--checkmark">
                <FontAwesomeIcon size='1x' className="icon--checkmark" icon={faCheck} />
            </button>
            <button className="button--trashcan">
                <FontAwesomeIcon size='1x' className="icon--trashcan" icon={faTrash} />
            </button>                
        </div>
    )
}

export default Todo
