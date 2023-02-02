import { request, gql } from "graphql-request";
import {
  GET_ALL_CHARACTERS,
  GET_ALL_LOCATIONS,
  GET_CHARACTER,
  GET_LOCATION_RESIDENTS,
} from "../queries";
import {
  GetAllCharactersResponse,
  CharacterFull,
  GetAllLocationsResponse,
  CharacterLite,
  GetLocationResidentsResponse,
} from "@types";

const API_URL = "https://rickandmortyapi.com/graphql";

export const getAllCharacters = async (
  page: number,
  searchBody?: string
): Promise<GetAllCharactersResponse> => {
  return request(API_URL, GET_ALL_CHARACTERS, {
    page: page,
    filter: searchBody,
  }).then((data) => ({
    results: data?.characters?.results || [],
    info: data?.characters?.info,
  }));
};

export const getCharacter = async (id: number): Promise<CharacterFull> => {
  return request(API_URL, GET_CHARACTER, { id: id }).then(
    (data) => data?.character || {}
  );
};

export const getLocations = async (
  page: number,
  searchBody?: string
): Promise<GetAllLocationsResponse> => {
  return request(API_URL, GET_ALL_LOCATIONS, {
    page: page,
    filter: searchBody,
  }).then((data) => ({
    results: data?.locations?.results || [],
    info: data?.locations?.info,
  }));
};

export const getLocationResidents = async (
  id: number
): Promise<GetLocationResidentsResponse> => {
  return request(API_URL, GET_LOCATION_RESIDENTS, {
    id: id,
  }).then((data) => ({
    name: data?.location.name,
    residents: data?.location?.residents || [],
  }));
};
