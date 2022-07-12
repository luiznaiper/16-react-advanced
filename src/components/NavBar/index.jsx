import React from 'react'
import {Nav, Link} from './styles'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'
import { useLocation } from 'react-router-dom';

const NavBar = () => {
const { pathname } = useLocation();
  return (
    <Nav>
        <Link to="/" className={pathname==='/'?'selected':''}><MdHome/></Link>
        <Link to="/favs" className={pathname==='/favs'?'selected':''}><MdFavoriteBorder/></Link>
        <Link to="/user" className={pathname==='/user'?'selected':''}><MdPersonOutline/></Link>
    </Nav>
  )
}

export  {NavBar}