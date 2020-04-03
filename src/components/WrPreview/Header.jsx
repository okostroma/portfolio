import React from 'react';
import logo from './logo.png'
import classes from './Header.module.css'

const Header = () => {
    return (
            <header className={classes.header}>
                <div className={classes.container}>
                    <a href="#"><img className={classes.logo} src={logo}/></a>
                    <div className={classes.containerNav}>
                        <nav className="menu-desktop" id="menu-desktop">
                            <ul>
                                <li><a className="link" href="#">Main</a></li>
                                <li><a className="link" href="#">Skills</a></li>
                                <li><a className="link" href="#">Works</a></li>
                                <li><a className="link" href="#">Contacts</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

    );
}

export default Header;
