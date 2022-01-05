import React from 'react';
import '@styles/AdminUser.scss';
import budgetPersonal from '@icons/budget_personal.svg';

const AdminUser = () => {
	return (
		<div className="AdminUser">
			<div className="AdminUser-container">
				<img src={budgetPersonal} alt="logo" className="logo" />
				<h1 className="title">User Manager</h1>
				<p className="subtitle">Please, select the data and upodate</p>
				<form action="/" className="form">
					<label for="name-user" className="label">Name user</label>
					<input type="password" id="password" placeholder="Alejandro" className="input input-password" />
					<input type="submit" value="Confirm" className="primary-button login-button" />
				</form>
			</div>
		</div>
	);
}

export default AdminUser;