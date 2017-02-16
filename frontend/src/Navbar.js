// *********React Stuff**********
import React, { Component } from 'react';
import $ from "jquery";
// *******Custom Modules/Components***********
import Logo from './shared-components/Logo.jsx'
import AboutUs from './shared-components/AboutUs.jsx'
import StoreNavigation from './shared-components/StoreNavigation.jsx'
import Links from './shared-components/Links.jsx'

class NavBar extends Component{
	render(){
		return(
			<div id='nav-bar' className='col-lg-4'>
				NavBar
				<Logo/>
				<AboutUs/>
				<StoreNavigation/>
				<Links/>
			</div>
		)
	}
}

export default NavBar;