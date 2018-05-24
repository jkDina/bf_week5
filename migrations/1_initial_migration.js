var Migrations = artifacts.require("./Migrations.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations, {from: '0xffe55ac97aa46decfa0e5ecad172ed4d0ae00d98'});
};
