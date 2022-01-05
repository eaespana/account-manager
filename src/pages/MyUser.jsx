import React from 'react';
import '@styles/MyUser.scss';

const MyUser = () => {

	const [newEditValor, setNewEditValor] = React.useState('disabled');

	const onEdit = (event) => {
        event.preventDefault();
		setNewEditValor('');
    };

	return (
		<div className="MyUser">
			<div className="MyUser-container">
				<h1 className="title">My user</h1>
				<form action="/signup" className="form">
					<div>
						<label for="name" className="label">Name</label>
						<input readOnly={newEditValor} type="text" id="name" placeholder="Alejandro" className="input input-name" />
						<label for="email" className="label">Email</label>
						<input readOnly={newEditValor} type="text" id="email" placeholder="alejandroe@example.com" className="input input-email" />
						<label for="password" className="label">Password</label>
						<input readOnly={newEditValor} type="password" id="password" placeholder="*********" className="input input-password" />
					</div>
					<input 
						type="submit" 
						value="Edit" 
						className="secondary-button login-button-myaccount" 
						onClick={onEdit}/>
					<button type="submit" className="secondary-button login-button-myaccount">New User</button>
				</form>
			</div>
		</div>
	);
}

export default MyUser;