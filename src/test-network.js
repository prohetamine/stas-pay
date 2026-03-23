import { defineChain } from '@reown/appkit/networks'

const ip = '192.168.50.143'

export default [
  {
    network: defineChain({
      id: 31337,
      chainNamespace: 'eip155',
      name: 'networkTest',
      rpcUrls: {
        default: {
          http: [`http://${ip}:8545`],
        }
      },
      blockExplorers: {
        default: { name: 'networkTest', url: 'https://bscscan.com' },
      }
    }),
    token: '0x512F7469BcC83089497506b5df64c6E246B39925',
    publicRpc: `http://${ip}:8545`
  },
  {
    network: defineChain({
      id: 14188,
      chainNamespace: 'eip155',
      name: 'networkTest2',
      rpcUrls: {
        default: {
          http: [`http://${ip}:8546`],
        }
      },
      blockExplorers: {
        default: { name: 'networkTest2', url: 'https://polygonscan.com' },
      }
    }),
    token: '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',
    publicRpc: `http://${ip}:8546`
  },
  {
    network: defineChain({
      id: 97,
      chainNamespace: 'eip155',
      name: 'BSC Testnet',
      rpcUrls: {
        default: {
          http: [`https://bsc-testnet-rpc.publicnode.com`],
        }
      },
      blockExplorers: {
        default: { name: 'testnet.bscscan.com', url: 'https://testnet.bscscan.com' },
      }
    }),
    token: '0xD566886eB93500e2BA464bd48c8D5A2556569253',
    publicRpc: `https://bsc-testnet-rpc.publicnode.com`
  }
]