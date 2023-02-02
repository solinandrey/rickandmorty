import { Typography } from "@mui/material";

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
      sx={{
        fontFamily: "Fjalla One",
        fontSize: large ? "2rem" : '1.1rem',
        bgcolor: getStatusColor(label),
        color: 'white',
        width: "max-content",
        padding: "0.2rem 0.4rem",
        borderRadius: "0.5rem",
      }}
    >
      {label}
    </Typography>
  );
};

export default StatusLabel;
