import React from 'react'

function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
        <li className='each-list' >
            <input type="checkbox" checked={completed} className="uList"
                onChange={event => { toggleTodo(id, event.target.checked) }} />
            {title}
            {/* <button id='edit-task' onClick={()=>{handleEdit(id)}}>
                edit
            </button> */}
            <button className='del-task'onClick={()=>deleteTodo(id)}> Remove</button>
        </li>
    )
}

export default TodoItem