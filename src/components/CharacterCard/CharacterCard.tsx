import { Box, Grid, Typography } from "@mui/material";

import { CharacterLite } from "@types";
import StatusLabel from "@components/StatusLabel";
import {
  nameStyle,
  cardStyles,
  textBlockStyles,
  speciesStyles,
  statusStyles,
  cardImageStyles,
  imageContainerStyles,
} from "./CharacterCardStyles";

interface IProps {
  character: CharacterLite;
  onCharacterClick?: () => void;
}

const CharacterCard = ({
  character: { name, image, id, status, species },
  onCharacterClick,
}: IProps) => {
  return (
    <Box onClick={onCharacterClick} sx={cardStyles} data-testid={`character-${id}`}>
      <Box sx={imageContainerStyles}>
        <img src={image} style={cardImageStyles} />
      </Box>
      <Box sx={textBlockStyles}>
        <Typography component="h3" sx={nameStyle} data-testid="character-name">
          {name}
        </Typography>
        <Typography component="p" sx={speciesStyles} data-testid="character-species">
          {species}
        </Typography>
        {status && (
          <Box sx={statusStyles} data-testid="character-status">
            <StatusLabel label={status}/>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CharacterCard;
