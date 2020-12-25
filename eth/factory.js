// Preconfigured instance of CampaignFactory
import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const factory = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xCC0F8a34B0e4ce5baac80c50E5bB1E4042dDED67'
);

export default factory;