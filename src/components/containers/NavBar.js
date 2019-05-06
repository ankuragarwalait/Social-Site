import React, { Component } from 'react';
import { UserProfile } from '../UserProfile';

export default class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <nav className="navbar navbar-default">
              <div className="container">            
                <ul className="nav navbar-nav">    
                  <li><a href="" className="navbar-brand">Brand</a></li>
                </ul>
                <div className="nav navbar-nav navbar-right">
                    <UserProfile {...this.props.userData}/>
                </div>
              </div>
            </nav>
        );
    }
}