import React from "react";
import { gql } from "@apollo/client";
import { Mutation } from "@apollo/client/react/components";

const LOGIN_MUTATION = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;
const LoginMutation = ({ children }) => {
  return <Mutation mutation={LOGIN_MUTATION}>{children}</Mutation>;
};

export { LoginMutation };
