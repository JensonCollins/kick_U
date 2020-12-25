const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

const compiledFactory = require('./build/CampaignFactory.json');


const seedPhrase = 'tube odor target consider time veteran derive umbrella cherry inflict hat twelve';
// Can be used to generate many accounts, Has public and private keys, Sensitive information
const infuraEndpoint = 'https://kovan.infura.io/v3/19b85f951b5a4440923fa8f61eb27245';
// KOVAN TESTING FROM IFNURA: Endpint for performing the transaction on a specific network

const provider = new HDWalletProvider(seedPhrase, infuraEndpoint);
// Setting up the provider

const web3 = new Web3(provider);
// Ready to play with the test blockchain network

const deploy = async()=>{
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account ', accounts[0]);


    

    
    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });
    // Deploying the contract on the blockchain network
    
    
    return process.exit(1);
};

deploy();
// Calling outside as await can't be used only inside a function

// Deployed Contract address: '0xCC0F8a34B0e4ce5baac80c50E5bB1E4042dDED67'