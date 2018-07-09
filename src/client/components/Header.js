import React from 'react';

import { NavLink } from 'react-router-dom';

const Header = (props) => (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light alert-dark">
    <div className="collapse navbar-collapse" id="menu">
    <a className="navbar-brand" href="#">Application built using React-Redux</a>
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <div className="nav-link">
                    <NavLink to='/' exact={true}>About</NavLink>
                </div>
            </li>        
            <li className="nav-item">
                <div className="nav-link">
                    <NavLink to='/campers' href='#home' >Dashboard</NavLink>
                </div>
            </li>
            <li className="nav-item">
                <div className="nav-link">
                    <NavLink to='/enroll' href='#enroll'>Enroll</NavLink>
                </div>
            </li>

        </ul>
    </div>
</nav> 
</div>
)

Header.defaultProps = {
    title: 'Camp Registration Form'
}

export default Header;