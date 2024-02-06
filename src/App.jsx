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
  //states//
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState('')
  //derived states //
  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    }

  )

  /* const searchedTodos = todos.filter(({ text: todoText }) => 
  todoText.toLowerCase().includes(searchValue.toLowerCase())
);  ALTERNATIVA*/

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
        { searchedTodos.map(todo => (
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
