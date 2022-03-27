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
            <div>
                
            </div>
        </div>
        )
    }
}

export default Navbar