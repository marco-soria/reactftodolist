import React from 'react'
import { FaXmark } from "react-icons/fa6";

const DeleteIcon = (props) => {
    const {className, onClick} = props
  return (
    <FaXmark
        className={className}
        onClick={onClick}
    />
  )
}

export {DeleteIcon}