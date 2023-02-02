import { Typography, Container, Box, Button } from "@mui/material";
import { uiState } from "@store";
import { useEffect } from "react";
import mainImage from "../assets/mainPage.png";
import { Link } from "react-router-dom";

const buttonStyle = {
  bgcolor: '#232323',
  fontFamily: 'Fjalla One',
  boxShadow: 'none',
  border: '1px solid #232323',
  '&:hover': {
    bgcolor: '#ffffff',
    color: '#232323',
    border: '1px solid #232323',
    boxShadow: 'none',
  }
}

const MainPage = () => {
  useEffect(() => {
    uiState.setPage("home");
  }, []);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "40rem" }}>
        <img src={mainImage} style={{ maxWidth: "100%" }} />
      </Box>
      <Box>
        <Link to={"/characters?page=1"} style={{ textDecoration: "none" }}>
          <Button variant="contained" sx={buttonStyle}>Characters</Button>
        </Link>
        <Link
          to={"/locations?page=1"}
          style={{ marginLeft: "2rem", textDecoration: "none" }}
        >
          <Button variant="contained" sx={buttonStyle}>Locations</Button>
        </Link>
      </Box>
    </Container>
  );
};

export default MainPage;
