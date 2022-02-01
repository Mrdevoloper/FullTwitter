import React from 'react';
import './Sidebar.scss';
import TransDate from '../../Localization/data';
import { Context } from '../../Context/Localization';

import { NavLink } from 'react-router-dom';

import { handleNavLink } from '../../Utils/Utils';

function Sidebar() {
	const { state } = React.useContext(Context);

	return (
		<div className='wrapper'>
			<div className='hre'></div>
			<div className='wrap'>
				<nav>
					<ul className='wrapper__List'>
						<li className='wrapper__item1 wrapper__items'>
							<NavLink className={handleNavLink} to='/'>
								{TransDate[state].wrapper.nav.Home}
							</NavLink>
						</li>
						<li className='wrapper__item2 wrapper__items'>
							<NavLink className={handleNavLink} to=''>
								{' '}
								{TransDate[state].wrapper.nav.Explore}
							</NavLink>
						</li>
						<li className='wrapper__item3 wrapper__items'>
							<NavLink className={handleNavLink} to=''>
								{TransDate[state].wrapper.nav.Notifications}
							</NavLink>
						</li>
						<li className='wrapper__item4 wrapper__items'>
							<NavLink className={handleNavLink} to=''>
								{TransDate[state].wrapper.nav.Messages}
							</NavLink>
						</li>
						<li className='wrapper__item5 wrapper__items'>
							<NavLink className={handleNavLink} to=''>
								{TransDate[state].wrapper.nav.Bookmarks}
							</NavLink>
						</li>
						<li className='wrapper__item6 wrapper__items'>
							<NavLink className={handleNavLink} to=''>
								{TransDate[state].wrapper.nav.Lists}
							</NavLink>
						</li>
						<li className='wrapper__item7 wrapper__items'>
							<NavLink className={handleNavLink} to=''>
								{TransDate[state].wrapper.nav.Profile}
							</NavLink>
						</li>
						<li className='wrapper__item8 wrapper__items'>
							<NavLink className={handleNavLink} to=''>
								{TransDate[state].wrapper.nav.More}
							</NavLink>
						</li>
						<button className='btn1'>Tweet</button>
					</ul>
				</nav>
				<div className='wrapper__User'></div>
			</div>
		</div>
	);
}

export default Sidebar;
