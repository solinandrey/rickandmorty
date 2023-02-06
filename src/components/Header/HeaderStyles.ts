export const headerStyles = {
  display: "flex",
  justifyContent: "center",
  paddingTop: ".8rem",
};

export const navItemStyles = {
  transition: "all 0.3s ease-in-out",
  paddingLeft: "0.2rem",
  paddingRight: "0.2rem",
  borderRadius: "5px",
  "&:not(:first-of-type)": {
    marginLeft: "1rem",
  },
  "&:hover, &.active ": {
    background: "#232323",
    "& a": {
      color: "#fff",
    },
  },
};

export const navItemLabel = {
  fontSize: "1.4rem",
  fontFamily: "Francois One",
  textDecoration: "none",
  color: "#232323",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
