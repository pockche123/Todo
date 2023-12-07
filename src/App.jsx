import React, { useState, useEffect } from 'react';
import './App.css';
import { TodoProvider } from './contexts/TodoContexts';
import { Route, Routes } from 'react-router-dom';
import { Todo } from './pages';
import { TodoFilterProvider } from './contexts/TodoFilterContexts';

function App() {


  return (

    <>
      <TodoProvider>
        <TodoFilterProvider>
          <Routes>
            <Route path="/" element={<Todo />} />
          </Routes>
        </TodoFilterProvider>
      </TodoProvider>
    </>
  );
}

export default App;
