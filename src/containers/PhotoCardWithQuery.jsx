import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { useGetPhotoWithQuery } from '../hooks/useGetPhotoWithQuery'
import {LoadingPhotoCardWithQuery} from '../components/LoadingPhotoCardWithQuery/index'

const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useGetPhotoWithQuery(id)

  if (loading) return <LoadingPhotoCardWithQuery>Loading</LoadingPhotoCardWithQuery>
  if (error) return <div>error</div>

  return (
    <>
      <a href='/'>BACK</a>
      <PhotoCard {...data.photo} />
    </>
  )
}

export {PhotoCardWithQuery}