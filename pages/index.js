import React, { Component } from 'react'
import factory from '../eth/factory'
import { Card, Button, Segment, Header, Container } from 'semantic-ui-react'
import Layout from '../components/Layouts'

class CampaignIndex extends Component {
  // specially for next.js, as this component cannot be executed on server-side
  static async getInitialProps() {
    const allCamp = await factory.methods.getDeployedCampaigns().call();

    return { allCamp };
  }


  renderCampaigns() {
    const items = this.props.allCamp.map(
      address => {
        return {
          header: address,
          description: <a>View Campaigns</a>,
          fluid: true,
        };
      }
    );
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Container>
        <Layout>
          < Button floated="right" content='Create a new campaign' icon='add circle' labelPosition='right' primary />
          {this.renderCampaigns()}
        </Layout>   
      </Container>
    );
  }
}

export default CampaignIndex;