import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <div className="tasks">
            <ul id='all-task'>
                {/* js shortcircuiting */}
                {todos.length === 0 && "No tasks"}
                {/* when returning an in react we need a unique identifier. the key needs to go on the outermost returned element. using arry index is not recomened as when element is deleted it will mess up everything */}
                {todos.map(todo => {
                    return (
                        <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} 
                        deleteTodo={deleteTodo}/>
                    )

                })}

            </ul>
        </div>
    )
}

export default TodoList