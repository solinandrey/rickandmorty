import { Grid } from "@mui/material";
import { CharacterLite } from "@types";
import { Link } from "react-router-dom";

import styles from "./CharacterCard.module.scss";

interface IProps {
  character: CharacterLite;
}

const CharacterCard = ({ character: { name, image, id } }: IProps) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} className={styles.container}>
      <Link to={`${id}`} className={styles.card}>
        <div className="asdasd">
          <h1>{name}</h1>
          <img src={image} />
        </div>
      </Link>
    </Grid>
  );
};

export default CharacterCard;
