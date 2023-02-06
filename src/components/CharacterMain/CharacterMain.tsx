import { Link } from "react-router-dom";
import { Typography} from "@mui/material";
import { Box } from "@mui/system";

import RowText from "@components/RowText";
import { CharacterFull } from "@types";
import StatusLabel from "@components/StatusLabel";
import {
  mainInfoStyles,
  imageContainerStyles,
  statusStyles,
  textInfoStyles,
  nameStyles,
} from "./CharacterMainStyles";

interface IProps {
  info: CharacterFull;
}

const CharacterMain = ({
  info: { id, name, image, species, type, gender, origin, status, location },
}: IProps) => {
  return (
    <Box sx={mainInfoStyles}>
      <Box sx={imageContainerStyles}>
        <img src={image} alt="" style={{ width: "100%" }} />
        {status && (
          <Box sx={statusStyles}>
            <StatusLabel label={status} />
          </Box>
        )}
      </Box>
      <Box sx={textInfoStyles}>
        <Typography component="h4" sx={nameStyles}>
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
