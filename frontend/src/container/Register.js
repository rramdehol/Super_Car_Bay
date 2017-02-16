import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import RegisterAction from '../actions/RegisterAction.js'


class Register extends Component{
	constructor(props) {
		super(props);
		this.registrationSubmit = this.registrationSubmit.bind(this)
		this.state ={
			registrationResponse: ''
		}
	}
	registrationSubmit(event){
		// event.preventDefault();
		// console.dir(event.target);
		var userName = event.target[0].value;
		var password = event.target[1].value;
		// console.log(userName, password);
		this.props.registerAction({
			username: userName,
			password: password
		});
	}
	render(){
		if (this.props.registerAction.msg === "userNameTaken"){
			var failedMessage = "User Name is Taken"
		}else{
			var failedMessage =""
		}
		return(
			<div>

				<form onSubmit={this.registrationSubmit}>
                    <input type="text" name="username" placeholder="UserName" />
                    <input type="password" name="password" placeholder="Password" />
                    <input type="submit" value="Register!" />
                </form>
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		registerResponse:state.register
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({
		registerAction: RegisterAction
	},dispatch)
}
export default connect(null, mapDispatchToProps) (Register);