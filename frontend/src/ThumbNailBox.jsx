// *********React Stuff**********
import React, { Component } from 'react';
import $ from "jquery";
// *******Custom Modules/Components***********
import ThumbNail from '../src/shared-components/ThumbNail.jsx'

class ThumbNailBox extends Component{
	render(){
		return(
			<div id="thumb-nail-box" className= 'col-xs-2'>
				Thumb Nail Box
				<ThumbNail/>
				<ThumbNail/>
				<ThumbNail/>
				<ThumbNail/>
				<ThumbNail/>
				<ThumbNail/>
			</div>
		)
	}
}

export default ThumbNailBox;