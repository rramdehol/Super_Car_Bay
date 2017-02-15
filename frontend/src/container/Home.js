import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import actions
import GetHomeActions from '../actions/GetHomeActions.js'
class Home extends Component{
	componentDidMount() {
		this.props.getHomeData();
	}

	render(){
		console.log(this.props.homeData);
		var homeAuctions = [];
		this.props.homeData.map((auction, index)=>{
			homeAuctions.push(<li>{auction.title}</li>);
		})
		return(
			<h1>homeAuctions</h1>
		)
	}
}

function mapStateToProps(){
	return{
		homeData: state.home
	}

}
function mapDispatchToProps(dispatch){
	return bindActionCreators({
		getHomeData: GetHomeActions
	},dispatch)

}
export default connect(mapStateToProps, mapDispatchToProps) (Home); 