export const nameStyle = {
  fontSize: "1.3rem",
  color: "#232323",
  display: "block",
  lineHeight: "1",
  fontFamily: "Fjalla One",
};

export const textBlockStyles = { width: "65%", position: "relative" };
export const speciesStyles = { color: "#232323" };
export const statusStyles = {
  position: "absolute",
  bottom: 0,
  right: 0,
};

export const cardStyles = {
  display: "flex",
  justifyContent: "space-between",
  border: "1px solid #232323",
  borderRadius: "5px",
  padding: "0.6rem",
  textDecoration: "none",
  transition: "background-color .3s ease-in-out",
  cursor: "pointer",
  minHeight: "5.2rem",

  "& h3, & .species": {
    transition: "color .3s ease-in-out",
  },

  "&:hover": {
    background: "#232323",

    "& h3, & .species": {
      color: "#fff",
    },
  },

  "& .species": {
    color: "#232323",
  },
};

export const cardImageStyles = {
  width: "100%",
};

export const imageContainerStyles = {
  width: "30%",
};
