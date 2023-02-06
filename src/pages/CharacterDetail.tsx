import { useParams, Link } from "react-router-dom";
import { characters, uiState } from "@store";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";

import CharacterMain from "@components/CharacterMain";
import { Container, CircularProgress } from "@mui/material";

const CharacterDetail = observer(() => {
  const { id } = useParams();
  useEffect(() => {
    if (id) characters.getDetailedCharacter(Number(id));
  }, [id]);

  useEffect(() => {
    uiState.setPage("characters");
    return () => {
      if (id !== characters.detailedCharacter?.id) {
      }
    };
  }, []);

  if (
    characters.detailedCharacter &&
    characters.detailedCharacter?.id.toString() === id
  ) {
    return (
      <Container sx={{ padding: "2rem 10rem", justifyContent: "center" }}>
        <CharacterMain info={characters.detailedCharacter} />
      </Container>
    );
  } else {
    return (
      <CircularProgress
        sx={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    );
  }
});

export default CharacterDetail;
