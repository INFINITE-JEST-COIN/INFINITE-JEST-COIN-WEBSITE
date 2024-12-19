import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useSendTransaction, useReadContract } from 'wagmi'
import { parseEther } from 'viem'
import { pairAbi } from '../../abis/pair';
import { ijcAbi } from '../../abis/ijc';

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
    const [currentPrice, setCurrentPrice] = useState(0);

    const { data: reserves }: { data: any } = useReadContract({
        abi: pairAbi,
        address: import.meta.env.VITE_PAIR_CONTRACT_ADDRESS || "",
        functionName: 'getReserves',
    })

    const { data: totalBonusReward }: { data: any } = useReadContract({
        abi: ijcAbi,
        address: import.meta.env.VITE_IJC_CONTRACT_ADDRESS || "",
        functionName: 'balanceOf',
        args: [import.meta.env.VITE_BUY_AND_ADD_LIQUIDITY_CONTRACT_ADDRESS || ""],
    })

    const { sendTransaction } = useSendTransaction()

    const buyAndAddLiquidity = () => {
        sendTransaction({
            to: import.meta.env.VITE_BUY_AND_ADD_LIQUIDITY_CONTRACT_ADDRESS || "",
            value: parseEther(ethAmount),
        })
    }

    useEffect(() => {
        if (reserves) {
            setCurrentPrice(Number(reserves[1]) / Number(reserves[0]));
        }
    }, [reserves])

    const renderAddressWithIcon = (address: string, label: string) => (
        <div className="flex items-center justify-between py-2">
            <div className="text-sm text-neutral-600">
                <span className="font-medium mr-2">{label}:</span>
                <span className="font-mono text-xs">{address.slice(0, 6)}...{address.slice(-4)}</span>
            </div>
            <a
                href={`https://${import.meta.env.VITE_CHAIN_ID === '8453' ? 'basescan.org' : 'sepolia.basescan.org'}/address/${address}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fuchsia-500 hover:text-fuchsia-600"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                </svg>
            </a>
        </div>
    );

    const bonusRate = 0.1;

    useEffect(() => {
        if (ethAmount && !isNaN(Number(ethAmount))) {
            const eth = Number(ethAmount);
            const ijcAmount = eth / currentPrice;
            const bonusAmount = ijcAmount * bonusRate;

            setCalculations({
                ijcAmount: ijcAmount.toFixed(2),
                bonusAmount: bonusAmount.toFixed(2),
                liquidityAdded: eth.toFixed(4)
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
                className="bg-white rounded-xl p-8 max-w-md w-full mx-4 relative overflow-y-auto max-h-[90vh]"
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-fuchsia-600">Add Liquidity & Get Bonus IJC</h3>
                    <button
                        onClick={onClose}
                        className="text-neutral-500 hover:text-neutral-700"
                    >
                        ✕
                    </button>
                </div>

                <div className="space-y-6">
                    {/* Current Price and Bonus Info */}
                    <div className="bg-neutral-50 p-4 rounded-lg space-y-1">
                        {renderAddressWithIcon(import.meta.env.VITE_IJC_CONTRACT_ADDRESS || "", "IJC Token")}
                        {renderAddressWithIcon(import.meta.env.VITE_PAIR_CONTRACT_ADDRESS || "", "LP Pair")}
                        {renderAddressWithIcon(import.meta.env.VITE_BUY_AND_ADD_LIQUIDITY_CONTRACT_ADDRESS || "", "Buy Contract")}
                    </div>
                    <div className="bg-fuchsia-50 p-4 rounded-lg space-y-2">
                        <p className="text-sm text-fuchsia-600">
                            Current Price: {currentPrice} ETH
                        </p>
                        <p className="text-sm text-fuchsia-600">
                            Total Bonus Reward: {(Number(totalBonusReward) / 10 ** 18).toFixed(0)} IJC
                        </p>
                    </div>

                    {/* Input Field */}
                    <div className="space-y-2">
                        <label className="text-sm text-neutral-600">Amount (BASE-ETH)</label>
                        <input
                            type="number"
                            value={ethAmount}
                            min={0}
                            onChange={(e) => setEthAmount(e.target.value)}
                            placeholder="0.0"
                            className="w-full p-4 border-2 border-fuchsia-200 rounded-lg focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 transition-all"
                        />
                    </div>

                    {/* Calculations Display */}
                    {ethAmount && !isNaN(Number(ethAmount)) && (
                        <div className="space-y-3 bg-neutral-50 p-4 rounded-lg">
                            <p className="text-sm text-neutral-600">
                                Bonus tokens: <span className="text-fuchsia-600 font-semibold">{calculations.bonusAmount} IJC</span>
                            </p>
                            <p className="text-sm text-neutral-600">
                                Liquidity added: <span className="text-fuchsia-600 font-semibold">{calculations.liquidityAdded} ETH</span>
                                &nbsp;&&nbsp;
                                <span className="text-fuchsia-600 font-semibold">{calculations.ijcAmount} IJC</span>
                            </p>
                        </div>
                    )}

                    {/* Buy Button */}
                    <motion.button
                        className="w-full px-6 py-3 bg-fuchsia-500 text-white rounded-full font-semibold shadow-lg hover:bg-fuchsia-600 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={buyAndAddLiquidity}
                    >
                        Add Liquidity
                    </motion.button>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default BuyModal;