import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen px-4 py-[100px] lg:py-6 sm:px-6 lg:px-8 animate-fadeIn">
            <motion.h1
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-center leading-tight"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                INFINITE JEST COIN
            </motion.h1>
            <motion.p
                className="mt-6 max-w-4xl text-center text-lg sm:text-xl md:text-2xl text-neutral-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                A conceptual token embracing the eternal loop of digital culture, powered by AI-driven meme creation.
                No promises, no endpoints—just the perpetual evolution of memes, where anyone can become part
                of the never-ending story through our Meme Factory.
            </motion.p>

            <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold mt-10 mb-6 text-center"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                The Idea
            </motion.h2>
            <motion.p
                className="max-w-4xl text-center text-base sm:text-lg md:text-xl text-neutral-800 leading-relaxed px-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                Infinite Jest Coin draws from the cyclical nature of online humor. Memes rise, morph, and recede,
                only to return in new guises. By tokenizing this loop, we embrace the notion that nothing truly ends,
                it only begins again. Like a literary masterpiece teasing us infinitely, or a cosmic joke without a punchline.
            </motion.p>

            <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold mt-10 mb-6 text-center"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                Introducing the Meme Factory
            </motion.h2>
            <motion.p
                className="max-w-4xl text-center text-base sm:text-lg md:text-xl text-neutral-800 leading-relaxed px-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                Our AI-powered Meme Factory allows you to create unique meme coins effortlessly. Customize your token with ease,
                from smart contract deployment to tailored tokenomics and captivating branding. Whether you're a seasoned
                crypto enthusiast or just starting out, the Meme Factory empowers you to bring your memetic vision to life.
            </motion.p>
        </section>
    );
};

export default Hero;