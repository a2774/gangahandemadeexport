import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            {/* Contact Section */}
            <section id="contact" className="py-12 bg-[#2d2d2d] text-white px-6 mt-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-[#c5a059] text-sm font-bold tracking-[0.4em] uppercase mb-6">Contact Us</h2>
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                        <div className="text-left space-y-4">
                            <h3 className="text-2xl font-serif font-light">Bring art into your space.</h3>
                            <p className="text-stone-400 font-light leading-relaxed text-sm">
                                For bulk orders, custom requirements, or export inquiries, reach out directly.
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-6 backdrop-blur-sm space-y-4 text-left">
                            <div>
                                <p className="text-[#c5a059] text-[10px] font-bold uppercase tracking-widest mb-1">WhatsApp / Call</p>
                                <p className="text-base font-light tracking-wide">+91 63882 87704, +91 82994 01248</p>
                            </div>
                            <div className="pt-3 border-t border-white/10">
                                <p className="text-[#c5a059] text-[10px] font-bold uppercase tracking-widest mb-1">Email Address</p>
                                <p className="text-base font-light underline decoration-[#c5a059]/30 break-all">gangahandmadeexport@gmail.com</p>
                            </div>
                            <div className="pt-3 border-t border-white/10">
                                <p className="text-[#c5a059] text-[10px] font-bold uppercase tracking-widest mb-1">Location</p>
                                <p className="text-stone-300 font-light text-xs">Bhadohi, Uttar Pradesh, India</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Footer Footer */}
            <footer className="py-10 px-6 border-t border-stone-200 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <Link to="/" className="flex flex-col items-center md:items-start group">
                        <span className="text-xl font-serif font-bold tracking-tight text-[#c5a059]">GANGA</span>
                        <span className="text-[8px] tracking-[0.3em] font-medium text-stone-400 uppercase -mt-1">Handmade Export</span>
                    </Link>
                    
                    <p className="text-stone-400 text-[10px] uppercase tracking-widest font-medium">
                        © {new Date().getFullYear()} Ganga Handmade Export. Handcrafted Excellence.
                    </p>
                    
                    <div className="flex gap-4">
                        <a href="https://wa.me/+916388287704" target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-stone-100 rounded-full flex items-center justify-center text-stone-400 hover:border-[#c5a059] hover:text-[#c5a059] transition-all text-[10px]">WA</a>
                        <a href="mailto:gangahandmadeexport@gmail.com" className="w-8 h-8 border border-stone-100 rounded-full flex items-center justify-center text-stone-400 hover:border-[#c5a059] hover:text-[#c5a059] transition-all text-[10px]">EM</a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
