import React from 'react';

import './Middle.scss';

import firstPic from '../../Assets/images/Profile Pic.svg';

import { NavLink } from 'react-router-dom';
import TransDate from '../../Localization/data';
import { Context } from '../../Context/Localization';

const Middle = function () {
	const { state, setState } = React.useContext(Context);

	const [users, setUsers] = React.useState([]);
	React.useEffect(() => {
		(async () => {
			const response = await fetch('https://reqres.in/api/users');
			const data = await response.json();

			if (data?.data?.length > 0) {
				setUsers([...data.data]);
			}
		})();
	}, []);
	console.log(users);

	return (
		<>
			<div className='includes'>
				<div className='wrap'>
					<nav>
						<ul className='includes__List'>
							<div className='hoem'>
								{TransDate[state].wrapper.nav.Home}
							</div>
							<div className='includes__listwrp'>
								<select
									className='includes__select'
									onChange={(evt) =>
										setState(evt.target.value)
									}>
									<option value='uz'>UZ</option>
									<option value='ru'>RU</option>
									<option value='en'>EN</option>
								</select>
								<NavLink
									className='includes__LightDark'
									to='/'></NavLink>
							</div>
						</ul>

						<div className='includes__happening'>
							<div className='includes__whats'>
								<div>
									<NavLink to='/'>
										<img
											className='includes__nikPic'
											src={firstPic}
											alt=''
										/>
									</NavLink>
								</div>
								<form action='POST'>
									<input
										className='includes__Title'
										type='text'
										placeholder={
											TransDate[state].includes.input
												.placeholder.Whats_happening
										}
									/>
								</form>
							</div>
						</div>

						<div className='includes__TweetWrapper'>
							<ul className='includes__TweetList'>
								<li className='includes__pic'></li>
								<li className='includes__gif'></li>
								<li className='includes__vector'></li>
								<li className='includes__smile'></li>
								<li className='includes__date'></li>
							</ul>
							<button className='btn2'>
								{TransDate[state].button.Tweet}
							</button>
						</div>
					</nav>

					{users.length > 0 &&
						users.map((user) => (
							<div className='includes__User' key={user.id}>
								<NavLink to={'Profile/' + user.id}>
									<div className='includes__user1'>
										<NavLink to={'Profile/' + user.id}>
											<img
												className='includes__pic2'
												src={user.avatar}
												alt=''
											/>
										</NavLink>
										<div className='includes__wrap1'>
											<div className='includes__NamePoint'>
												<li className='includes__nameLink'>
													<NavLink
														className='salom userName'
														to={
															'Profile/' + user.id
														}>
														{user.first_name}
													</NavLink>
													<NavLink
														to={
															'Profile/' + user.id
														}>
														{user.email}
													</NavLink>
													<span>· 25m</span>
												</li>
											</div>
											<div className='insludes__text'>
												<li>
													Lorem ipsum dolor sit amet
													consectetur adipisicing
													elit. Possimus, iusto!
												</li>
											</div>
										</div>
									</div>
								</NavLink>

								<div className='like'>
									<ul className='like-list'>
										<li className='like_two'>
											<NavLink
												className='like1'
												to='/'></NavLink>
											<h4 className='list_like'>1</h4>
										</li>
										<li className='like_two'>
											<NavLink
												className='like2'
												to='/'></NavLink>
											<h4 className='list_like'>2</h4>
										</li>

										<li className='like_two'>
											<NavLink
												className='like3'
												to='/'></NavLink>
											<h4 className='list_like'>3</h4>
										</li>

										<li className='like_two'>
											<NavLink className='like4' to='/'>
												{' '}
											</NavLink>{' '}
											<h4 className='list_like'>4</h4>
										</li>

										<li className='like_two'>
											<NavLink
												className='like5'
												to='/'></NavLink>
											<h4 className='list_like'>5</h4>
										</li>
									</ul>
								</div>
							</div>
						))}
				</div>
			</div>
		</>
	);
};
export default Middle;
