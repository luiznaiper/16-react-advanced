import { gql } from '@apollo/client'

const GET_PHOTO = gql`
    query getSinglePhoto($id: ID!) {
      photo(id: $id) {
        id
        categoryId
        src
        likes
        userId
        liked
      }
    }
  `
export {GET_PHOTO}