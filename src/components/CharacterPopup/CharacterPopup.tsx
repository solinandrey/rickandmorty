import { useEffect } from "react";
import { Modal, Fade, Box, CircularProgress } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { observer } from "mobx-react-lite";

import { characters } from "@store";
import CharacterMain from "@components/CharacterMain";
import { modalStyle, closeButtonStyle } from "./CharacterPopupStyles";

interface IProps {
  id: number
  open: boolean
  handleClose: () => void
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
