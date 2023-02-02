import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import styles from "./App.module.scss";
import {
  CharactersPage,
  CharacterDetail,
  MainPage,
  LocationsPage,
} from "@pages";
import Header from "@components/Header";
import BackButton from "@components/BackButton";

function App() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) setTransistionStage("fadeOut");
  }, [location, displayLocation]);

  return (
    <div
      className={`${styles.main} ${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransistionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
    >
      <Header />
      <BackButton />
      <Routes location={displayLocation}>
        <Route path="/" element={<MainPage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/locations" element={<LocationsPage />} />
      </Routes>
    </div>
  );
}

export default App;
