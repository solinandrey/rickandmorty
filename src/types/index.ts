import { ReactNode } from "react";

export interface CharacterLite {
  name: string;
  image: string;
  id: number;
  species?: string;
  status?: string;
}

export interface PaginationInfo {
  count: number;
  pages: number;
  prev: number;
  next: number;
}

export interface GetAllCharactersResponse {
  info: PaginationInfo;
  results: CharacterLite[];
}

export interface GetAllLocationsResponse {
  info: PaginationInfo;
  results: LocationInfo[];
}

export interface GetLocationResidentsResponse {
  name: string
  residents: CharacterLite[]
}

export interface CharacterFull {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  origin?: LocationInfo;
  episode?: [Episode];
  location: LocationInfo;
}

export interface Episode {
  id: number;
  name: string;
  airDate: string;
  episode: string;
  characters: CharacterFull[];
}

export interface LocationInfo {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents?: CharacterFull[];
}

export type SitePage = "home" | "characters" | "locations";

export type ITableCell = string | number | ReactNode;

export type ITableRow = ITableCell[];

export interface TableList {
  header: string[];
  body: ITableRow[];
}
