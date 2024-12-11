function App() {
  return (
    <div className="relative min-h-screen w-full bg-white text-black font-sans overflow-hidden">
      {/* Infinite Background Symbol */}
      <div className="pointer-events-none absolute inset-0 flex justify-center items-center opacity-5">
        <div className="text-[30rem] leading-none animate-infiniteRotate select-none">
          ∞
        </div>
      </div>

      {/* Top Marquee */}
      <div className="w-full whitespace-nowrap overflow-x-hidden border-b border-neutral-200">
        <div className="animate-marquee py-2 flex items-center">
          <span className="mx-4 text-xl font-light uppercase tracking-widest">
            Infinite Jest Coin • The Loop Never Ends • Infinite Jest Coin • The Loop Never Ends
          </span>
          <span className="mx-4 text-xl font-light uppercase tracking-widest">
            Infinite Jest Coin • The Loop Never Ends • Infinite Jest Coin • The Loop Never Ends
          </span>
        </div>
      </div>

      {/* Hero / Intro */}
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-6">
        <h1 className="text-6xl sm:text-8xl font-extrabold text-center leading-tight">
          INFINITE JEST COIN
        </h1>
        <p className="mt-8 max-w-xl text-center text-xl text-neutral-700">
          A conceptual token embracing the eternal loop of digital culture.  
          No promises, no endpoints. Just the perpetual wink of a never-ending meme.
        </p>
      </section>

      {/* About / Philosophy */}
      <section className="px-6 py-20 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">The Idea</h2>
        <p className="text-lg text-neutral-800 leading-relaxed">
          Infinite Jest Coin draws from the cyclical nature of online humor. Memes rise, morph, and recede, 
          only to return in new guises. By tokenizing this loop, we embrace the notion that nothing truly ends, 
          it only begins again. Like a literary masterpiece teasing us infinitely, or a cosmic joke without a punchline.
        </p>
      </section>

      {/* The Loop Section */}
      <section className="relative px-6 py-20 max-w-3xl mx-auto text-center border-t border-b border-neutral-200">
        <h2 className="text-4xl font-bold mb-8">Embrace the Loop</h2>
        <p className="text-lg text-neutral-800 leading-relaxed mb-6">
          No roadmap. No final frontier. Just an infinite feedback loop.  
          We are here to remind you: the joke always continues.
        </p>
        <a 
          href="#" 
          className="inline-block mt-6 px-8 py-3 border-2 border-fuchsia-500 text-fuchsia-500 rounded-full font-semibold hover:bg-fuchsia-500 hover:text-white transition-colors"
        >
          Enter the Infinite
        </a>
      </section>

      {/* Closing Thoughts */}
      <section className="px-6 py-20 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Infinite Jest</h2>
        <p className="text-lg text-neutral-800 leading-relaxed">
          By simply existing, the Infinite Jest Coin acknowledges that our digital lives 
          are built on endless references, jokes, and cycles. Embrace the absurdity, for it’s 
          what makes us human—even when we’re laughing into the void.
        </p>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-neutral-500 border-t border-neutral-200">
        <p className="text-sm">
          © {new Date().getFullYear()} Infinite Jest Coin — The eternal loop that winks forever.
        </p>
      </footer>
    </div>
  );
}

export default App;
