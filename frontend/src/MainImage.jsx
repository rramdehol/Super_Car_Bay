// *********React Stuff**********
import React, { Component } from 'react';
import $ from "jquery";
// *******Custom Modules/Components***********
import AuctionTitle from './shared-components/AuctionTitle.jsx'
// Bootstrap import
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class MainImage extends Component{
	render(){
		return(
			<div id="main-image" className='col-xs-12'>
				<img src='/images/2014-McLaren-P1.jpg' height="382" width="626"/>
				<AuctionTitle/>
			</div>
		)
	}
}
export default MainImage;