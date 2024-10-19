import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './Containers'
import LostNews from './Containers/LostNews/LostNews'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' exact element={ <Home /> } />
        <Route path='/lost-news' element={ <LostNews /> } />
      </Routes>
    </>
  )
}

export default App
