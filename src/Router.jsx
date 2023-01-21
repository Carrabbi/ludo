import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/pages/home/Home';
import NewHost from  './components/pages/newhost/NewHost';
import Room from  './components/pages/room/Room';

function Router () {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/newhost" element={<NewHost />} />
				<Route path="/newroom" element={<Room />} />
				
			</Routes>
		</BrowserRouter>

	);

}

export default Router;