import { Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { LocationInfo } from "@types";
import { cardContainerStyle, titleStyle } from "./LocationCardStyles";

interface IProps {
  location: LocationInfo;
  onLocationClick: () => void;
}

const LocationCard = ({
  location: { name, dimension },
  onLocationClick,
}: IProps) => {
  return (
    <Box sx={cardContainerStyle}>
      <Box sx={{}}>
        <Typography component="p" sx={titleStyle}>
          {name}
        </Typography>
        <Typography component="p">{dimension}</Typography>
      </Box>
      <Box>
        <Button onClick={onLocationClick}>See residents</Button>
      </Box>
    </Box>
  );
};

export default LocationCard;
