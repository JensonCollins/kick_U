const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

const CampaignFactory = require('./build/CampaignFactory.json');




const seedPhrase = 'tube odor target consider time veteran derive umbrella cherry inflict hat twelve';
// Can be used to generate many accounts, Has public and private keys, Sensitive information
const infuraEndpoint = 'https://kovan.infura.io/v3/19b85f951b5a4440923fa8f61eb27245';
// KOVAN TESTING FROM IFNURA: Endpint for performing the transaction on a specific network

const provider = new HDWalletProvider(seedPhrase, infuraEndpoint);
// Setting up the provider

const web3 = new Web3(provider);
//



const factory = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xCC0F8a34B0e4ce5baac80c50E5bB1E4042dDED67'
);
//
// Ready to play with the test blockchain network







const deploy = async()=>{
    const accounts = await web3.eth.getAccounts();
    console.log('Account: ', accounts[0]);

    
    console.log(await factory.methods.getDeployedCampaigns().call());        
    
    
    // console.log(await factory.methods.createCampaign('0')
    // .send({
    //     from: accounts[0],
    //     gas: '1000000'
    // }));    
    
    
    console.log(await factory.methods.getDeployedCampaigns().call());        
    return process.exit(1);
};

deploy();
// Deployed Contract address: '0xCC0F8a34B0e4ce5baac80c50E5bB1E4042dDED67'