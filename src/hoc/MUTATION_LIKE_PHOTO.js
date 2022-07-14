import { gql } from "@apollo/client";

const MUTATION_LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;
export { MUTATION_LIKE_PHOTO };
