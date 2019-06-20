import React, { Component } from 'react'
import './MenuContainer.css'
import MenuButton from './../MenuButton/MenuButton'
import Menu from './../Menu/Menu'
import Main from './../Main/Main'

class MenuContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            visible: false
        }

        this.handleMouseDown = this.handleMouseDown.bind(this)
        this.toggleMenu = this.toggleMenu.bind(this)
    }

    handleMouseDown(e) {
        this.toggleMenu()
        e.stopPropagation()
    }

    toggleMenu() {
        this.setState({ visible: !this.state.visible })
    }

    render() {
        console.log('[MenuContainer.js] render')

        return (
            <div>
                <MenuButton handleMouseDown={this.handleMouseDown} />
                <Menu handleMouseDown={this.handleMouseDown}
                    menuVisibility={this.state.visible} />
                <div>
                    <Main />
                </div>
            </div>
        )
    }
}
export default MenuContainer