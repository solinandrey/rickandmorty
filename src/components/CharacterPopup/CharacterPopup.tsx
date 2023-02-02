import { Modal, Fade, Box, Typography, Backdrop, CircularProgress } from "@mui/material";
import { CharacterFull } from "@types";
import { characters } from "@store";
import CloseIcon from '@mui/icons-material/Close';

import CharacterMain from "@components/CharacterMain";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";

interface IProps {
  id: number
  open: boolean
  handleClose: () => void
}

const modalStyle = {
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "auto",
  minWidth: "30rem",
  bgcolor: 'background.paper',
  outline: 'none',
  border: '2px solid #000',
  borderRadius: '0.5rem',
  p: 4,
};

const closeButtonStyle = {
  position: "absolute",
  top: "0.6rem",
  right: "0.6rem",
  cursor: "pointer"
}

const CharacterPopup = observer(({id, open, handleClose}: IProps) => {

  useEffect(() => {
    characters.setDetailedCharacter(null);
    characters.getDetailedCharacter(id);
  },[]);

  const onPopupClose = () => {
    characters.setDetailedCharacter(null);
    handleClose();
  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={onPopupClose}
      closeAfterTransition
    >
      <Fade in={open}>
        <Box sx={modalStyle}>
        <CloseIcon sx={closeButtonStyle} onClick={onPopupClose}/>
          {characters.detailedCharacter ? <CharacterMain info={characters.detailedCharacter}/> : <CircularProgress />}
        </Box>
      </Fade>
    </Modal>
  );
});

export default CharacterPopup;
