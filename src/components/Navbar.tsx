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
                    <Link to="/" className="flex flex-col text-left group">
                        <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-[#c5a059]">GANGA</span>
                        <span className="text-[8px] md:text-[10px] tracking-[0.3em] font-medium text-stone-400 uppercase -mt-1">Handmade Export</span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex gap-10 text-[11px] font-bold tracking-[0.2em] uppercase">
                        {navLinks.map(link => (
                            <Link 
                                key={link.path}
                                to={link.path} 
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
                            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                        >
                            <span className={`w-6 h-0.5 bg-stone-800 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`w-6 h-0.5 bg-stone-800 transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
                            <span className={`w-6 h-0.5 bg-stone-800 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`lg:hidden fixed inset-0 top-20 bg-white z-[90] transition-all duration-500 overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 py-12 flex flex-col gap-8 text-center bg-stone-50 h-full border-t border-stone-100">
                        {navLinks.map(link => (
                            <Link 
                                key={link.path}
                                to={link.path} 
                                onClick={() => setIsMenuOpen(false)}
                                className={`text-2xl font-serif ${isActive(link.path) ? 'text-[#c5a059]' : 'text-stone-800'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button 
                            onClick={() => { setIsInquiryOpen(true); setIsMenuOpen(false); }}
                            className="mt-4 px-8 py-4 bg-[#c5a059] text-white text-xs font-bold uppercase tracking-widest"
                        >
                            Enquire Now
                        </button>
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
