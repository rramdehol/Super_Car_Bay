import React, { Component } from 'react';
import logo from './logo.svg';
import '../public/stylesheets/styles.css';
// *******Custom Modules/Components***********
import MainImage from "./MainImage";
import ThumbNailBox from "./ThumbNailBox";
import DetailsBox from "./DetailsBox";
import NavBar from './Navbar'
// Bootstrap import
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css'

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className='row'>
          <MainImage/>
        </div>
        <div className = 'row'>
          <ThumbNailBox/>
          <DetailsBox/>
          <NavBar/>
        </div>
        /*{this.props.children}*/
      </div>
    );
  }
}

export default App;
