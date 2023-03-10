import {
  Modal,
  CircularProgress,
  Fade,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { locations } from "@store";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import CharacterCard from "@components/CharacterCard";
import { Link } from "react-router-dom";
import {
  modalStyle,
  closeButtonStyle,
  titleStyle,
} from "./LocationPopupStyles";

interface IProps {
  id: number;
  open: boolean;
  handleClose: () => void;
}

const LocationPopup = observer(({ id, open, handleClose }: IProps) => {
  useEffect(() => {
    locations.setResidents([]);
    locations.setActiveLocation("");
    locations.getResidents(id);
  }, []);

  const onPopupClose = () => {
    locations.setResidents([]);
    handleClose();
  };

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
          <CloseIcon sx={closeButtonStyle} onClick={onPopupClose} />
          <Typography component="p" sx={titleStyle}>
            Residents of {locations.activeLocation}
          </Typography>

          <Grid container spacing={2}>
            {locations.residentsList?.length ? (
              locations.residentsList.map((res) => {
                return (
                  <Grid item xs={6} sm={6} md={6} lg={6} key={res.id}>
                    <Link
                      to={`/characters?page=1&character=${res.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <CharacterCard character={res} />
                    </Link>
                  </Grid>
                );
              })
            ) : (
              <CircularProgress
                sx={{ marginLeft: "auto", marginRight: "auto" }}
              />
            )}
          </Grid>
        </Box>
      </Fade>
    </Modal>
  );
});

export default LocationPopup;
