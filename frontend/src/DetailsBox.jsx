// *********React Stuff**********
import React, { Component } from 'react';
import $ from "jquery";
// *******Custom Modules/Components***********
import ItemDescription from "./shared-components/ItemDescription.jsx";
import ShippingDetails from "./shared-components/ShippingDetails.jsx";
import PaymentDetails from "./shared-components/PaymentDetails.jsx";
import AdditionalInformation from "./shared-components/AdditionalInformation.jsx"
import SellerPolicy from "./shared-components/SellerPolicy.jsx"


class DetailsBox extends Component{
	render(){
		return(
			<div id="details-box" className='col-xs-6'>
				Details Box
				<ItemDescription/>
				<ShippingDetails/>
				<PaymentDetails/>
				<AdditionalInformation/>
				<SellerPolicy/>
				<SellerPolicy/>
				<SellerPolicy/>
			</div>
		)
	}
}
export default DetailsBox;