import React from 'react';
import '@styles/MobileMenu.scss';

const MobileMenu = () => {
    return (
        <div class="mobile-menu">
            <ul>
                <li>
                    <p>MENU</p>
                </li>
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

                <ul>
                <li>
                    <a href="/account">My account</a>
                </li>
                </ul>

                <ul>
                <li>
                    <a href="/account" class="email">alejo@example.com</a>
                </li>
                <li>
                    <a href="/signup" class="sign-out">Sign out</a>
                </li>
            </ul>
        </div>
    );
}

export default MobileMenu;