import react from 'react'
import { Header, Menu, Button } from 'semantic-ui-react'
import Head from 'next/head'

export default () => {
    return (

        <Menu style={{ marginTop: '2em', marginBottom: '2em' }}>
            <Head>
                <link async rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                <script async src="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.js"></script>
            </Head>
            <Menu.Item>
                <Header as="h1">
                    CrowdCoin Kickstarter
                </Header>
            </Menu.Item>


            <Menu.Menu position="right">
                <Menu.Item>
                    <Button>
                        Campaigns
                    </Button>
                </Menu.Item>
                <Menu.Item>
                    < Button icon='add' />
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
}