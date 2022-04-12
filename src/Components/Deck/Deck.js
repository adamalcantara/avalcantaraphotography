import React, { Component, Fragment } from 'react'

import Card from "../../Components/Card/Card"

class Deck extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         cards: []
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
    view_port: {},
    images_container: {}
}

export default Deck