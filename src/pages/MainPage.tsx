import { Typography, Container, Box, Button } from "@mui/material";
import { uiState } from "@store";
import { useEffect, useRef, useState } from "react";
import mainImage from "../assets/mainPage.png";
import { Link } from "react-router-dom";
import { keyframes } from "@mui/material";

const imageAnim = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.95);
  }
`;

const imageInitAnim = keyframes`
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
`;

const buttonStyle = {
  bgcolor: "#232323",
  fontFamily: "Fjalla One",
  boxShadow: "none",
  border: "1px solid #232323",
  transition: 'transform 0.5s 1s, opacity 0.3s 1s, background-color .2s, color .2s',
  "&:hover": {
    bgcolor: "#ffffff",
    color: "#232323",
    border: "1px solid #232323",
    boxShadow: "none",
  },
  ".init &": {
    opacity: 0,
    transform: 'translateY(-10%)'
  }
};

const imageStyle = {
  animation: `${imageAnim} 2s infinite alternate ease`,
  transition: 'transform 1s, opacity 0.1s',
  transform: 'scale(1)',
  ".init &": {
    opacity: 0,
    transform: 'scale(0.4)'
  },
  ".no-anim &": {
    animation: 'none',
  }
};

const MainPage = () => {
  const [mounted, setMounted] = useState(false);
  const mainBlock = useRef(null);
  useEffect(() => {
    uiState.setPage("home");
    setTimeout(() => {
      setMounted(true);
    }, 500);

  }, []);

  return (
    <Container
      ref={mainBlock}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ ...imageStyle, width: "40rem" }} className="ini">
        <img src={mainImage} style={{ maxWidth: "100%" }} />
      </Box>
      <Box>
        <Link to={"/characters?page=1"} style={{ textDecoration: "none" }}>
          <Button variant="contained" sx={buttonStyle}>
            Characters
          </Button>
        </Link>
        <Link
          to={"/locations?page=1"}
          style={{ marginLeft: "2rem", textDecoration: "none" }}
        >
          <Button variant="contained" sx={buttonStyle}>
            Locations
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default MainPage;
