import { Link } from "react-router-dom";
import { Container, Grid, Typography, Box } from "@mui/material";
import { observer } from "mobx-react-lite";

import styles from "./Header.module.scss";
import { uiState } from "@store";

const headerContent = [
  { label: "home", link: "/", id: "home" },
  { label: "characters", link: "/characters?page=1", id: "characters" },
  { label: "locations", link: "/locations?page=1", id: "locations" },
];

const Header = observer(() => {
  if (uiState.currentPage !== "home") {
    return (
      <Box className={styles.header}>
        {headerContent.map((item) => (
          <Box
            key={item.id}
            className={`${styles.navItem} ${
              uiState.currentPage === item.id ? styles.active : ""
            }`}
          >
            <Typography
              component={Link}
              to={item.link}
              sx={{
                fontSize: "1.4rem",
                fontFamily: "Francois One",
                textDecoration: "none",
                color: "#232323",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>
    );
  } else {
    return null
  }
});

export default Header;
