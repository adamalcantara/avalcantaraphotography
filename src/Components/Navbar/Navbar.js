import React, { Component } from 'react'
import { Link } from "react-router-dom"
import logo from "../../img/logo/avalcantara.png"
import logosmall from "../../img/logo/avalcantarasmall.png"
import "./Navbar.css"

class Navbar extends Component {
    // set state to false automatically
    state = { clicked: false }

    // set state to the opposite of what it is on click
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
        <div>
            <div id="mobileNav">
                {/* mobile navigation goes here */}
            </div>

            {/* start regular navigation */}
            <div className={this.state.clicked ? 'nav active' : 'nav'}>
                <img src={logo} alt="logo" id="logo"></img>
                <ul>
                    <div id="dropdown">
                        <li id="dropbtn" className="menuitem">Portfolio</li>
                        <div id="dropdown-content">
                            <Link to="/portraits" className="menuitem">Portraits</Link>
                            <Link to="/headshots" className="menuitem">Headshots</Link>
                        </div>
                    </div>            
                    <li><Link to="about" className="menuitem">About</Link></li>
                    <li><Link to="contact" className="menuitem">Contact</Link></li>
                </ul>
            </div>
        </div>
        )
    }
}

export default Navbar