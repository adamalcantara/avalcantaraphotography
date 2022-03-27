import React, { Component } from 'react'
import { Link } from "react-router-dom"
import logo from "../../img/logo/avalcantara.png"
import logosmall from "../../img/logo/avalcantarasmall.png"
import "./Navbar.css"

// import icons
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';

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
            <div className={this.state.clicked ? 'nav active' : 'nav'}>
                {/* mobile navigation goes here */}
            </div>

            {/* start regular navigation */}
            <div id="nav">
                <img src={logo} alt="logo" id="logo"></img>
                <ul id='navigation'>
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

                <ul>
                    <a href="https://fb.me/avalcantaraphotography" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                    <a href="https://www.instagram.com/avalcantaraphotography/" target="_blank" rel='noopener noreferrer'><FaInstagram /></a>
                    <a href="https://vm.tiktok.com/ZTda9nxjm/" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
                </ul>
            </div>
        </div>
        )
    }
}

export default Navbar