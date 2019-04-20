const MyReceivingContract = artifacts.require('MyReceivingContract')

contract('MyReceivingContract', (accounts) => {
  const maintainer = accounts[0]
  const user1 = accounts[1]
  const user2 = accounts[2]

  let mrc

  beforeEach(async () => {
    mrc = await MyReceivingContract.new({from: maintainer})
  })

  describe('withStruct', () => {
    it('calls the function', async () => {
      const { logs } = await mrc.withStruct([1, 2, 3, [user1, user2], web3.utils.keccak256('test')])
      console.log('Calldata:', logs[0].args.data)
    })
  })

  describe('withParams', () => {
    it('calls the function', async () => {
      const { logs } = await mrc.withParams(1, 2, 3, [user1, user2], web3.utils.keccak256('test'))
      console.log('Calldata:', logs[0].args.data)
    })
  })
})
