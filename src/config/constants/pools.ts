import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  // {
  //   sousId: 1,
  //   stakingToken: tokens.mos,
  //   earningToken: tokens.busd,
  //   contractAddress: {
  //     1339: '0xbcDeC49AA67E395a5a7b4f4b9e345865E5902639',
  //     56: '0x36906B717b8FC162Dab884Dbe7d6f21557aa556e',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.01331',
  //   sortOrder: 1,
  //   isFinished: false,
  // },
  {
    sousId: 2,
    stakingToken: tokens.busd,
    earningToken: tokens.usdt,
    contractAddress: {
      1339:'0x35aFc743dFf2e5470CDCac823EcA5FC121E30e1a',
      56: '0xdc9a713ec043e58282460af4d02188bf5c5a0191',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.01331',
    sortOrder: 1,
    isFinished: false,
  },
  // {
  //   sousId: 6,
  //   stakingToken: tokens.mos,
  //   earningToken: tokens.mos,
  //   contractAddress: {
  //     1339: '0x59f380a0a2a700c3a9f1220df8f2c5710737d113',
  //     56: '0x36906B717b8FC162Dab884Dbe7d6f21557aa556e',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.01331',
  //   sortOrder: 1,
  //   isFinished: false,
  // },
]

export default pools
