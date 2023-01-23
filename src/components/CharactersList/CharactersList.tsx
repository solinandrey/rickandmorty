import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Grid } from "@mui/material";

import CharacterCard from "../CharacterCard/CharacterCard";
import { Character } from "@types";

const GET_ALL_PERSONS = gql`
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

export default function CharactersList() {
  const { data, loading, error } = useQuery(GET_ALL_PERSONS);

  console.log({ data, loading, error });

  if (loading) return <div>loading...</div>;

  return (
    <div>
      <Grid container spacing={2}>
        {data?.characters?.results?.map((val: Character) => <CharacterCard character={val} />)}
      </Grid>
    </div>
  );
}
