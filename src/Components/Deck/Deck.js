import React, { Component, Fragment } from 'react'

import Card from "../../Components/Card/Card"

import slider1 from "../../img/slider/1.jpg"
import slider2 from "../../img/slider/2.jpg"
import slider3 from "../../img/slider/3.jpg"
import slider4 from "../../img/slider/4.jpg"
import slider5 from "../../img/slider/5.jpg"
import slider6 from "../../img/slider/6.jpg"

class Deck extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         cards: [
             <Card photo={slider1} id="one" key="one" />,
             <Card photo={slider2} id="two" key="two" />,
             <Card photo={slider3} id="three" key="three" />
         ]
      }
    }
  render() {
    return (
      <Fragment>
          {/* Viewport div */}
          <div style={styles.view_port}>
            <div style={styles.images_container}>
                {this.state.cards}
            </div>
          </div>
      </Fragment>
    )
  }
}

const styles = {
    view_port: {
        margin: 0,
        padding: 0,
        width: '500px',
        height: '300px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        // overflow: 'hidden',
        backgroundColor: 'red'
    },
    images_container: {
        margin: 0,
        padding: 0,
        width: 'inherit',
        height: 'inherit',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    }
}

export default Deck