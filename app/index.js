import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from 'antd';
const lists = ['JavaScript', 'Java', 'Node', 'Python'];
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		window.navigator.geolocation.getCurrentPosition(
			position => console.log(position) ,
			err => console.log(err)
		)
		return (
			<div>
				<DatePicker />
				<img src="		<Datc/images/test.jpg" />
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));