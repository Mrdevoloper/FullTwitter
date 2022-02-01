import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';

// pages
import Home from './Page/Home/Home';
import Profile from './Page/Profile/Profile';

function Authentication() {
	return (
		<div className='container'>
			<div className='provideCard'>
				<Sidebar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='profile/:id' element={<Profile />} />
				</Routes>
			</div>
		</div>
	);
}

export default Authentication;
