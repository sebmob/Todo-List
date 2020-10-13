import React from 'react'
import Todo from '../Todo/Todo'
import './TodoList.css'

function TodoList({ todos, setTodos }) {
    return (
        <div className="todolist--container">
            {todos.map((todo) => {
              return <Todo todos={todos} setTodos={setTodos} desc={todo.desc} id={todo.id} />
            })}
        </div>
    )
}

export default TodoList
