import React from 'react';
import '@styles/CreateAccount.scss';

const MyAccount = () => {

	return (
		<div className="CreateAccount">
			<div className="CreateAccount-container">
				<h1 className="title">Create Account</h1>
				<form action="/signup" className="form">
                    <div>
                        <label for="typeAccount" className="select">Type</label>
                        <select  id="selecTipoCuenta" className="input input-name">
                            <option value="value1">Value 1</option>
                            <option value="value2" selected>Value 2</option>
                            <option value="value3">Value 3</option>
                        </select>
                        <label for="nameAccount" className="label">Name</label>
						<input type="text" id="name" placeholder="Payroll" className="input input-name" />
                        <input 
						type="submit" 
						value="New Account" 
						className="secondary-button login-button-myaccount"/>
                    </div>
				</form>
			</div>
		</div>
	);
}

export default MyAccount;