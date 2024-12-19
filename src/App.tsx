import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollToTopButton from './components/ScrollToTopButton';
import ParticleBackground from './components/ParticleBackground';
import GlowingInfinite from './components/GlowingInfinite';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [rotationSpeed, _setRotationSpeed] = useState(90); // in seconds per full rotation
  const [themeColor, _setThemeColor] = useState("#D946EF"); // Default fuchsia
  const [showMemeFactory, setShowMemeFactory] = useState(false);
  const [memeIdea, setMemeIdea] = useState('');
  const [isGeneratingMeme, _setIsGeneratingMeme] = useState(false);
  const [memeName, setMemeName] = useState('');
  const [memeSymbol, setMemeSymbol] = useState('');

  return (
    <div className="relative min-h-screen w-full bg-white text-black font-sans overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Infinite Background Symbol */}
      <div className="pointer-events-none fixed inset-0 flex justify-center items-center opacity-30 z-10">
        <GlowingInfinite color={themeColor} />
      </div>

      {/* Add decorative elements */}
      <motion.div
        className="top-20 left-20 w-32 h-32 rounded-full"
        style={{
          background: `radial-gradient(circle at center, ${themeColor}20 0%, transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      {/* Top Marquee - fixed */}
      <div className="fixed top-0 z-50 w-full whitespace-nowrap overflow-hidden border-b border-neutral-200 bg-white bg-opacity-90 backdrop-blur-sm">
        <div className="relative flex items-center transform-gpu perspective-1000">
          <motion.div
            className="flex py-3"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
            style={{
              transformStyle: "preserve-3d",
              transform: "translateZ(0)",
            }}
          >
            {[...Array(3)].map((_, index) => (
              <span key={index} className="text-xl font-light uppercase tracking-widest flex items-center bg-white">
                <motion.span
                  className="inline-block"
                  animate={{
                    rotateX: [0, 10, 0],
                    y: [0, -2, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                >
                  Infinite Jest Coin
                </motion.span>
                <motion.span
                  className="inline-block mx-4"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.8, 1],
                    rotateY: [0, 180, 360]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                >
                  •
                </motion.span>
                <motion.span
                  className="inline-block"
                  animate={{
                    rotateX: [0, -10, 0],
                    y: [0, 2, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.4
                  }}
                >
                  The Loop Never Ends
                </motion.span>
                <motion.span
                  className="inline-block mx-4"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.8, 1],
                    rotateY: [0, 180, 360]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                >
                  •
                </motion.span>
              </span>
            ))}
          </motion.div>
          <motion.div
            className="absolute top-0 left-full flex py-3"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
            style={{
              transformStyle: "preserve-3d",
              transform: "translateZ(0)",
            }}
          >
            {[...Array(3)].map((_, index) => (
              <span key={index} className="text-xl font-light uppercase tracking-widest flex items-center bg-white">
                <motion.span
                  className="inline-block"
                  animate={{
                    rotateX: [0, 10, 0],
                    y: [0, -2, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                >
                  Infinite Jest Coin
                </motion.span>
                <motion.span
                  className="inline-block mx-4"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.8, 1],
                    rotateY: [0, 180, 360]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                >
                  •
                </motion.span>
                <motion.span
                  className="inline-block"
                  animate={{
                    rotateX: [0, -10, 0],
                    y: [0, 2, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.4
                  }}
                >
                  The Loop Never Ends
                </motion.span>
                <motion.span
                  className="inline-block mx-4"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.8, 1],
                    rotateY: [0, 180, 360]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                >
                  •
                </motion.span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Hero / Intro */}
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-6 animate-fadeIn">
        <motion.h1
          className="text-6xl sm:text-8xl font-extrabold text-center leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          INFINITE JEST COIN
        </motion.h1>
        <motion.p
          className="mt-8 max-w-xl text-center text-xl text-neutral-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          A conceptual token embracing the eternal loop of digital culture, powered by AI-driven meme creation.
          No promises, no endpoints—just the perpetual evolution of memes, where anyone can become part
          of the never-ending story through our Meme Factory.
        </motion.p>
      </section>

      {/* About / Philosophy */}
      <section className="px-6 py-20 max-w-3xl mx-auto text-center animate-fadeIn">
        <motion.h2
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          The Idea
        </motion.h2>
        <motion.p
          className="text-lg text-neutral-800 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Infinite Jest Coin draws from the cyclical nature of online humor. Memes rise, morph, and recede,
          only to return in new guises. By tokenizing this loop, we embrace the notion that nothing truly ends,
          it only begins again. Like a literary masterpiece teasing us infinitely, or a cosmic joke without a punchline.
        </motion.p>
      </section>

      {/* The Loop Section */}
      <section className="relative px-6 py-20 max-w-3xl mx-auto text-center border-t border-b border-neutral-200 animate-fadeIn">
        <motion.h2
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Embrace the Loop
        </motion.h2>
        <motion.p
          className="text-lg text-neutral-800 leading-relaxed mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          No roadmap. No final frontier. Just an infinite feedback loop.
          We are here to remind you: the joke always continues.
        </motion.p>
        <motion.button
          onClick={() => setShowModal(true)}
          className="inline-block mt-6 px-8 py-3 border-2 border-fuchsia-500 text-fuchsia-500 rounded-full font-semibold hover:bg-fuchsia-500 hover:text-white transition-colors transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Enter the Infinite
        </motion.button>
      </section>

      {/* Core Features */}
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
            {/* AI-Powered Meme Factory */}
            <motion.div
              className="bg-white/90 rounded-xl p-6 shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-fuchsia-600">AI-Powered Meme Factory</h3>
              <p className="text-lg text-neutral-800 leading-relaxed">
                Create your own meme coin in minutes! Our AI-powered Meme Factory helps you generate unique tokens with custom smart contracts, tokenomics, and marketing materials - even if you don't have a specific idea in mind.
              </p>
            </motion.div>

            {/* Seamless Liquidity Addition */}
            <motion.div
              className="bg-white/90 rounded-xl p-6 shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-fuchsia-600">Seamless Liquidity Addition</h3>
              <p className="text-lg text-neutral-800 leading-relaxed mb-4">
                Our smart contract, <strong>BuyAndAddLiquidity</strong>, automates the process of adding liquidity to Uniswap V2 pools. Effortlessly contribute to the liquidity of the IJC-WETH pool with built-in slippage protection for secure transactions.
              </p>
              <div className="flex gap-4 justify-end text-sm">
                <a
                  href="https://github.com/yourusername/your-repo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fuchsia-500 hover:text-fuchsia-600 flex items-center gap-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                  </svg>
                  GitHub
                </a>
                <a
                  href="https://etherscan.io/address/your-contract-address"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fuchsia-500 hover:text-fuchsia-600 flex items-center gap-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                  Etherscan
                </a>
              </div>
            </motion.div>

            {/* Instant Bonus Rewards */}
            <motion.div
              className="bg-white/90 rounded-xl p-6 shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-fuchsia-600">Instant Bonus Rewards</h3>
              <p className="text-lg text-neutral-800 leading-relaxed mb-4">
                Receive a bonus of IJC tokens every time you add liquidity! Our contract rewards you with 10% of the IJC tokens you add to the pool, directly to your wallet.
              </p>
              <div className="flex gap-4 justify-end text-sm">
                <a
                  href="https://github.com/yourusername/your-repo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fuchsia-500 hover:text-fuchsia-600 flex items-center gap-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                  </svg>
                  GitHub
                </a>
                <a
                  href="https://etherscan.io/address/your-contract-address"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fuchsia-500 hover:text-fuchsia-600 flex items-center gap-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                  Etherscan
                </a>
              </div>
            </motion.div>

            {/* Transparent and Fair */}
            <motion.div
              className="bg-white/90 rounded-xl p-6 shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-fuchsia-600">Transparent and Fair</h3>
              <p className="text-lg text-neutral-800 leading-relaxed">
                With IJC, what you see is what you get. Our contracts are open-source and available for anyone to review, ensuring transparency and fairness for all users.
              </p>
            </motion.div>

            {/* Community-Driven */}
            <motion.div
              className="bg-white/90 rounded-xl p-6 shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-fuchsia-600">Community-Driven</h3>
              <p className="text-lg text-neutral-800 leading-relaxed">
                Infinite Jest Coin is more than just a currency. it's a community. Join us to build a vibrant and inclusive community of meme lovers and crypto enthusiasts.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meme Factory */}
      <section className="px-6 py-20 bg-gradient-to-r from-fuchsia-100 to-purple-100" id="meme-factory">
        <div className="max-w-4xl mx-auto">
          <div className="relative inline-block w-full text-center">
            <motion.h2
              className="text-4xl font-bold mb-8 text-center inline-flex items-center gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Meme Factory
              <motion.span
                className="inline-block px-3 py-1 bg-fuchsia-500 text-white text-sm rounded-full font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                animate={{
                  y: [0, -4, 0],
                }}
                whileHover={{ scale: 1.05 }}
              >
                Coming Soon
              </motion.span>
            </motion.h2>
          </div>

          <motion.div
            className="bg-white/90 rounded-xl p-8 shadow-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-fuchsia-600 text-center">
              Create Your Own Meme Coin in 10 Minutes
            </h3>

            <div className="space-y-6">
              <div className="flex flex-col items-center gap-4">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    value={memeName}
                    onChange={(e) => setMemeName(e.target.value)}
                    placeholder="Token Name (e.g., Doge Coin)"
                    className="w-full p-4 border-2 border-fuchsia-200 rounded-lg focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 transition-all"
                  />
                  <input
                    type="text"
                    value={memeSymbol}
                    onChange={(e) => setMemeSymbol(e.target.value.toUpperCase())}
                    placeholder="Token Symbol (e.g., DOGE)"
                    className="w-full p-4 border-2 border-fuchsia-200 rounded-lg focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 transition-all"
                    maxLength={10}
                  />
                </div>

                <textarea
                  value={memeIdea}
                  onChange={(e) => setMemeIdea(e.target.value)}
                  placeholder="Enter your meme coin idea... or leave blank for AI suggestions"
                  className="w-full p-4 border-2 border-fuchsia-200 rounded-lg focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 transition-all"
                  rows={4}
                />

                <motion.button
                  onClick={() => setShowMemeFactory(true)}
                  className="px-8 py-3 bg-fuchsia-500 text-white rounded-full font-semibold shadow-lg hover:bg-fuchsia-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isGeneratingMeme}
                >
                  {isGeneratingMeme ? 'Generating...' : 'Generate Meme Coin'}
                </motion.button>
              </div>

              <p className="text-center text-neutral-600">
                Our AI-powered Meme Factory will help you create a unique meme coin with smart contract deployment,
                custom tokenomics, and basic marketing materials.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meme Factory Modal */}
      {showMemeFactory && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-xl p-8 max-w-2xl w-full mx-4 relative overflow-hidden"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Coming Soon Overlay */}
            <div className="absolute inset-0 bg-fuchsia-500/70 flex flex-col items-center justify-center z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <h3 className="text-4xl font-bold text-white mb-4">Coming Soon!</h3>
                <p className="text-white/90 text-lg max-w-md mx-auto">
                  Our AI-powered Meme Factory is being fine-tuned for maximum memetic potential.
                  Stay tuned for the launch!
                </p>
              </motion.div>
            </div>

            {/* Existing Modal Content (will be behind overlay) */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-fuchsia-600">Meme Factory Wizard</h3>
              <button
                onClick={() => setShowMemeFactory(false)}
                className="text-neutral-500 hover:text-neutral-700 z-20 relative"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6">
              <p className="text-neutral-600">
                Your meme coin is being created. This process includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-600">
                <li>Website creation</li>
                <li>Smart contract generation</li>
                <li>Tokenomics configuration</li>
                <li>Logo and basic branding</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Closing Thoughts */}
      <section className="px-6 py-20 max-w-3xl mx-auto text-center animate-fadeIn">
        <motion.h2
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Infinite Jest
        </motion.h2>
        <motion.p
          className="text-lg text-neutral-800 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          By simply existing, the Infinite Jest Coin acknowledges that our digital lives
          are built on endless references, jokes, and cycles. Embrace the absurdity, for it’s
          what makes us human—even when we’re laughing into the void.
        </motion.p>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-neutral-500 border-t border-neutral-200">
        <p className="text-sm">
          © {new Date().getFullYear()} Infinite Jest Coin — The eternal loop that winks forever.
        </p>
      </footer>

      {/* Modal */}
      {showModal && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowModal(false)}
        >
          <motion.div
            className="relative w-full h-full flex items-center justify-center overflow-hidden p-4 select-none"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Quantum Paradox Visual */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                animation: `infiniteRotateSlow ${rotationSpeed}s linear infinite`
              }}
            >
              <svg fill={themeColor} height="400px" width="400px" version="1.1" id="Layer_1"
                viewBox="0 0 512 512">
                <g>
                  <g>
                    <path d="M491.841,156.427c-19.471-45.946-51.937-85.013-92.786-112.637C358.217,16.166,308.893-0.007,256,0
			c-35.254-0.002-68.946,7.18-99.571,20.158C110.484,39.63,71.416,72.093,43.791,112.943C16.167,153.78-0.007,203.104,0,256
			c-0.002,35.255,7.181,68.948,20.159,99.573c19.471,45.946,51.937,85.013,92.786,112.637C153.783,495.834,203.107,512.007,256,512
			c35.253,0.002,68.946-7.18,99.571-20.158c45.945-19.471,85.013-51.935,112.638-92.785C495.834,358.22,512.007,308.894,512,256
			C512.002,220.745,504.819,187.052,491.841,156.427z M460.413,342.259c-16.851,39.781-45.045,73.723-80.476,97.676
			c-35.443,23.953-78.02,37.926-123.936,37.933c-30.619-0.002-59.729-6.218-86.255-17.454
			c-39.781-16.851-73.724-45.044-97.677-80.475C48.114,344.495,34.14,301.917,34.133,256c0.002-30.62,6.219-59.731,17.454-86.257
			c16.851-39.781,45.045-73.724,80.476-97.676C167.506,48.113,210.084,34.14,256,34.133c30.619,0.002,59.729,6.218,86.255,17.454
			c39.781,16.85,73.724,45.044,97.677,80.475c23.953,35.443,37.927,78.02,37.934,123.939
			C477.864,286.621,471.648,315.732,460.413,342.259z"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M433.11,223.51c-6.359-14.999-16.927-27.712-30.24-36.717c-6.657-4.502-14.011-8.076-21.864-10.524
			c-7.852-2.448-16.206-3.765-24.812-3.764c-12.362-0.011-24.036,2.613-34.69,6.984c-9.338,3.823-17.934,8.94-25.971,14.798
			c-14.059,10.268-26.501,22.793-38.382,35.605c-0.386,0.417-0.764,0.837-1.149,1.256c-0.083-0.091-0.166-0.183-0.249-0.274
			c-6.661-7.219-13.506-14.351-20.697-21.066c-10.79-10.06-22.363-19.233-35.455-26.079c-6.542-3.416-13.469-6.23-20.791-8.185
			c-7.318-1.956-15.027-3.04-23.007-3.038c-11.476-0.002-22.496,2.343-32.491,6.581c-14.999,6.359-27.712,16.927-36.717,30.24
			c-4.502,6.657-8.076,14.011-10.524,21.864c-2.448,7.852-3.765,16.206-3.764,24.812c-0.002,11.476,2.343,22.496,6.581,32.491
			c6.359,14.997,16.928,27.71,30.24,36.715c6.657,4.502,14.011,8.076,21.864,10.524c7.852,2.448,16.206,3.765,24.812,3.764
			c12.362,0.01,24.036-2.613,34.69-6.984c9.338-3.823,17.934-8.94,25.971-14.798c14.059-10.268,26.501-22.793,38.382-35.605
			c0.386-0.417,0.764-0.837,1.149-1.255c0.083,0.091,0.166,0.183,0.249,0.274c6.661,7.219,13.506,14.351,20.697,21.066
			c10.79,10.06,22.363,19.233,35.455,26.079c6.542,3.414,13.469,6.23,20.791,8.185c7.318,1.956,15.027,3.04,23.007,3.038
			c11.476,0.002,22.496-2.344,32.491-6.581c14.999-6.359,27.712-16.927,36.717-30.24c4.502-6.657,8.076-14.011,10.524-21.864
			c2.448-7.852,3.765-16.206,3.764-24.811C439.693,244.525,437.348,233.505,433.11,223.51z M231.208,258.483
			c-6.355,6.889-12.655,13.433-18.941,19.299c-9.426,8.813-18.817,16.044-28.117,20.884c-4.654,2.428-9.28,4.277-13.954,5.525
			c-4.678,1.247-9.406,1.905-14.391,1.907c-6.941-0.002-13.479-1.403-19.462-3.934c-8.968-3.795-16.665-10.183-22.079-18.195
			c-2.708-4.005-4.845-8.406-6.306-13.094c-1.461-4.69-2.251-9.666-2.251-14.873c0.002-6.941,1.403-13.479,3.934-19.461
			c3.795-8.967,10.183-16.665,18.196-22.079c4.004-2.708,8.406-4.845,13.096-6.306c4.69-1.461,9.666-2.251,14.873-2.251
			c7.708,0.01,14.84,1.562,22.044,4.497c6.287,2.569,12.592,6.242,18.941,10.873c11.116,8.086,22.275,19.114,33.553,31.311
			c1.039,1.122,2.085,2.278,3.127,3.418C232.718,256.826,231.961,257.668,231.208,258.483z M402.36,275.464
			c-3.795,8.968-10.183,16.665-18.196,22.079c-4.004,2.708-8.406,4.845-13.096,6.306c-4.69,1.461-9.666,2.251-14.873,2.251
			c-7.708-0.01-14.84-1.562-22.044-4.497c-6.287-2.569-12.592-6.242-18.941-10.873c-11.116-8.086-22.275-19.114-33.553-31.311
			c-1.039-1.122-2.085-2.279-3.127-3.418c0.754-0.825,1.511-1.667,2.263-2.481c6.355-6.889,12.655-13.433,18.941-19.299
			c9.426-8.813,18.817-16.044,28.117-20.884c4.654-2.428,9.28-4.277,13.954-5.525c4.678-1.247,9.406-1.905,14.391-1.907
			c6.941,0.002,13.479,1.403,19.462,3.934c8.968,3.795,16.665,10.183,22.079,18.196c2.708,4.005,4.845,8.406,6.306,13.094
			c1.461,4.69,2.251,9.666,2.251,14.873C406.293,262.942,404.892,269.48,402.36,275.464z"/>
                  </g>
                </g>
              </svg>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Scroll to Top Button */}
      <ScrollToTopButton />

      <div className="fixed right-2 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2">
        {/* Buy IJC Button */}
        <motion.button
          className="px-3 py-2 bg-fuchsia-500 text-white rounded-full font-semibold shadow-lg hover:bg-fuchsia-600 transition-colors"
          animate={{
            rotate: [0, -10, -5],
            x: [0, 5, 0],
            y: [0, -5, 0],
            transition: {
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }
          }}
          whileTap={{ scale: 0.95 }}
          // initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          Buy IJC
        </motion.button>

        {/* Enter App Button */}
        <a href="#meme-factory">
          <motion.button
            className="px-3 py-2 bg-fuchsia-500 text-white rounded-full font-semibold shadow-lg hover:bg-fuchsia-600 transition-colors"
            animate={{
              rotate: [0, -10, -5],
              x: [0, 5, 0],
              y: [0, -5, 0],
              transition: {
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
            whileTap={{ scale: 0.95 }}
            // initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            Create meme
          </motion.button>
        </a>
      </div>
    </div>
  );
}

export default App;
