import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import Layout from '../../components/Layouts'

import Campaign from '../../eth/campaign'

class CampaignShow extends Component {
	static async getInitialProps(props){
		console.log('Address in show function: ', props.query.address);
		
		let campaign = Campaign(props.query.address);

		const summary = await campaign.methods.getRequestCount().call();

		return {};
	}
	
	render() {
		return (
			<Container>
				<Layout>

					<h3>Here we go guys</h3>

				</Layout>
			</Container>
		);
	}
}

export default CampaignShow