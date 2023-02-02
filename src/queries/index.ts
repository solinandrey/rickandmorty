import { gql } from "@apollo/client";

export const GET_ALL_CHARACTERS = gql`
  query GetAllCharacters($page: Int!, $filter: String) {
    characters(page: $page, filter: { name: $filter }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
        species
        status
      }
    }
  }
`;

export const GET_CHARACTER = gql`
  query GetPerson($id: ID!) {
    character(id: $id) {
      id
      name
      image
      gender
      species
      status
      type
      location {
        id
        name
      }
      origin {
        id
        name
        dimension
      }
      episode {
        id
        name
        episode
      }
    }
  }
`;

export const GET_ALL_LOCATIONS = gql`
  query GetAllLocations($page: Int!, $filter: String) {
    locations(page: $page, filter: { name: $filter }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        dimension
        type
      }
    }
  }
`;

export const GET_LOCATION_RESIDENTS = gql`
  query GetLocationResidents($id: ID!) {
    location(id: $id) {
      name
      residents {
        id
        name
        image
        species
        status
      }
    }
  }
`;
