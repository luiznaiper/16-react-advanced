import React from 'react'
import { PhotoCard } from '../PhotoCard'

const ListOfPhotoCards= ({ data }) => {
  return (
    <ul>
      {data.photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}

export {ListOfPhotoCards}
