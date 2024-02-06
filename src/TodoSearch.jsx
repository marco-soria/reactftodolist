import React from 'react'
import './TodoSearch.css'

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState('')

  console.log(`THe users wrote ${searchValue}`)

  return (
    <input 
    placeholder="Cut onions"
    className='TodoSearch'
    value={searchValue}
    onChange= {
      (event) => {
        setSearchValue(event.target.value)
      }	
    }
    />
  )
}
  
  export { TodoSearch }