import React from 'react'
// import { useState } from 'react'
import { AppUI } from './AppUI'
import { useLocalStorage } from './useLocalStorage'


/* const defaultTodos = [
  { text: 'Cut onions', completed: true },
  { text: 'Take the introductory course to React', completed: false },
  { text: 'Cry with the crier', completed: false },
  { text: 'Daily code', completed: false},
  { text: 'House choresv3', completed: false},
] */

//localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
//localStorage.removeItem('TODOS_V1')


function App() {
  

  //states//
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
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

  

  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => todo.text === text)
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos)
  }

  /* const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => todo.text === text)
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos) ALTERNATIVA CON SPLICE
  } */

  const deleteTodo = (text) => {
    const newTodos = todos.filter(todo => todo.text !== text)
    saveTodos(newTodos)
  }

  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  )
}



export default App
