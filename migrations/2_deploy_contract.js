const casinoContract = artifacts.require("Casino.sol");



module.exports = function(deployer, network) {

  deployer.deploy(casinoContract,web3.toWei(0.1, 'ether'), {from: '0xffe55ac97aa46decfa0e5ecad172ed4d0ae00d98'});

};