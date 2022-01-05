import React from 'react';
import '@styles/MyCategories.scss';
import TableData from '@containers/TableData';

const MyCategories = () => {    

	return (
		<div className="MyCategories">
			<div className="MyCategories-container">
				<h1 className="title">My Categories</h1>
				<TableData nameTable="Categories"/>
			</div>
		</div>
	);
}

export default MyCategories;