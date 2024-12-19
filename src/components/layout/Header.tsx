import MarqueeText from './MarqueeText';

const Header = () => {
    return (
        <div className="fixed top-0 z-50 w-full whitespace-nowrap overflow-hidden border-b border-neutral-200 bg-white bg-opacity-90 backdrop-blur-sm">
            <div className="relative flex items-center transform-gpu perspective-1000">
                <MarqueeText />
                <MarqueeText isSecondary />
            </div>
        </div>
    );
};

export default Header; 