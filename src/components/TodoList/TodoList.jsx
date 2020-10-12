import React from 'react'

function TodoList({ todos }) {
    return (
        <div>
            {todos.map((todo) => {
               return <h4>{todo}</h4>
            })}
        </div>
    )
}

export default TodoList
