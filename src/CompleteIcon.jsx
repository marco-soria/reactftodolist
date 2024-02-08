import React from 'react'
import { FaCheck } from "react-icons/fa6";


const CompleteIcon = (props) => {
    const {className, onClick} = props
  return (
    <FaCheck
        className={className}
        onClick={onClick}
    />
  )
}

export {CompleteIcon}