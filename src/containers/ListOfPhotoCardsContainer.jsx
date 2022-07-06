import React from 'react'
import { ANIMALS_QUERY } from '../hoc/ANIMALS_QUERY'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { useQuery } from '@apollo/client'

 const ListOfPhotoCardsContainer = ({ categoryId }) => {
  const { loading, error, data } = useQuery(ANIMALS_QUERY, {
    variables: { categoryId }
  })

  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return <h2>Loading...</h2>
  }

  return <ListOfPhotoCards data={data} />
}

export {ListOfPhotoCardsContainer}