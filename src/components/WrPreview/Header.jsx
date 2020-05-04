import React from 'react';
import logo from './logo.png'
import classes from './Header.module.css'

class Header extends React.Component {

    state = {
        isActive: false
    }

    onClickBtn = () => {
        this.setState({
            isActive: true
        })
        if (this.state.isActive) {
            this.setState({
                isActive: false
            })
        }
    }


    render() {
        let active = this.state.isActive ? classes.activeBtn : '';

        return (
            <header className={classes.header}>
                <div className={classes.container}>
                    <a href="#"><img className={classes.logo} src={logo}/></a>

                    <div onClick={this.onClickBtn} className={classes.btnMenu}>
                        <div className={`${classes.btnLines} ${active}`}>
                            <nav className={classes.activeNav}>
                                <ul>
                                    <li><a className="link" href="#">Main</a></li>
                                    <li><a className="link" href="#">Skills</a></li>
                                    <li><a className="link" href="#">Works</a></li>
                                    <li><a className="link" href="#">Contacts</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className={classes.containerNav}>
                        <nav>
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
}

export default Header;
