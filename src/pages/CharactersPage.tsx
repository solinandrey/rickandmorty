import CharactersList from "@components/CharactersList";
import { characters, uiState } from "@store";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import {
  Container,
  Pagination,
  Box,
  Typography,
  TextField,
} from "@mui/material";
import { useParams, useSearchParams } from "react-router-dom";

const CharactersPage = observer(() => {
  const [query, setQuery] = useSearchParams();
  const [searchTimeout, setSearchTimeout] = useState<number | null>(null);
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    characters.getCharacters(Number(query.get("page")) || 1);
    uiState.setPage("characters");
    setPage(Number(query.get("page")));
    if (!query.get("page")) {
      setQuery({ page: "1" });
      setPage(1);
    }
  }, []);

  const onPageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    characters.getCharacters(value);
    const params = { page: String(value) };
    setQuery(params);
    setPage(value);
  };

  const searchByName = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    setSearchTimeout(() => {
      return window.setTimeout(() => {
        characters.getCharacters(1, event.target.value);
        const params = { page: '1' };
        setQuery(params);
        setPage(1);
      }, 400);
    });
  };

  return (
    <Container
      sx={{
        padding: "2rem 10rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        component="h1"
        sx={{
          fontFamily: "Francois One",
          fontSize: "8rem",
          textAlign: "center",
          marginBottom: "4rem",
          lineHeight: 1,
        }}
      >
        Characters
      </Typography>
      <TextField
        id="outlined-basic"
        label="Search by name"
        variant="outlined"
        onChange={searchByName}
        sx={{ width: 500, marginBottom: "4rem" }}
      />
      {characters.charactersList.length ? (
        <>
          <CharactersList
            charactersList={characters.charactersList}
            page={page}
          />
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "3rem",
            }}
          >
            <Pagination
              count={characters?.paginationInfo?.pages}
              onChange={onPageChange}
              page={page || 1}
            />
          </Box>
        </>
      ) : (
        <Typography component="p">No results</Typography>
      )}
    </Container>
  );
});

export default CharactersPage;
