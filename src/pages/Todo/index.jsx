import React from 'react'
import { TodoForm, TodoList } from '../../components'
import { useTodo } from '../../contexts/TodoContexts'
import { useEffect} from 'react'
import { useTodoFilter } from '../../contexts/TodoFilterContexts'


const Todo = () => {

    const {todos, setTodos, inputText, setInputText} = useTodo()

    const {filteredTodos, setFilteredTodos, setStatus, status} = useTodoFilter()
    // const [status, setStatus] = useState('all');

     useEffect(() => {
    filterHandler()
  }, [status, todos])


        function filterHandler() {
        if (status === 'completed') {
            setFilteredTodos(todos.filter(todo => todo.completed === true))
        } else if (status === 'uncompleted') {
            setFilteredTodos(todos.filter(todo => todo.completed === false))
        } else {
            setFilteredTodos(todos);
        }
    }
    
    return (
        <div>
            <header> Todo List</header>
            <TodoForm inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} setStatus={setStatus} />
            <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos} />


        </div>
    )
}

export default Todo