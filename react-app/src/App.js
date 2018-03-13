import React, { Component } from 'react';
import { Header } from './screens';
import './App.css';
import { ProfileContent, Experience, Projects, Education } from './screens/Home/index';

class App extends Component {
  render() {
    return (
      <span>
      <Header/>
      <ProfileContent/>
      <Education/>
      <Experience/>
      <Projects/>
      </span>
    );
  }
}

export default App;
