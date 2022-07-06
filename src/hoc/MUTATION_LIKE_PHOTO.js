import { gql } from '@apollo/client'

const MUTATION_LIKE_PHOTO = gql`
mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`
export {MUTATION_LIKE_PHOTO}