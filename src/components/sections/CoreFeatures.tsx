import { motion } from 'framer-motion';
import FeatureCard from '../ui/FeatureCard';

const features = [
    {
        title: "AI-Powered Meme Factory",
        description: "Create your own meme coin in minutes! Our AI-powered Meme Factory helps you generate unique tokens with custom smart contracts, tokenomics, and marketing materials - even if you don't have a specific idea in mind.",
    },
    {
        title: "Seamless Liquidity Addition",
        description: "Our smart contract, BuyAndAddLiquidity, streamlines the process of adding liquidity to Uniswap V2 pools. By simply sending ETH to the BuyAndAddLiquidity contract, you can seamlessly contribute to the liquidity of the IJC-WETH pool. The contract includes built-in slippage protection, ensuring secure and efficient transactions. This feature will be abled until the IJC bonus rewards are over.",
        links: [
            { text: "GitHub", href: "https://github.com/INFINITE-JEST-COIN/INFINITE-JEST-COIN-CONTRACTS/" },
            { text: "Basescan", href: "https://basescan.org/address/0x0000000000000000000000000000000000000000" }
        ]
    },
    {
        title: "Instant Bonus Rewards",
        description: "Receive a bonus of IJC tokens every time you add liquidity! Our contract rewards you with 10% of the IJC tokens you add to the pool, directly to your wallet. This feature will be abled until the IJC bonus rewards are over.",
        links: [
            { text: "GitHub", href: "https://github.com/INFINITE-JEST-COIN/INFINITE-JEST-COIN-CONTRACTS/" },
            { text: "Basescan", href: "https://basescan.org/address/0x0000000000000000000000000000000000000000" }
        ]
    },
    {
        title: "Transparent and Fair",
        description: "With IJC, what you see is what you get. Our contracts are open-source and available for anyone to review, ensuring transparency and fairness for all users.",
    },
    {
        title: "Community-Driven",
        description: "Infinite Jest Coin is more than just a currency. it's a community. Join us to build a vibrant and inclusive community of meme lovers and crypto enthusiasts.",
    }
];

const CoreFeatures = () => {
    return (
        <section className="px-6 py-20 bg-gradient-to-r from-purple-900/10 to-fuchsia-900/10 backdrop-blur-sm">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    className="text-4xl font-bold mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Core Features
                </motion.h2>

                <div className="grid md:grid-cols-1 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            links={feature.links}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreFeatures; 