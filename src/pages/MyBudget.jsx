import React from 'react';
import '@styles/MyBudget.scss';
import TableData from '@containers/TableData';

const MyBudget = () => {

	return (
		<div className="MyBudget">
			<div className="MyBudget-container">
				<h1 className="title">My Budget</h1>
				<TableData nameTable="Budget"/>
			</div>
		</div>
	);
}

export default MyBudget;