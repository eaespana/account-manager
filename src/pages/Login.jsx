import React, { useState, useRef,useContext } from 'react';
import useGetProducts from '@hooks/useGetProducts'
import AppContext from '@context/AppContext';
import '@styles/Login.scss';
import budgetPersonal from '@icons/budget_personal.svg';

const API = 'https://api.escuelajs.co/api/v1/products';

const Login = () => {

	const {addToCart} = useContext(AppContext);

	const handleClickToCart = product => {
		addToCart(product);
		console.log(product);
	}

	const form = useRef(null);
	const hadleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			username: formData.get('email'),
			password: formData.get('password')
		}
		console.log(data);
	};

	const products = useGetProducts(API);
	const [session, SetSession] = useState('Hola');

	const handleClick = () => {
		SetSession('Mundo');
		console.log('Mundo');
	}

	return (
		<div className="Login">
			<div className="Login-container">
				<img src={budgetPersonal} alt="logo" className="logo" />
				<form action="/" className="form" ref={form}>
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" name="email" placeholder="platzi@example.cm" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" />
					<button onClick={hadleSubmit} className="primary-button login-button">
						Log in
					</button>
					<a href="/">Forgot my password</a>
				</form>
				<button onClick={handleClick} className="secondary-button signup-button">Sign up</button>
				<button onClick={() => handleClickToCart(products[0])}  className="secondary-button signup-button">Sign up handleClickToCart</button>
				{session}
				{products.map( product => (
					console.log(product.title),
					console.log(product.id) //usar key={product.id}
				))}
			</div>
		</div>
	);
}

export default Login;