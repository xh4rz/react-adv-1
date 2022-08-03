import { ChangeEvent, useState } from 'react';
import '../styles/styles.css';

export const RegisterPage = () => {
	const [registerData, setRegisterData] = useState({
		name: 'harold',
		email: 'xh4rz@hotmail.com',
		password1: '123456',
		password2: '123456'
	});

	const { name, email, password1, password2 } = registerData;

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		console.log(event.target.value);
	};

	return (
		<div>
			<h1>Register Page</h1>
			<form>
				<input
					type="text"
					placeholder="Name"
					value={name}
					onChange={onChange}
				/>
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={onChange}
				/>
				<input
					type="password"
					placeholder="Password"
					value={password1}
					onChange={onChange}
				/>
				<input
					type="password"
					placeholder="Repeat Password"
					value={password2}
					onChange={onChange}
				/>
				<button type="submit">Create</button>
			</form>
		</div>
	);
};
