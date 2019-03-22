const MyStringStore = artifacts.require("MyStringStore");
const ContractCollaborationManager = artifacts.require("ContractCollaborationManager");
const DecisionLibrary = artifacts.require("DecisionLibrary");

module.exports = function (deployer) {
    deployer.deploy(MyStringStore);


    // Deploy library LibA, then link LibA to contract B, then deploy B.
    deployer.deploy(DecisionLibrary);
    deployer.link(DecisionLibrary, ContractCollaborationManager);
    deployer.deploy(ContractCollaborationManager);
};
