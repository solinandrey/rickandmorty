import React from "react";
import { Grid } from "@mui/material";

import CharacterCard from "../CharacterCard/CharacterCard";
import styles from './CharactersList.module.scss';
import { CharacterLite } from "@types";
import { Link } from "react-router-dom";

interface IProps {
  characters: CharacterLite[]
}

export default function CharactersList({characters}: IProps) {

  return (
    <div>
      <Grid container spacing={2}>
        {characters?.map((val: CharacterLite) => <CharacterCard character={val} key={val.id} />)}
      </Grid>
    </div>
  );
}
