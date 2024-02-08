import React from 'react'
import { TodoIcon } from './TodoIcon'

function CompleteIcon() {
    return (
        <TodoIcon>
            type="check"
            color="red"
        </TodoIcon>
    )
}

export { CompleteIcon }