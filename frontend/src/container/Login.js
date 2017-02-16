import React, {Component} from 'react';
import LoginAction from '../actions/LoginAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
class Login extends Component{
	constructor(props) {
		super(props);
		this.state = {
			loginResponse:'',
		}
		this.loginSubmit = this.loginSubmit.bind(this);
	}
	loginSubmit(event){
		event.preventDefault();
		this.props.loginAction({
			username: event.target[0].value,
			password: event.target[1].value
		})
	}
	render(){
		return(
			<div>
				<form onSubmit={this.loginSubmit}>
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
		loginResponse:state.login
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({
		loginAction: LoginAction
	},dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps) (Login);
 