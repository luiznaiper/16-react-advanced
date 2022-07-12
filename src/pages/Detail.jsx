import React from 'react'
import { useParams } from 'react-router-dom'
import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery'

const Detail = () => {
  const params = useParams();
  return (
    <PhotoCardWithQuery id={params.detailId}/>
  )
}

export {Detail}