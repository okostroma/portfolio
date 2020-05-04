import React from 'react';
import logo from './logo.png'
import classes from './Header.module.css'
import WrSkills from "../WrSkills/WrSkills";
import {Link} from "react-scroll";

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
                    <Link to="section1" spy={true}
                          smooth={true}
                          offset={-70}
                          duration= {500}><a href="#"><img className={classes.logo} src={logo}/></a></Link>

                    <div onClick={this.onClickBtn} className={classes.btnMenu}>
                        <div className={`${classes.btnLines} ${active}`}>
                            <nav className={classes.activeNav}>
                                <ul>
                                    <Link to="section1" spy={true}
                                          smooth={true}
                                          offset={-70}
                                          duration= {500}><li>
                                        <a className="link" href="#">Main</a></li></Link>
                                    <Link to="section2" spy={true}
                                          smooth={true}
                                          offset={-70}
                                          duration= {500}><li><a className="link" href="#">Skills</a></li></Link>
                                    <Link to="section3" spy={true}
                                          smooth={true}
                                          offset={-70}
                                          duration= {500}><li><a className="link" href="#">Works</a></li></Link>
                                    <Link to="section4" spy={true}
                                          smooth={true}
                                          offset={-70}
                                          duration= {500}><li><a className="link" href="#">Contacts</a></li></Link>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className={classes.containerNav}>
                        <nav>
                            <ul>
                                <Link to="section1" spy={true}
                                      smooth={true}
                                      offset={-70}
                                      duration= {500}><li><a className="link" href="#">Main</a></li></Link>
                                <Link to="section2" spy={true}
                                      smooth={true}
                                      offset={-70}
                                      duration= {500}><li><a className="link" href="#">Skills</a></li></Link>
                                <Link to="section3" spy={true}
                                      smooth={true}
                                      offset={-70}
                                      duration= {500}><li><a className="link" href="#">Works</a></li></Link>
                                <Link to="section4" spy={true}
                                      smooth={true}
                                      offset={-70}
                                      duration= {500}><li><a className="link" href="#">Contacts</a></li></Link>
                            </ul>
                        </nav>
                    </div>


                </div>
            </header>

        );
    }
}

export default Header;
