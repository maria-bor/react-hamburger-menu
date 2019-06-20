import React, { PureComponent } from 'react'
import './MenuButton.css'

class MenuButton extends PureComponent {
    render() {
        console.log('[MenuButton.js] render')
        return (
            // <button id='roundButton' onMouseDown={this.props.handleMouseDown}>
            //     <span id='hamburger'></span>
            // </button>
            <div className="container" onMouseDown={this.props.handleMouseDown}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
        )
    }
}

export default MenuButton