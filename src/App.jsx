import React, { useEffect, useState } from 'react'
import './App.css'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState(()=>{
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })


  useEffect(()=>{
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  },[todos])

  const addTodo = (title) => {
    // use a current value 
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false
        },
      ]
    })
  }
  // toggle checkbox. this functions map through setTodos and when it finds a todo.id matching with the parameter id the completed prop is changed. if no matching is found return todo with no change at all
  const toggleTodo = (id, completed) => {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) return { ...todo, completed }
        return todo
      })
    })
  }

  // The callback function then returns a new array of todos by filtering out the todo item with the specified id using the filter() method. This creates a new array of todos that excludes the deleted todo.
  const deleteTodo = (id) => {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  console.log(todos);
  return (
    <div className="todo-box">

      <TodoForm addNewTask={addTodo} />
      {/* addNewTask is props */}

      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default App
