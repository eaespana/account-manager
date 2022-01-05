import React, {useState} from "react";
import '@styles/Header.scss';
import Menu from '@components/Menu';
import MobileMenu from './MobileMenu';
import menu from '@icons/icon_menu.svg';
import budgetPersonal from '@icons/budget_personal.svg';

const Header = () => {
    const [ toggleDesktop, setToggleDesktop ] = useState(false);
	const [ toggleMobile, setToggleMobile ] = useState(false);

    const handleClickDesktop = () => {
		setToggleDesktop(!toggleDesktop);
	}

	const handleClickMobile = () => {
		setToggleMobile(!toggleMobile);
	}

    const[toggle,setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return(
        <nav>
            <img src={menu} alt="menu" className="menu" 
                onClick={handleClickMobile}
            />
            <div className="navbar-left">
                <img src={budgetPersonal} alt="logo" className="nav-logo" />
                <ul>
                <li>
                    <a href="/user">User</a>
                </li>
                <li>
                    <a href="/account">Account</a>
                </li>
                <li>
                    <a href="/categories">Categories</a>
                </li>
                <li>
                    <a href="/budget">Budget</a>
                </li>
                <li>
                    <a href="/audit-transaction">Audit(transactions)</a>
                </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                <li className="navbar-email" onClick={handleClickDesktop}>
                    alejo@example.com
                </li>
                </ul>
            </div>
                {toggleDesktop && <Menu/>}
                {toggleMobile && <MobileMenu/>}            
        </nav>
    );
}

export default Header;