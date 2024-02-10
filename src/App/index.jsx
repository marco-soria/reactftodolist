import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';


function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App

  //states//
  /* const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('') */
  //derived states //
  /* const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    }

  ) */

  /* const searchedTodos = todos.filter(({ text: todoText }) => 
  todoText.toLowerCase().includes(searchValue.toLowerCase())
);  ALTERNATIVA*/

  

  /* const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => todo.text === text)
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos)
  }
 */
  /* const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => todo.text === text)
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos) ALTERNATIVA CON SPLICE
  } */

  /* const deleteTodo = (text) => {
    const newTodos = todos.filter(todo => todo.text !== text)
    saveTodos(newTodos)
  } */

  /* return (
    <AppUI
    loading={loading}
    error={error}
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    />
  ) */

