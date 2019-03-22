import React from "react";
import { Input, Button } from 'antd';
import Typed from "typed.js";


export default function App() {
	let typed = new Typed('.element', {
		strings: ["First sentence.", "Second sentence."],
		typeSpeed: 30
	});
	return (
		<div className="root_bkg">
			<div className="d-flex justify-content-center">
				<div>
					<Input placeholder={typed} className="d-block input-text"/>
					<Button className="d-block w-100 enter-btn">></Button>
				</div>

			</div>
		</div>
	);
}