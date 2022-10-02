import React from 'react'
import { WagmiConfig } from 'wagmi'
import { wagmiClient } from './elements/wagmiClient'

function DApp(): JSX.Element {
  return <WagmiConfig client={wagmiClient}>{'aaaaa'}</WagmiConfig>
}

export default DApp
