import React from 'react';
import '@styles/MyAccount.scss';
import TableData from '@containers/TableData';

const MyAccount = () => {

	return (
		<div className="MyAccount">
			<div className="MyAccount-container">
				<h1 className="title">My Accounts</h1>
				<TableData nameTable="Account"/>
			</div>
		</div>
	);
}

export default MyAccount;