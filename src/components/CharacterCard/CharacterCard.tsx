import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { CharacterLite } from "@types";
import StatusLabel from "@components/StatusLabel";
import styles from "./CharacterCard.module.scss";

interface IProps {
  character: CharacterLite;
  onCharacterClick?: () => void;
}

const CharacterCard = ({
  character: { name, image, id, status, species },
  onCharacterClick,
}: IProps) => {
  return (
    <Box className={styles.card} onClick={onCharacterClick}>
      <Box
        sx={{
          width: "30%",
        }}
      >
        <img src={image} className={styles.cardImage} />
      </Box>
      <Box sx={{ width: "65%", position: "relative" }}>
        <Typography
          component="h3"
          sx={{
            fontSize: "1.3rem",
            color: "#232323",
            display: "block",
            lineHeight: "1",
            fontFamily: "Fjalla One",
          }}
        >
          {name}
        </Typography>
        <Typography
          component="p"
          sx={{ color: "#232323" }}
          className={styles.species}
        >
          {species}
        </Typography>
        {status && (
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              right: 0,
            }}
          >
            <StatusLabel label={status} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CharacterCard;
