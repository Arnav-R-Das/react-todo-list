import { useEffect, useState } from "react"
import { NewTodoForm } from "./NewTodoForm"
import "./styles.css"
import { TodoList } from "./TodoList"

export default function App() {

  // HOOKS

    // Hooks can't be put inside conditions (ifs or returns)

    const [todos, setTodos] = useState(() => {
      const localValue = localStorage.getItem("ITEMS")
      if (localValue == null) return []

      return JSON.parse(localValue)
    })

    // Whenever the value of todos changes, the function inside useEffect is executed
    useEffect(() => {
      localStorage.setItem("ITEMS", JSON.stringify(todos))
    },
    [todos])

  // FUNCTIONS

    function addTodo(title) {
      setTodos(currentTodos => {
        return [
          ...currentTodos,
          { id: crypto.randomUUID(), title, completed: false }
        ]
      })
    }

    function toggleTodo(id, completed) {
      setTodos(currentTodos => {
        return currentTodos.map(todo => {
          if (todo.id === id) {
            return { ...todo, completed }
          }
          return todo
        })
      })
    }

    function deleteTodo(id) {
      setTodos(currentTodos => {
        return currentTodos.filter( todo => todo.id != id )
      })
    }

  return (
    <>

      < NewTodoForm addTodo={addTodo} /> 

      <h1 className="header"> Todo List </h1>

      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />

    </>
  )
}