var HDWalletProvider = require("truffle-hdwallet-provider");r

var mnemonic = "<YOUR-MNEMONIC>";


module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/<INFURA-API-KEY>")
      },
      network_id: 4,
      gas: 4612388 // Gas limit used for deploys
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/<INFURA-API-KEY>")
      },
      network_id: 3,
      gas: 4612388 // Gas limit used for deploys
    },
    live: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/<INFURA-API-KEY>")
      },
      network_id: 1,
      gas: 4612388 // Gas limit used for deploys
    }
  }
};
