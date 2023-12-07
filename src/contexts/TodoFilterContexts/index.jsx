import React, { createContext } from 'react'
import { useContext, useState } from 'react'

const TodoFilterContext = createContext()

export const TodoFilterProvider = ({ children }) => {

    const [filteredTodos, setFilteredTodos] = useState([]);
    const [status, setStatus] = useState('all')



    return (
        <TodoFilterContext.Provider value={{ filteredTodos, setFilteredTodos, setStatus,status }}>
            {children}
        </TodoFilterContext.Provider>
    )


}

export const useTodoFilter = () => useContext(TodoFilterContext)