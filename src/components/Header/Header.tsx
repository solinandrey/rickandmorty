import { Link } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import { observer } from "mobx-react-lite";

import { uiState } from "@store";
import { headerStyles, navItemStyles, navItemLabel } from "./HeaderStyles";

const headerContent = [
  { label: "home", link: "/", id: "home" },
  { label: "characters", link: "/characters?page=1", id: "characters" },
  { label: "locations", link: "/locations?page=1", id: "locations" },
];

const Header = observer(() => {
  if (uiState.currentPage !== "home") {
    return (
      <Box sx={headerStyles}>
        {headerContent.map((item) => (
          <Box
            key={item.id}
            sx={navItemStyles}
            className={`${uiState.currentPage === item.id ? "active" : ""}`}
          >
            <Typography component={Link} to={item.link} sx={navItemLabel}>
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>
    );
  } else {
    return null;
  }
});

export default Header;
