import React from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './SecondPart.scss';
import orqaga from '../../Assets/iconcha/Arrow.svg';

function SecondPart() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [user, setUser] = React.useState({});

	React.useEffect(() => {
		(async () => {
			try {
				const response = await fetch(
					'https://reqres.in/api/users/' + id,
				);
				const data = await response.json();

				setUser(data.data);
			} catch (err) {
				console.log(err);
			}
		})();
	}, [id]);

	return (
		<>
			<div className='wrp'>
				<div className='  wrp__header-pr'>
					<button
						onClick={() => navigate(-1)}
						className='wrp__btnBack'>
						<img src={orqaga} alt='' />
					</button>
					<div className='wrp__TitleProfile'>
						<NavLink to='/' className='wrp__name'>
							{user.first_name}
						</NavLink>
						<li>1,070 Tweets</li>
					</div>
				</div>
				<div className='wrp__profile'>
					<img className='wrp__Rectangle' src={user.avatar} alt='' />
					<div className='wrp__PicBtnWrp'>
						<img
							className='wrp__boburPic'
							src={user.avatar}
							alt=''
						/>
						<button className='wrp__profileNdPic'>
							Edit profile
						</button>
					</div>
				</div>
				<div className='wrp__company'>
					<NavLink to='/' className='wrp__ComBobur'>
						{user.first_name}
					</NavLink>
					<NavLink className='wrp__email' to='/'>
						{user.email}
					</NavLink>
					<div className='wrp__tech'>
						<p>UX&UI designer at</p>
						<NavLink className='wrp__linktech' to='/'>
							@abutechuz
						</NavLink>
					</div>
				</div>
				<div className='wrp__location'>
					<NavLink className='wrp__mashagdaman' to=''>
						Mashag'daman
					</NavLink>
					<NavLink className='wrp__emailBobur' to=''>
						{user.email}
					</NavLink>
					<NavLink className='wrp__born' to='/'>
						Born November 24, 2000
					</NavLink>
					<NavLink className='wrp__moment' to='/'>
						Joined May 2020
					</NavLink>
				</div>
				<div className='wrp__follow'>
					<h4>
						67 <span className='wrp__following'>Following</span>
					</h4>
					<h4 className='wrp__follower'>
						47 <span className='wrp__followers'>Followers</span>
					</h4>
				</div>
				<div className='wrp__mediawrp'>
					<div className='wrp__Media'>
						<NavLink
							className='wrp__mediaLike   wrp__tweets'
							to='/'>
							Tweets
						</NavLink>
						<NavLink className='wrp__mediaLike wrp__reply ' to='/'>
							Tweets & replies
						</NavLink>
						<NavLink className='wrp__mediaLike wrp__Lmedia ' to='/'>
							Media
						</NavLink>
						<NavLink className='wrp__mediaLike wrp__likes' to='/'>
							Likes
						</NavLink>
					</div>
				</div>

				<span className='wrp__pinned'>Pinned Tweet</span>

				<div className='wrp__pinText'>
					<div className='wrp__curs1'>
						<img
							className='wrp__fourPic'
							src={user.avatar}
							alt=''
						/>
						<div className='wrp__txtwrp'>
							<NavLink className='wrp__txtBoburName' to='/'>
								{user.first_name}
							</NavLink>
							<NavLink className='wrp__txtBobur' to='/'>
								{user.email} ·
								<span className='wrp__txtBobur'> Apr 1</span>
							</NavLink>
							<li className='wrp__textTxt'>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Sed a ducimus amet iste
								dolorum minus enim! Nostrum sit reprehenderit
								ipsa!
							</li>
						</div>
					</div>
					<div className='wrp__like'>
						<ul className='like-list'>
							<li className='like_two'>
								<NavLink className='like1' to='/'></NavLink>
								<h4 className='list_like'>1</h4>
							</li>
							<li className='like_two'>
								<NavLink className='like2' to='/'></NavLink>
								<h4 className='list_like'>2</h4>
							</li>

							<li className='like_two'>
								<NavLink className='like3' to='/'></NavLink>
								<h4 className='list_like'>3</h4>
							</li>

							<li className='like_two'>
								<NavLink className='like4' to='/'></NavLink>
								<h4 className='list_like'>4</h4>
							</li>

							<li className='like_two'>
								<NavLink className='like5' to='/'></NavLink>
								<h4 className='list_like'>5</h4>
							</li>
						</ul>
					</div>
				</div>

				<div className='wrp__pinText'>
					<div className='wrp__curs1'>
						<img
							className='wrp__fourPic1'
							src={user.avatar}
							alt=''
						/>
						<div className='wrp__txtwrp'>
							<NavLink className='wrp__txtBoburName' to='/'>
								{user.first_name}
							</NavLink>
							<NavLink className='wrp__txtBobur' to='/'>
								{user.email} ·
								<span className='wrp__txtBobur'> Apr 1</span>
							</NavLink>
							<li className='wrp__textTxt'>
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Distinctio quam quas, ab
								reiciendis debitis corrupti, repellendus hic
								autem maiores rem odio eaque quasi. Fugit
								praesentium blanditiis voluptatum incidunt
								laudantium rem.
							</li>
						</div>
					</div>
					<div className='wrp__like'>
						<ul className='like-list'>
							<li className='like_two'>
								<NavLink className='like1' to='/'></NavLink>
								<h4 className='list_like'>1</h4>
							</li>
							<li className='like_two'>
								<NavLink className='like2' to='/'></NavLink>
								<h4 className='list_like'>2</h4>
							</li>

							<li className='like_two'>
								<NavLink className='like3' to='/'></NavLink>
								<h4 className='list_like'>3</h4>
							</li>

							<li className='like_two'>
								<NavLink className='like4' to='/'></NavLink>
								<h4 className='list_like'>4</h4>
							</li>

							<li className='like_two'>
								<NavLink className='like5' to='/'></NavLink>
								<h4 className='list_like'>5</h4>
							</li>
						</ul>
					</div>
				</div>
				<div className='wrp__pinText2'>
					<div className='wrp__curs12'>
						<img
							className='wrp__fourPic12'
							src={user.avatar}
							alt=''
						/>
						<div className='wrp__txtwrp'>
							<NavLink className='wrp__txtBoburName' to='/'>
								{user.first_name}
							</NavLink>
							<NavLink className='wrp__txtBobur' to='/'>
								{user.email} ·
								<span className='wrp__txtBobur'> Apr 1</span>
							</NavLink>
							<li className='wrp__textTxt'>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Impedit, eaque?
							</li>
						</div>
					</div>
					<img className='wrp__oylanma' src={user.avatar} alt='' />
					<div className='wrp__like1'>
						<ul className='like-list'>
							<li className='like_two'>
								<NavLink className='like1' to='/'></NavLink>
								<h4 className='list_like'>1</h4>
							</li>
							<li className='like_two'>
								<NavLink className='like2' to='/'></NavLink>
								<h4 className='list_like'>2</h4>
							</li>

							<li className='like_two'>
								<NavLink className='like3' to='/'></NavLink>
								<h4 className='list_like'>3</h4>
							</li>

							<li className='like_two'>
								<NavLink className='like4' to='/'></NavLink>
								<h4 className='list_like'>4</h4>
							</li>

							<li className='like_two'>
								<NavLink className='like5' to='/'></NavLink>
								<h4 className='list_like'>5</h4>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
export default SecondPart;
