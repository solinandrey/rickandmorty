import {request, gql} from 'graphql-request';
import { GET_ALL_CHARACTERS, GET_CHARACTER } from '../queries';
import { CharacterLite, CharacterFull } from '@types';

const API_URL = "https://rickandmortyapi.com/graphql";

export const getAllCharacters = async (): Promise<CharacterLite[]>  => {
  return request(API_URL, GET_ALL_CHARACTERS).then(data => data?.characters?.results || [] );
}

export const getCharacter = async (id: number): Promise<CharacterFull>  => {
  return request(API_URL, GET_CHARACTER, {id: id}).then(data => data?.character || {} );
}