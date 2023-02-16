import { ChainId } from 'parsec-swap-sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xfF6FD90A470Aaa0c1B8A54681746b07AcdFedc9B',
  [ChainId.TESTNET]: '0x566427a195ceB38eB045a8cA66051624a699079A',
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
