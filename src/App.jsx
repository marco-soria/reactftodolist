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
  { text: 'House chores', completed: false},
]

function App() {
  return (
    <>
      <TodoCounter completed={16} total={25}/>
      <TodoSearch/>

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
