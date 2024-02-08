import {CompleteIcon} from "./CompleteIcon"
import {DeleteIcon} from "./DeleteIcon"
import "./TodoItem.css"
import React from "react"

function TodoItem(props) {
  const { text, completed, onComplete, onDelete } = props;
  
  return (
    <li className="TodoItem">
      <div className={`Icon-container Icon-container-check ${completed && "completed"}`}>
                <CompleteIcon
                    className={`Icon-svg check ${completed && "completed"}`}
                    onClick={onComplete}
                    completed={completed}
                />
            </div>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <div className="Icon-container Icon-container-delete">
        <DeleteIcon className="Icon-svg closer" onClick={onDelete} />
      </div>
     
    </li>
  );
}

    export { TodoItem }

   {/* <CompleteIcon completed={props.completed} onComplete={props.onComplete} />  */} 
      {/* <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      onClick={props.onComplete}
      >
        <CompleteIcon/>
      </span> */}
      {/* <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p> */}
      
      {/* <DeleteIcon onDelete={props.onDelete} /> */}
      {/* <span 
      className="Icon Icon-delete"
      onClick={props.onDelete}
      >
        <DeleteIcon />
      </span> */}  