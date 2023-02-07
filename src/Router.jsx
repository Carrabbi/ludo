import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/pages/home/Home';
import PlayLudo from './components/pages/playludo/PlayLudo';
import Room from './components/pages/room/Room';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playludo" element={<PlayLudo />} />
        <Route path="/newroom" element={<Room />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
