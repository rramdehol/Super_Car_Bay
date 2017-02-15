import React, { Component } from 'react';
import logo from './logo.svg';
import '../public/stylesheets/styles.css';
// *******Custom Modules/Components***********
import MainImage from "./MainImage.jsx";
import ThumbNailBox from "./ThumbNailBox.jsx";
import DetailsBox from "./DetailsBox.jsx";
import NavBar from './Navbar.jsx'
// Bootstrap import
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainImage/>
        <ThumbNailBox/>
        <DetailsBox/>
        <NavBar/>
      </div>
    );
  }
}

export default App;
