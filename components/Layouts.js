import React from 'react';
import {Menu} from 'semantic-ui-react'
import Header from './Header'

export default (props) => {
	return (
		<div>
			<Header />

			{props.children}

			{/* <Header size='tiny'>~testing done on kickstarter project~</Header> */}
		</div>
	);
};