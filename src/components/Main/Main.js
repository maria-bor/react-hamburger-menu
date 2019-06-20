import React, { Component } from 'react'
import './Main.css'
import { Route, NavLink, HashRouter } from 'react-router-dom'
import Home from './../Home/Home'
import Stuff from './../Stuff/Stuff'
import Contact from './../Contact/Contact'
import { Hash } from 'crypto';

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Simple SPA App</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/stuff">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/stuff" component={Stuff}/>
                        <Route path="/contact" component={Contact}/>
                    </div>
                </div>
            </HashRouter>
        )
    }
}

export default Main;