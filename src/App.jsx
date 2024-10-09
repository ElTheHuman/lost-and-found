import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './Containers'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' exact element={ <Home /> } />
      </Routes>
    </>
  )
}

export default App
