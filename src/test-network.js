import { defineChain } from '@reown/appkit/networks'

export default [
  {
    network: defineChain({
      id: 31337,
      chainNamespace: 'eip155',
      name: 'networkTest',
      rpcUrls: {
        default: {
          http: ['http://127.0.0.1:8545'],
        }
      }
    }),
    token: '0x512F7469BcC83089497506b5df64c6E246B39925',
    publicRpc: 'http://127.0.0.1:8545'
  },
  {
    network: defineChain({
      id: 14188,
      chainNamespace: 'eip155',
      name: 'networkTest2',
      rpcUrls: {
        default: {
          http: ['http://127.0.0.1:8546'],
        }
      }
    }),
    token: '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',
    publicRpc: 'http://127.0.0.1:8546'
  }
]