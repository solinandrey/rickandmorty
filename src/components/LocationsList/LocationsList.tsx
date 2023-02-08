import { Box, Button, Grid, Switch, Stack, Typography } from "@mui/material";
import { LocationInfo, TableList } from "@types";
import { observer } from "mobx-react-lite";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

import TableBlock from "@components/TableBlock";
import LocationPopup from "@components/LocationPopup";
import LocationCard from "@components/LocationCard";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { locations } from "@store";

interface IProps {
  locationsList: LocationInfo[];
  page: string | number
}

const LocationsList = observer(({ locationsList, page }: IProps) => {
  const [tableView, setTableView] = useState(false);
  const [popupOpened, setPopupOpened] = useState(false);
  const [activeLocation, setActiveLocation] = useState<number | null>(null);
  const [query, setQuery] = useSearchParams();
  const nodeRef = useRef(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const loc = params.get('location');
    if (loc) {
      setPopupOpened(true);
      setActiveLocation(Number(query.get("location")));
    }
  }, []);

  const closePopup = () => {
    setPopupOpened(false);
    setActiveLocation(null);
    query.delete('location');
    query.set('page', '1');
    setQuery(query);
  };

  const openPopup = (id: number) => {
    setPopupOpened(true);
    setActiveLocation(id);
    query.set('page', query.get("page") || "1");
    query.set('location', id.toString());
    setQuery(query);
  };

  const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTableView(event.target.checked);
  };

  const makeTableList = (list: LocationInfo[]): TableList => {
    return {
      header: ["name", "dimension", "type", "residents"],
      body: list.map((item) => [
        item.name,
        item.dimension,
        item.type,
        <Button onClick={() => openPopup(item.id)}>open</Button>,
      ]),
    };
  };

  return (
    <Box sx={{ width: "100%" }}>
      {activeLocation ? (
        <LocationPopup
          id={activeLocation}
          open={popupOpened}
          handleClose={closePopup}
        />
      ) : null}
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="center"
        sx={{ marginBottom: "2rem" }}
      >
        <Typography>Cards</Typography>
        <Switch color="default" onChange={handleSwitch} checked={tableView} />
        <Typography>Table</Typography>
      </Stack>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={`${tableView}${page}`}
          nodeRef={nodeRef}
          classNames="fade"
          timeout={200}
        >
          {tableView ? (
            <Box ref={nodeRef} className="cards">
              <TableBlock list={makeTableList(locationsList)} />
            </Box>
          ) : (
            <Grid container spacing={2} ref={nodeRef} className="cards">
              {locationsList.map((loc) => {
                return (
                  <Grid item xs={12} sm={6} md={6} lg={6} key={loc.id} data-testid={`location-${loc.id}`}>
                    <LocationCard
                      location={loc}
                      onLocationClick={() => openPopup(loc.id)}
                    />
                  </Grid>
                );
              })}
            </Grid>
          )}
        </CSSTransition>
      </SwitchTransition>
    </Box>
  );
});

export default LocationsList;
