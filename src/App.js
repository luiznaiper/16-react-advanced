import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import {NavBar} from './components/NavBar/'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const UserLogged = ({children}) =>{
  return children({isAuth: false})
}


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
           <UserLogged>
            {
              ({isAuth}) => 
              isAuth
              ?
              <Routes>
              <Route path='/favs' element={<Favs />} />
              <Route path='/user' element={<User />} />
              </Routes>
              :
              <Routes>
                <Route path='/favs' element={<NotRegisteredUser />} />
                 <Route path='/user' element={<NotRegisteredUser />} />
              </Routes>
            }            
           </UserLogged>
           <NavBar/>
      </BrowserRouter>
    </>
  )
}

export  {App}