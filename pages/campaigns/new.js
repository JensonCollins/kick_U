import { event } from 'jquery';
import React, { Component } from 'react'
import { Container, Button, Form, Input } from 'semantic-ui-react'
import Layout from '../../components/Layouts'

import factory from '../../eth/factory'
import web3 from '../../eth/web3'

class CampaignNew extends Component {
	state = {
		minimumContribution: ''
	};
	
	onSubmit = async (event)=>{
		// Form submittal
		event.preventDefault();

		const accounts = await web3.eth.getAccounts();
		await factory.methods
		.createCampaign(this.state.minimumContribution)
		.send({
			from: accounts[0]
		});


	}

	render() {
		return (
			<Container>
				<Layout>
					<h1>Create a new Campaign page</h1>
					<Form onSubmit={this.onSubmit}>
						<Form.Field>
							<label>Minimum contribution</label>
							<Input 
								labelPosition='right' 
								label='wei' 
								placeholder='0' 
								
								value={this.state.minimumContribution}
								onChange={event => this.setState({minimumContribution: event.target.value})}
							/>
						
						</Form.Field>

						<Button primary>Create</Button>
					</Form>
				</Layout>

			</Container>
		);
	}
}

export default CampaignNew