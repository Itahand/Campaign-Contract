const { expect } = require('chai');
const { ethers } = require('hardhat');
const { beforeEach } = require('mocha');

const provider = new ethers.providers.JsonRpcProvider();
const tokens = (n) => {
  // Helper function for decimals.
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

const decimals = (n) => {
  // Turn bigNumbers into readable numbers.
  return n / 1000000000000000000
}

describe('Campaign', () => {
  // Assigning global variables inside the function.
  let Campaign, accounts

  beforeEach(async () => {
    // Retreiving the Campaign
    const CampaignFactory = await ethers.getContractFactory('CampaignFactory')
    campaignFactory = await CampaignFactory.deploy()
    await campaignFactory.deployed();
    // Assigning addresses to accounts.
    accounts = await ethers.getSigners()
    manager = accounts[0]
    player1 = accounts[1]
    player2 = accounts[2]
  })

  describe('Deployment', () => {

    it('Deploys a new campaign correctly.')
  })

})