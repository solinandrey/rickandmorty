import { Stack } from "@mui/system";
import { Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { uiState } from "@store";

const backButtonStyle = {
  position: "fixed",
  top: "0.8rem",
  left: "3rem"
}

const BackButton = observer(() => {
  const navigate = useNavigate();

  if (uiState.currentPage !== 'home') {
    return (
      <Stack direction="row" alignItems="center" sx={backButtonStyle}>
        <ArrowBackIosIcon />
        <Button onClick={() => navigate(-1)} sx={{color: '#232323', fontFamily: 'Fjalla One', fontSize: "1.2rem"}}>Back</Button>
      </Stack>
    );
  } else {
    return null
  }
});

export default BackButton;
