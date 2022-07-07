import React from 'react'
import {ListOfCategories} from '../components/ListOfCategories/index'
import { ListOfPhotoCardsContainer } from '../containers/ListOfPhotoCardsContainer'
import { useParams } from "react-router-dom";

const Home = () => {
  let params = useParams();
  return (
    <> 
    <ListOfCategories/>
    <ListOfPhotoCardsContainer categoryId={params.id}/>
    </>
  )
}

export  {Home}