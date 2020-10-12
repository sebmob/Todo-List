import React from 'react'

function TodoForm({ handleChange, handleSubmit }) {
    return (
        <div>
            <form>
                <label>Enter Your Todo!</label>
                <input type="text" onChange={handleChange}/>
                <input type="submit" value="Submit" onClick={handleSubmit}/>
            </form>
        </div>
    )
}

export default TodoForm
