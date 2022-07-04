import React from 'react'
import {ListOfCategories} from './components/ListOfCategories/index'
import { GlobalStyle } from './GlobalStyles'
import { ListOfPhotoCards } from './components/ListOfPhotoCards/index'

const App = () => {
  return (
    <>
    <GlobalStyle />
    <ListOfCategories/>
    <ListOfPhotoCards/>
    </>
  )
}

export  {App}