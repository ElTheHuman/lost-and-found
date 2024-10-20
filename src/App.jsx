import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Bid, Home } from './Containers'
import LostNews from './Containers/LostNews/LostNews'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' exact element={ <Home /> } />
        <Route path='/lost-news' element={ <LostNews /> } />
        <Route path='/bid' element={ <Bid /> } />
      </Routes>
    </>
  )
}

export default App
