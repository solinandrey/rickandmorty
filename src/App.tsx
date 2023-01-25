import React from 'react';
import './App.css';
import { CharactersPage, CharacterDetail } from '@pages';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharactersPage />} />
        <Route path="/:id" element={<CharacterDetail />} />
      </Routes>
    </div>
  );
}

export default App;
