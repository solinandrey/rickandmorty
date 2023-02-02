import styles from "./CharacterMain.module.scss";
import { CharacterFull } from "@types";
import { Grid, Typography, Container } from "@mui/material";
import { Box } from "@mui/system";

import RowText from "@components/RowText";
import StatusLabel from "@components/StatusLabel";
import { Link } from "react-router-dom";

interface IProps {
  info: CharacterFull;
}

const CharacterMain = ({
  info: { id, name, image, species, type, gender, origin, status, location },
}: IProps) => {
  return (
    <Box className={styles.mainInfo}>
      <Box className={styles.imageContainer}>
        <img src={image} alt="" style={{ width: "100%" }} />
        {status && (
          <Box className={styles.status}>
            <StatusLabel label={status} />
          </Box>
        )}
      </Box>
      <Box className={styles.textInfo}>
        <Typography
          component="h4"
          sx={{
            fontSize: "3rem",
            fontFamily: "Fjalla One",
            lineHeight: 1,
            marginBottom: "1rem",
          }}
        >
          {name}
        </Typography>
        <RowText title="Gender" value={gender} />
        <RowText title="Species" value={species} />
        <RowText title="Origin" value={origin?.name} />
        <RowText
          title="Location"
          value={
            <Link to={`/locations?page=1&location=${location.id}`}>
              {location.name}
            </Link>
          }
        />
        <RowText title="Type" value={type} />
      </Box>
    </Box>
  );
};

export default CharacterMain;
