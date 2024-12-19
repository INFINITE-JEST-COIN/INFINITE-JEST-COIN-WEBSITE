import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-[100vh] pt-6 pb-2 animate-fadeIn">
            <motion.h1
                className="text-6xl sm:text-8xl font-extrabold text-center leading-tight"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                INFINITE JEST COIN
            </motion.h1>
            <motion.p
                className="mt-8 mx-auto max-w-4xl text-center text-xl text-neutral-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                A conceptual token embracing the eternal loop of digital culture, powered by AI-driven meme creation.
                No promises, no endpoints—just the perpetual evolution of memes, where anyone can become part
                of the never-ending story through our Meme Factory.
            </motion.p>

            <motion.h2
                className="text-4xl font-bold mb-8 mt-10"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                The Idea
            </motion.h2>
            <motion.p
                className="max-w-4xl mx-auto text-lg text-neutral-800 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                Infinite Jest Coin draws from the cyclical nature of online humor. Memes rise, morph, and recede,
                only to return in new guises. By tokenizing this loop, we embrace the notion that nothing truly ends,
                it only begins again. Like a literary masterpiece teasing us infinitely, or a cosmic joke without a punchline.
            </motion.p>
        </section>
    );
};

export default Hero; 