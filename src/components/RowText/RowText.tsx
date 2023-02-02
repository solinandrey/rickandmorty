import { Typography, Box } from "@mui/material";
import { ReactNode } from "react";

interface IProps {
  title: string;
  value?: string | ReactNode;
}

const RowText = ({ title, value }: IProps) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Typography component="span" sx={{ fontSize: "1rem", fontWeight: 700 }}>
        {title}:
      </Typography>
      <Typography component="p" sx={{ fontSize: "1rem", marginLeft: "1rem" }}>
        {value || 'unknown'}
      </Typography>
    </Box>
  );
};

export default RowText;
