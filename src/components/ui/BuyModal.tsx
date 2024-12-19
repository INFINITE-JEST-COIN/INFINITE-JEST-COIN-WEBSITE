import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface BuyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const BuyModal = ({ isOpen, onClose }: BuyModalProps) => {
    const [ethAmount, setEthAmount] = useState<string>('');
    const [calculations, setCalculations] = useState({
        ijcAmount: '0',
        bonusAmount: '0',
        liquidityAdded: '0'
    });

    // Mock prices - replace with actual data from your smart contract
    const mockData = {
        ijcPrice: 0.0001, // ETH
        totalBonusReward: 1000000, // IJC
        bonusRate: 0.1 // 10%
    };

    useEffect(() => {
        if (ethAmount && !isNaN(Number(ethAmount))) {
            const eth = Number(ethAmount);
            const ijcAmount = eth / mockData.ijcPrice;
            const bonusAmount = ijcAmount * mockData.bonusRate;
            const liquidityAdded = eth * 0.97; // Assuming 3% slippage

            setCalculations({
                ijcAmount: ijcAmount.toFixed(2),
                bonusAmount: bonusAmount.toFixed(2),
                liquidityAdded: liquidityAdded.toFixed(4)
            });
        }
    }, [ethAmount]);

    if (!isOpen) return null;

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="bg-white rounded-xl p-8 max-w-md w-full mx-4 relative"
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-fuchsia-600">Add Liquidity and Get Bonus IJC</h3>
                    <button
                        onClick={onClose}
                        className="text-neutral-500 hover:text-neutral-700"
                    >
                        ✕
                    </button>
                </div>

                <div className="space-y-6">
                    {/* Current Price and Bonus Info */}
                    <div className="bg-fuchsia-50 p-4 rounded-lg space-y-2">
                        <p className="text-sm text-fuchsia-600">
                            Current Price: {mockData.ijcPrice} ETH
                        </p>
                        <p className="text-sm text-fuchsia-600">
                            Total Bonus Reward: {mockData.totalBonusReward.toLocaleString()} IJC
                        </p>
                    </div>

                    {/* Input Field */}
                    <div className="space-y-2">
                        <label className="text-sm text-neutral-600">Amount (BASE-ETH)</label>
                        <input
                            type="number"
                            value={ethAmount}
                            onChange={(e) => setEthAmount(e.target.value)}
                            placeholder="0.0"
                            className="w-full p-4 border-2 border-fuchsia-200 rounded-lg focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 transition-all"
                        />
                    </div>

                    {/* Calculations Display */}
                    {ethAmount && !isNaN(Number(ethAmount)) && (
                        <div className="space-y-3 bg-neutral-50 p-4 rounded-lg">
                            <p className="text-sm text-neutral-600">
                                You will receive: <span className="text-fuchsia-600 font-semibold">{calculations.ijcAmount} IJC</span>
                            </p>
                            <p className="text-sm text-neutral-600">
                                Bonus tokens: <span className="text-fuchsia-600 font-semibold">{calculations.bonusAmount} IJC</span>
                            </p>
                            <p className="text-sm text-neutral-600">
                                Liquidity added: <span className="text-fuchsia-600 font-semibold">{calculations.liquidityAdded} ETH</span>
                            </p>
                        </div>
                    )}

                    {/* Buy Button */}
                    <motion.button
                        className="w-full px-6 py-3 bg-fuchsia-500 text-white rounded-full font-semibold shadow-lg hover:bg-fuchsia-600 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Add Liquidity
                    </motion.button>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default BuyModal;