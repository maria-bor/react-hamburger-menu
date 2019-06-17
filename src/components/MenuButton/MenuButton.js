import React, { Component } from 'react'
import './MenuButton.css'

class MenuButton extends Component {
    render() {
        return (
            // <button id='roundButton' onMouseDown={this.props.handleMouseDown}>
            //     <span id='hamburger'></span>
            // </button>
            <div class="container" onMouseDown={this.props.handleMouseDown}>
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
        )
    }
}

export default MenuButton