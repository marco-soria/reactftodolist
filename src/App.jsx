import React from 'react'
// import { useState } from 'react'
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton'


const defaultTodos = [
  { text: 'Cut onions', completed: true },
  { text: 'Take the introductory course to React', completed: false },
  { text: 'Cry with the crier', completed: false },
  { text: 'Daily code', completed: false},
  { text: 'House choresv3', completed: false},
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState('')

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  console.log(`The users wrote ${searchValue}`)

  return (
    <>
      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
    
      />

      <TodoList>
        { defaultTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            />
        ))

        }
      </TodoList>

      <CreateTodoButton />
    </>
  )
}



export default App
