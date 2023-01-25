import { gql } from "@apollo/client";

export const GET_ALL_CHARACTERS= gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export const GET_CHARACTER= gql`
  query GetPerson($id: ID!){
    character(id: $id) {
        id
        name
        image
    }
  }
`;