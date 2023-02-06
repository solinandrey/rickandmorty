import { Typography, Box } from "@mui/material";
import { ReactNode } from "react";

import { titleStyles, valueStyles } from "./RowTextStyles";

interface IProps {
  title: string;
  value?: string | ReactNode;
}

const RowText = ({ title, value }: IProps) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Typography component="span" sx={titleStyles}>
        {title}:
      </Typography>
      <Typography component="p" sx={valueStyles}>
        {value || 'unknown'}
      </Typography>
    </Box>
  );
};

export default RowText;
