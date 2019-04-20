module.exports = {
  networks: {
    development: {
     host: "127.0.0.1",
     port: 8545,
     network_id: "*",
    }
  },
  mocha: {
    reporter: 'eth-gas-reporter',
    reporterOptions : {
      currency: 'USD'
    }
  },
  compilers: {
    solc: {
      version: "0.4.24",
      settings: {
       optimizer: {
         enabled: true,
         runs: 200
        },
      }
    }
  }
}
