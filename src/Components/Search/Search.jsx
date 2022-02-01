import React from 'react';
import './Search.scss';

import { NavLink } from 'react-router-dom';

import TransDate from '../../Localization/data';
import { Context } from '../../Context/Localization';

function Search() {
	const { state } = React.useContext(Context);
	return (
		<>
			<div className='search'>
				<form action='Post'>
					<input
						className='search__input'
						type='text'
						placeholder={'Search/qidirish'}
					/>
				</form>

				<div className='search__card'>
					<div className='search__title'>
						<h2 className='search__heading'>
							{TransDate[state].search.Trends}
						</h2>
						<span>
							<NavLink
								className='search__setting'
								to=''></NavLink>
						</span>
					</div>
					<div className='search__ListOfRevolution'>
						<div className='search__treadings'>
							<li className='search__tweets'>
								{TransDate[state].search.Trending_in_Germany}
							</li>
							<li>
								<NavLink
									className='search__infoTreading'
									to=''></NavLink>
							</li>
						</div>
						<li className='search__revolution'>
							{' '}
							{TransDate[state].search.li.Revolution}
						</li>
						<span>50.4K Tweets</span>
						<div className='search__treadings'>
							<li className='search__tweets'>
								{TransDate[state].search.Trending_in_Germany}
							</li>
							<li>
								<NavLink
									className='search__infoTreading'
									to=''></NavLink>
							</li>
						</div>
						<li className='search__revolution'>
							{TransDate[state].search.li.Revolution}
						</li>
						<span>50.4K Tweets</span>

						<div className='search__treadings'>
							<li className='search__tweets'>
								{TransDate[state].search.Trending_in_Germany}
							</li>
							<li>
								<NavLink
									className='search__infoTreading'
									to=''></NavLink>
							</li>
						</div>
						<li className='search__revolution'>
							{' '}
							{TransDate[state].search.li.Revolution}
						</li>
						<span className='search__tweet'>50.4K Tweets</span>
					</div>
					<br />
					<NavLink className='search__show' to=''>
						{TransDate[state].search.show.Show_more}
					</NavLink>
				</div>

				<div className='search__cardLike'>
					<h2 className='search__likeTitle'>
						{TransDate[state].search.cardLike.YouLike}
					</h2>

					<div className='search__cardFollow'>
						<span>
							<NavLink
								className='search__followPic'
								to=''></NavLink>
						</span>
						<div className='search__profileLink'>
							<NavLink to=''>Mushtariy</NavLink>
							<NavLink to=''>@Mushtar565266</NavLink>
						</div>
						<button className='search__btn4'>Follow</button>
					</div>

					<div className='search__cardFollow1'>
						<span>
							<NavLink
								className='search__followPic1'
								to=''></NavLink>
						</span>
						<div className='search__profileLink'>
							<NavLink to=''>Shuhratbek</NavLink>
							<NavLink to=''>@mrshukhrat</NavLink>
						</div>
						<button className='search__btn4'>Follow</button>
					</div>
					<br />

					<NavLink className='search__shows' to=''>
						{TransDate[state].search.cardLike.Show_more}
					</NavLink>
				</div>
				<p className='search__text'>
					Terms of Service Privacy Policy Cookie Policy Imprint Ads
					Info More ··· © 2021 Twitter, Inc.
				</p>
			</div>
		</>
	);
}
export default Search;
