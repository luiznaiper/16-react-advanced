import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import {NavBar} from './components/NavBar/'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {
  const urlParams = new URLSearchParams(location.search);
  const detailId = urlParams.get('detail');
  return (
    <>
    <GlobalStyle />    
      <BrowserRouter>
          <Logo/>
          <Routes>
             <Route path='/' element={<Home />} />
             <Route path='/detail/:detailId' element={<Detail />} />
             <Route path='/pet/:id' element={<Home />} />
           </Routes>
           <NavBar/>
      </BrowserRouter>
    </>
  )
}

export  {App}