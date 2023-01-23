import { Grid } from "@mui/material";
import { Character } from "@types";

import styles from './CharacterCard.module.scss';


interface IProps {
  character: Character
}

const CharacterCard = ({character: {name, image, id}}: IProps) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} className={styles.card}>
      <div className="asdasd" key={id}>
        <h1>{name}</h1>
        <img src={image} />
      </div>
    </Grid>
  );
};

export default CharacterCard;
