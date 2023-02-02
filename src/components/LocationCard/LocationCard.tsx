import { Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { LocationInfo } from "@types";

interface IProps {
  location: LocationInfo;
  onLocationClick: () => void;
}

const cardContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  border: "1px solid #232323",
  borderRadius: "5px",
  padding: "0.6rem",
  height: "5rem",
  minWidth: "10rem"
};

const titleStyle = {
  fontWeight: 700,
  fontSize: "1.4rem",
};

const typeStyle = {
  fontSize: "0.8rem",
};

const LocationCard = ({
  location: { name, id, type, dimension, residents },
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
        {/* <Typography component="p" sx={typeStyle}>{type}</Typography> */}
        <Button onClick={onLocationClick}>See residents</Button>
      </Box>
    </Box>
  );
};

export default LocationCard;
