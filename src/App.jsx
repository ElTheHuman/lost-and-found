import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Bid, Home } from './Containers'
import LostNews from './Containers/LostNews/LostNews'
import { SmallDeviceWarning } from './Components'

function App() {

  const [browserWidth, setBrowserWidth] = useState(1000);

  const resizeWidth = () => {
    setBrowserWidth(window.innerWidth);
  }
  
  useEffect(() => {
    
    resizeWidth();
    window.addEventListener('resize', resizeWidth);

    return () => {
      window.removeEventListener('resize', resizeWidth);
    }

  }, []);

  return (
    <>
      { browserWidth <= 992 ? <SmallDeviceWarning /> :
        <Routes>
          <Route path='/' exact element={ <Home /> } />
          <Route path='/lost-news' element={ <LostNews /> } />
          <Route path='/bid' element={ <Bid /> } />
        </Routes>
      }
    </>
  )
}

export default App
