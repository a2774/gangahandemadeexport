import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import InquiryModal from './InquiryModal'

const Navbar = () => {
    const location = useLocation();
    const [isInquiryOpen, setIsInquiryOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to check if a link is active
    const isActive = (path: string) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Collection', path: '/collection' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <>
            <nav className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-lg border-b border-stone-100 px-6">
                <div className="max-w-7xl mx-auto h-20 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <img 
                            src="/logo/PNG%20Logo.png" 
                            alt="Ganga Logo" 
                            className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="flex flex-col text-left">
                            <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-[#c5a059]">GANGA</span>
                            <span className="text-[8px] md:text-[10px] tracking-[0.3em] font-medium text-stone-400 uppercase -mt-1">Handmade Export</span>
                        </div>
                    </Link>

                    {/* Desktop/Tablet Links */}
                    <div className="hidden sm:flex gap-5 md:gap-8 lg:gap-10 text-[9px] md:text-[10px] lg:text-[11px] font-bold tracking-[0.2em] uppercase">
                        {navLinks.map(link => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                                className={`${isActive(link.path) ? 'text-[#c5a059]' : 'text-stone-600'} hover:text-[#c5a059] transition-all relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#c5a059] hover:after:w-full after:transition-all`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsInquiryOpen(true)}
                            className="hidden sm:block px-6 py-2 bg-[#2d2d2d] text-white text-[10px] font-bold uppercase tracking-widest hover:bg-[#c5a059] transition-all shadow-sm"
                        >
                            Enquire Now
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="sm:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] z-[110] relative"
                            aria-label="Toggle Menu"
                        >
                            <span className={`w-6 h-[1.5px] bg-stone-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
                            <span className={`w-6 h-[1.5px] bg-stone-800 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                            <span className={`w-6 h-[1.5px] bg-stone-800 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`sm:hidden fixed inset-0 top-[80px] bg-white/95 backdrop-blur-xl z-[100] transition-all duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <div className="px-8 py-8 flex flex-col gap-4 h-full border-t border-stone-100 overflow-y-auto">
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => { setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                                className={`text-xl font-serif tracking-wide transition-all duration-500 transform ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'} ${isActive(link.path) ? 'text-[#c5a059]' : 'text-stone-800'}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className={`mt-4 pt-6 border-t border-stone-100 transition-all duration-500 delay-[400ms] ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                            <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-4 font-bold">Inquiries</p>
                            <button
                                onClick={() => { setIsInquiryOpen(true); setIsMenuOpen(false); }}
                                className="w-full py-4 bg-[#c5a059] text-white text-xs font-bold uppercase tracking-widest shadow-lg shadow-[#c5a059]/20"
                            >
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <InquiryModal
                isOpen={isInquiryOpen}
                onClose={() => setIsInquiryOpen(false)}
            />
        </>
    );
};

export default Navbar;
