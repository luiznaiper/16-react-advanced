import {  useQuery } from '@apollo/client'
import { GET_PHOTO } from '../hoc/GET_PHOTO'
 const useGetPhotoWithQuery = id => {
  
  const { loading, error, data } = useQuery(GET_PHOTO, {
    variables: { id }
  })

  return { loading, error, data }
}

export {useGetPhotoWithQuery}