import React, { useEffect, useState, useRef } from "react";
import { Grid, TextField, Box } from "@mui/material";
import { useSearchParams } from "react-router-dom";

import CharacterCard from "../CharacterCard/CharacterCard";
import { CharacterLite } from "@types";
import CharacterPopup from "@components/CharacterPopup";
import { observer } from "mobx-react-lite";
import { characters } from "@store";
import {
  CSSTransition,
  SwitchTransition,
  TransitionGroup,
} from "react-transition-group";

interface IProps {
  charactersList: CharacterLite[];
  page: number | string;
}

const CharactersList = observer(({ charactersList, page }: IProps) => {
  const [popupOpened, setPopupOpened] = useState(false);
  const [activeCharacter, setActiveCharacter] = useState<number | null>(null);
  const [query, setQuery] = useSearchParams();
  const cards = useRef(null);

  useEffect(() => {
    if (query.get("character")) {
      setPopupOpened(true);
      setActiveCharacter(Number(query.get("character")));
    }
  }, [query]);

  const closePopup = () => {
    setPopupOpened(false);
    setActiveCharacter(null);
    setQuery({ page: String(page) || "1" });
  };

  const openPopup = (id: number) => {
    setPopupOpened(true);
    setActiveCharacter(id);
    setQuery({ page: String(page) || "1", character: id.toString() });
  };

  return (
    <Box sx={{ width: "100%" }}>
      {activeCharacter ? (
        <CharacterPopup
          id={activeCharacter}
          open={popupOpened}
          handleClose={closePopup}
        />
      ) : null}
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={page}
          nodeRef={cards}
          timeout={200}
          classNames="fade"
        >
          <Grid container spacing={2} component="div" ref={cards} className="cards">
            {charactersList?.map((val: CharacterLite) => (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CharacterCard
                  character={val}
                  key={val.id}
                  onCharacterClick={() => openPopup(val.id)}
                />
              </Grid>
            ))}
          </Grid>
        </CSSTransition>
      </SwitchTransition>
    </Box>
  );
});

export default CharactersList;