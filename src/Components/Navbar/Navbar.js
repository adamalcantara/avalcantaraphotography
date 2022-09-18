import React, { Component } from 'react'
import { Link } from "react-router-dom"
import logo from "../../img/logo/avalcantara.png"
import logosmall from "../../img/logo/avalcantaraphotographyside.png"
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
            {/* mobile navigation */}
            <div id="mobileNav">

                <div id="mobileNavPieces">
                    {/* mobile logo */}
                    <div>
                        <img src={logosmall} id="logosmall" alt="logo"></img>
                    </div>

                    {/* burger item */}
                    <div id="burger" onClick={this.handleClick}>
                        <div id="line1" className={this.state.clicked ? 'line1click' : ''}></div>
                        <div id="line2" className={this.state.clicked ? 'line2click' : ''}></div>
                        <div id="line3" className={this.state.clicked ? 'line3click' : ''}></div>
                    </div>
                </div>

                {/* navbar which appears on click of burger */}
                <div className={this.state.clicked ? 'navbar active' : 'navbar'}>
                    <Link to="/" className="navlinks" onClick={this.handleClick}>Home</Link>
                    <Link to="/about" className="navlinks" onClick={this.handleClick}>About</Link>
                    <Link to="/portraits" className="navlinks" onClick={this.handleClick}>Portraits</Link>
                    <Link to="/headshots" className="navlinks" onClick={this.handleClick}>Headshots</Link>
                    <Link to="/weddings" className="navlinks" onClick={this.handleClick}>Weddings</Link>
                    <Link to="/contact" className="navlinks" onClick={this.handleClick}>Contact</Link>
                </div>
            </div>


            {/* start regular navigation */}
            <div id="nav">
                
                <ul id='navigation'>
                    <li><Link to="/" className="menuitem staticmenu">Home</Link></li>

                    {/* Dropdown area */}
                    <div id="dropdown">
                        <li id="dropbtn" className="menuitem">Portfolio</li>
                        <div id="dropdown-content">
                            <Link to="/portraits" className="menuitem">Portraits</Link>
                            <Link to="/headshots" className="menuitem">Headshots</Link>
                            <Link to="/weddings" className="menuitem">Weddings</Link>
                        </div>
                    </div>           

                     {/*Logo  */}
                    <Link to="/"><img src={logo} alt="logo" id="logo"></img></Link>


                    <li><Link to="/about" className="menuitem staticmenu">About</Link></li>
                    <li><Link to="/contact" className="menuitem staticmenu">Contact</Link></li>
                </ul>

                {/* Social navigation starts here */}
                {/* <ul id="socialnav">
                    <a href="https://fb.me/avalcantaraphotography" target="_blank" rel="noopener noreferrer"><FaFacebookF className='socialicon'/></a>
                    <a href="https://www.instagram.com/avalcantaraphotography/" target="_blank" rel='noopener noreferrer'><FaInstagram className='socialicon'/></a>
                    <a href="https://vm.tiktok.com/ZTda9nxjm/" target="_blank" rel="noopener noreferrer"><FaTiktok className='socialicon'/></a>
                </ul> */}
            </div>
        </div>
        )
    }
}

export default Navbar