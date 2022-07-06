import React from 'react'
import {ListOfCategories} from './components/ListOfCategories/index'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { ListOfPhotoCardsContainer } from './containers/ListOfPhotoCardsContainer'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)
  return (
    <>
    <GlobalStyle />
    <Logo/>
    {
      detailId
      ? <PhotoCardWithQuery id={detailId}/>
      :
      <> 
      <ListOfCategories/>
      <ListOfPhotoCardsContainer/>
      </>
    }   
    </>
  )
}

export  {App}