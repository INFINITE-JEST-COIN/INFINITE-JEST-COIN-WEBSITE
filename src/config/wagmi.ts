import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { base } from 'viem/chains'
import { http } from 'wagmi'

export const config = getDefaultConfig({
    appName: 'Infinite Jest Coin',
    projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID,
    chains: [base],
    transports: {
        [base.id]: http()
    }
}) 