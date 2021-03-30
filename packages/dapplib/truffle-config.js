require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glimpse flame traffic black deliver remain history idea close broken twenty'; 
let testAccounts = [
"0xbbcaa3d1312bad009c22ebab4242e9f14f8a91bc3022e1955d8334e58e3030c2",
"0xef103563e900a81c7b754c7a8078da88892085c3154b8c86612ffa9e810f7fd3",
"0x040eb7a4ad3fb2857c2ff2d389b7cad0214851d29ee2fd364c3abc5f8b21862e",
"0x83e707805c6e23e9727d67fd3e32b5be6c06ae59a88b7cada29527d1da6b33ed",
"0xef8edec407c3d4c567c9a30b10144384fd146999aed2467c8add41703b983d84",
"0x5b65a3d1c675847bdde50f8a0dda13c10c37e13877fa684c669bb8b506a533b4",
"0x9fa5abab8ca19c68460440f16e422812648b81b25cdc4f3c9be2d357f4e86017",
"0x20ffd0cce3e0f2b0ed5b602ac8792339ba0bd37518a3414d3a758b5131d3fb01",
"0xab10f69f271e16c8380b08c9f138584bc2d93b742ee8402266af97e19978c652",
"0x6ac466a1a62afc8f3fc76ff7d73c103f2ef00f1fd537e8f349cb301b4daf50d1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
