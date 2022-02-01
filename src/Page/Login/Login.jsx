import React from 'react';
import './Login.scss';
import { Context } from '../../Context/Enter';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login() {
	const { setToken } = React.useContext(Context);

	const handleSubmit = (evt) => {
		evt.preventDefault();

		const { user_email, user_password } = evt.target.elements;

		fetch('https://reqres.in/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: user_email.value.trim(),
				password: user_password.value.trim(),
			}),
		})
			.then((response) => response.json())
			.then((data) => setToken(data?.token));
	};
	return (
		<form className='wrapperr' onSubmit={handleSubmit}>
			<h1 className='center'>Log in to Twitter</h1>
			<TextField
				sx={{ width: 450, marginBottom: 3 }}
				type='email'
				id='outlined-required'
				defaultValue='eve.holt@reqres.in'
				label='Login'
				name='user_email'
			/>
			<TextField
				mx={{ marginTop: 20 }}
				sx={{ width: 450 }}
				id='outlined-password-input'
				defaultValue='cityslicka'
				label='Password'
				type='password'
				autoComplete='current-password'
				name='user_password'
			/>
			<Button
				sx={{ width: 450, marginTop: 3, borderRadius: 20 }}
				type='submit'
				variant='contained'
				size='large'>
				Log in
			</Button>
		</form>
	);
}

export default Login;
