import LocationsList from "@components/LocationsList";
import { locations, uiState } from "@store";
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

const LocationsPage = observer(() => {
  const [query, setQuery] = useSearchParams();
  const [searchTimeout, setSearchTimeout] = useState<number | null>(null);
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    locations.getLocations(Number(query.get("page")) || 1);
    uiState.setPage("locations");
    if (!query.get("page")) {
      setQuery({ page: "1" });
    }
  }, []);

  const onPageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    locations.getLocations(value);
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
    const searchText = event.target.value;
    setSearchTimeout(() => {
      return window.setTimeout(() => {
        locations.getLocations(1, searchText);
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
        Locations
      </Typography>
      <TextField
        id="outlined-basic"
        label="Search by name"
        variant="outlined"
        onChange={searchByName}
        sx={{ width: "30rem", marginBottom: "2rem" }}
      />
      {locations.locationsList.length ? (
        <>
          <LocationsList locationsList={locations.locationsList} page={page} />
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "3rem",
            }}
          >
            <Pagination
              count={locations?.paginationInfo?.pages}
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

export default LocationsPage;
