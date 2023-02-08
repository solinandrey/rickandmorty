import { useEffect, useState, useRef } from "react";
import { Grid, Box } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import CharacterCard from "@components/CharacterCard/CharacterCard";
import CharacterPopup from "@components/CharacterPopup";
import { CharacterLite } from "@types";
import { listStyles } from "./CharacterListStyles";

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
    const params = new URLSearchParams(window.location.search)
    const character = params.get('character');
    if (character) {
      setPopupOpened(true);
      setActiveCharacter(Number(query.get("character")));
    }
  }, [query]);

  const closePopup = () => {
    setPopupOpened(false);
    setActiveCharacter(null);

    setQuery((query) => {
      query.delete("character");
      query.set("page", "1");
      return query;
    });
  };

  const openPopup = (id: number) => {
    setPopupOpened(true);
    setActiveCharacter(id);

    setQuery((query) => {
      query.set("page", String(page) || "1");
      query.set("character", id.toString());
      return query;
    });
  };

  return (
    <Box sx={listStyles}>
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
          <Grid
            container
            spacing={2}
            component="div"
            ref={cards}
            className="cards"
          >
            {charactersList?.map((val: CharacterLite) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={val.id}>
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
