import React, { Component } from "react";
// import { Input, Button, Select } from 'antd';
import { post } from '../actions/action'
import FacebookLogin from './FacebookLogin'
import Header from './Header'

class App extends Component {
	constructor(props) {
		super(props)
	};


	render() {
		return (

			<div className="root_bkg">
				<Header/>
				<div className="d-flex justify-content-center">
					<FacebookLogin/>
				</div>
			</div>
		);
	}


}

export default App