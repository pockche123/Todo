import React, { createContext } from 'react'
import { useContext, useState} from 'react'

const TodoContext = createContext()


export const TodoProvider = ({ children }) => {

    
    const[todos, setTodos] = useState([]) 

    const [inputText, setInputText] = useState('');
    

    return (
        <TodoContext.Provider value={{ todos, setTodos, inputText, setInputText }}>
            {children}
        </TodoContext.Provider>
    )
}


export const useTodo = () => useContext(TodoContext)