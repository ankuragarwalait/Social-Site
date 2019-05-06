import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import NavBar from './components/containers/NavBar';
import { WelcomeContainer } from './components/containers/WelcomeContainer';
import { AdContainer } from './components/containers/AdContainer';
import FeedContainer from './components/containers/FeedsContainer';

let App = ({
  userData,
  adUrls,
  location
}) =>  {
    return (
      <div className="App">
        <header className="clearfix">
            <NavBar userData={userData} reverse='false'/>
        </header>
        <div className="container pt-3">
          <div className="row">
            <div className="col-md-3">
              <WelcomeContainer />
            </div>
            <div className="col-md-6">
              <FeedContainer location={location}/>
            </div>
            <div className="col-md-3">
              <AdContainer adUrls={adUrls}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(App);
