import React from 'react'
import Todo from '../Todo/Todo'
import './TodoList.css'

function TodoList({ todos, setTodos }) {
    return (
        <div className="todolist--container">
            <ul>
                {todos.map((todo) => (
                    <Todo 
                    todos={todos}
                    setTodos={setTodos}
                    desc={todo.desc}
                    id={todo.id}
                    completed={todo.completed}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList
