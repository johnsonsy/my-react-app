import React, { Component } from "react";
// import { Input, Button, Select } from 'antd';
import { post } from '../actions/action'
import FacebookLogin from 'react-facebook-login'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoggedIn: false,
			name: "",
			email: "",
			photo_url: "",
		};
	};


	render() {
		const responseFacebook = (response) => {
			console.log(response);
			if (!!response) {
				this.setState({
					isLoggedIn: true,
					name: response.name,
					email: response.email,
					photo_url: response.picture.data.url
				})
			}
		}
		return (
			<div className="root_bkg">
				<div className="d-flex justify-content-center">
					<div>
						{this.state.isLoggedIn ?
							<div className="text-center">
								<img src={this.state.photo_url} />
								<h1>My name is {this.state.name}</h1>
								<h3>My e-mail is {this.state.email}</h3>
							</div> :
							<FacebookLogin
								appId="217378611931603"
								autoLoad={true}
								fields="name,email,picture"
								callback={responseFacebook}
								cssClass="facebook-button-class"
								icon="fa-facebook"
							/>
						}
						<input className="input-text form-control"
						       placeholder = "Enter your goal"
						/>
						<button className="d-block w-100 border-0 rounded enter-btn btn-secondary">></button>
						{/*<Button className="d-block w-100 enter-btn"*/}
						{/*onClick={()=>{post('http://10.1.1.27/api/login',data)}}>*/}
						{/*Test Login*/}
						{/*</Button>*/}



					</div>

				</div>
			</div>
		);
	}


}

export default App