import React from 'react'
import {ListOfCategories} from './components/ListOfCategories/index'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCards } from './components/ListOfPhotoCards/index'
import { Logo } from './components/Logo'
import { ListOfPhotoCardsContainer } from './containers/ListOfPhotoCardsContainer'

const App = () => {
  return (
    <>
    <GlobalStyle />
    <Logo/>
    <ListOfCategories/>
    <ListOfPhotoCardsContainer/>
    </>
  )
}

export  {App}