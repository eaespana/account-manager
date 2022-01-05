import React from 'react';
import '@styles/MyAuditTransaction.scss';
import TableData from '@containers/TableData';

const MyAuditTransaction = () => {

	return (
		<div className="MyAuditTransaction">
			<div className="MyAuditTransaction-container">
				<h1 className="title">My Transactions</h1>
				<TableData nameTable="AuditTransaction"/>
			</div>
		</div>
	);
}

export default MyAuditTransaction;