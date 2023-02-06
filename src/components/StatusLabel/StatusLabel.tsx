import { Typography } from "@mui/material";
import { labelStyles } from "./StatusLableStyles";

interface IProps {
  label: string
  large?: boolean
}

const StatusLabel = ({label, large}: IProps) => {
  
  const getStatusColor = (label: string) => {
    return label === "Dead" ? "red" : label === "Alive" ? "green" : "gray";
  };

  return (
    <Typography
      component="p"
      sx={{...labelStyles, bgcolor: getStatusColor(label), fontSize: large ? "2rem" : '1.1rem',}}
    >
      {label}
    </Typography>
  );
};

export default StatusLabel;
