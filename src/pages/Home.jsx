import React from "react";
import '@styles/Home.scss';
import budgetPersonal from '@icons/budget_personal.svg';

const Home = () => {
    return(
        <div className="Home">
			<div className="Home-container">
				<img src={budgetPersonal} alt="logo" className="logo" />
				<h1 className="title">Welcome to application</h1>
				<p className="subtitle">Here you can manager your personal account</p>
			</div>
		</div>
    );
}

export default Home;