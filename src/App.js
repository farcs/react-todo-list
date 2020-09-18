import React from 'react'
// import uuid from 'uuid'
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
//  let's see the vs-code github integration

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <h1>Hello from App</h1>
        <TodoInput />
        <TodoList />
      </div>
    </div>
  )
}

export default App
