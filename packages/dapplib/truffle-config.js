require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gloom drive flock slush strong dash script assume give glimpse equal giggle'; 
let testAccounts = [
"0x9f409f6359be132989410b8250e6b9df83ec4167d3c20e82d65668ed561f14de",
"0x14630b7abafef3fccaf018ae4d66ac9abe62dd544d35d027f1b887506aa430f0",
"0x519be839456b02efa98dc9a9549a579d2e5ee003fae6c64ad1ea49fc9286b26d",
"0x8b4c5e10671b631b0b232259e25e264bfcee8a12209391e36dd1d5114a97cf1f",
"0xc4d0741c0c68b2dee244de929f593d8c0fc8b41fb8fbe2b2311efc9d09dd45da",
"0x8f6cf7bbfcfeba7a2b5a66d4ef7590d0a4e5c5aed74fc5216074aa16f6dd5a86",
"0x990dc03463216d4a1011a595216ba3955edb0b1ad90b7d45b41304be30208042",
"0xf96ed211312b38fe9090ffac304f9e285177c75831a3ace1e435b8ce3c1968fb",
"0x09de15fe713087a4df3a8a6392ef530df8a74d17b58170bf2536e00cc54c637e",
"0xaceae49c2163c65017da58cf88983964c0c443fe553acbb08026032c6132117c"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


