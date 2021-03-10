// @flow
'use strict'

const { EVMRevert } = require('./utils')
const USDToken = artifacts.require('./USDToken.sol')

const BigNumber = web3.BigNumber

contract('MANACrowdsale', function([owner, holder]) {
  let token

  beforeEach(async function() {
    token = await USDToken.new()
  })

  it('cannot burn tokens while paused', async function() {
    await token.mint(holder, 1000)
    await token.pause()
    await token.burn(500, { from: holder }).should.be.rejectedWith(EVMRevert)

    await token.unpause()
    await token.burn(500, { from: holder }).should.be.fulfilled
  })
})
