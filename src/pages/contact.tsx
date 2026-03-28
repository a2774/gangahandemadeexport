import { useState } from 'react'

const Contact = () => {
    const [formInquiry, setFormInquiry] = useState({ name: '', email: '', phone: '', company: '', message: '' })

    const handleInquiry = (e: React.FormEvent) => {
        e.preventDefault()
        const waMessage = `✨ *Corporate/Bulk Inquiry* ✨\n\n👤 *Name:* ${formInquiry.name}\n🏢 *Company:* ${formInquiry.company}\n📧 *Email:* ${formInquiry.email}\n📞 *Phone:* ${formInquiry.phone}\n\n📝 *Message:* ${formInquiry.message}`
        const waUrl = `https://wa.me/916388287704?text=${encodeURIComponent(waMessage)}`
        window.open(waUrl, '_blank')
    }

    return (
        <div className="min-h-screen bg-[#faf9f6] text-[#2d2d2d] selection:bg-[#c5a059] selection:text-white">
            {/* Hero Section */}
            <header className="pt-20 pb-20 px-6 text-center bg-stone-50">
                <div className="max-w-4xl mx-auto space-y-6">
                    <h2 className="text-[#c5a059] text-sm font-bold tracking-[0.4em] uppercase">Global Partnership</h2>
                    <h1 className="text-5xl md:text-7xl font-serif leading-tight">Connect with <span className="italic">Excellence</span></h1>
                    <p className="text-stone-500 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                        Whether you're looking for a single masterpiece or a bulk container for export, we are here to assist you with traditional Indian hospitality.
                    </p>
                </div>
            </header>

            {/* Contact Information & Services */}
            <main className="py-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
                {/* Left Side: Services & Detail */}
                <div className="space-y-16">
                    <section className="space-y-8">
                        <div className="space-y-2">
                            <h3 className="text-3xl font-serif">Bulk Export Services</h3>
                            <div className="w-16 h-1 bg-[#c5a059]" />
                        </div>
                        <p className="text-stone-500 leading-relaxed font-light text-lg">
                            Ganga Handmade Export is a trusted partner for international retailers, interior designers, and wholesalers.
                            We specialize in high-volume production while maintaining the rigorous quality standards that manual weaving requires.
                            From container loads to specialized boutique orders, we handle logistics with precision.
                        </p>
                    </section>

                    <section className="space-y-8">
                        <div className="space-y-2">
                            <h3 className="text-3xl font-serif">Bespoke Customization</h3>
                            <div className="w-16 h-1 bg-[#c5a059]" />
                        </div>
                        <p className="text-stone-500 leading-relaxed font-light text-lg">
                            Your requirements, our craftsmanship. We create custom sizes, unique patterns, and specific color palettes tailored exactly to your space.
                            If you have a specific design in mind, our artisans in Bhadohi will bring it to life on the loom, knot by knot.
                        </p>
                    </section>

                    {/* Direct Contact Cards */}
                    <div className="grid sm:grid-cols-2 gap-8 ring-1 ring-stone-200 p-8 bg-white shadow-sm">
                        <div className="space-y-4">
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#c5a059]">Direct Line</h4>
                            <p className="text-xl font-light text-[#2d2d2d]">+91 63882 87704</p>
                            <p className="text-xl font-light text-[#2d2d2d]">+91 82994 01248</p>
                            <p className="text-stone-400 text-xs uppercase tracking-widest">WhatsApp available 24/7</p>
                        </div>
                        <div className="space-y-4 border-l border-stone-100 pl-8">
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#c5a059]">Email Support</h4>
                            <p className="text-sm sm:text-base lg:text-lg font-light text-[#2d2d2d] break-all leading-tight">
                                gangahandmadeexport@gmail.com
                            </p>
                            <p className="text-stone-400 text-xs uppercase tracking-widest">Global Export Inquiries</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Professional Inquiry Form */}
                <div className="bg-white p-10 md:p-14 shadow-2xl border border-stone-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#c5a059]/5 blur-3xl rounded-full" />
                    <div className="relative space-y-10">
                        <div className="text-center space-y-2">
                            <h3 className="text-2xl font-serif uppercase tracking-wider">Business Inquiry</h3>
                            <p className="text-stone-400 text-[10px] uppercase tracking-[0.3em] font-bold">Expect a response within 24 hours</p>
                        </div>

                        <form onSubmit={handleInquiry} className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-[#c5a059]">Your Name</label>
                                    <input required type="text" value={formInquiry.name} onChange={(e) => setFormInquiry({ ...formInquiry, name: e.target.value })} className="w-full bg-transparent border-b border-stone-200 py-3 outline-none focus:border-[#c5a059] transition-colors text-sm" placeholder="Enter Your Name" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-[#c5a059]">Company Name</label>
                                    <input type="text" value={formInquiry.company} onChange={(e) => setFormInquiry({ ...formInquiry, company: e.target.value })} className="w-full bg-transparent border-b border-stone-200 py-3 outline-none focus:border-[#c5a059] transition-colors text-sm" placeholder="Enter Your Company Name" />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] uppercase tracking-widest font-bold text-[#c5a059]">WhatsApp / Contact</label>
                                <input required type="text" value={formInquiry.phone} onChange={(e) => setFormInquiry({ ...formInquiry, phone: e.target.value })} className="w-full bg-transparent border-b border-stone-200 py-3 outline-none focus:border-[#c5a059] transition-colors text-sm" placeholder="+1 / +91 ..." />
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] uppercase tracking-widest font-bold text-[#c5a059]">Requirement Details</label>
                                <textarea rows={4} required value={formInquiry.message} onChange={(e) => setFormInquiry({ ...formInquiry, message: e.target.value })} className="w-full bg-transparent border-b border-stone-200 py-3 outline-none focus:border-[#c5a059] transition-colors text-sm resize-none" placeholder="Enter bulk or custom requirements..."></textarea>
                            </div>

                            <button type="submit" className="w-full py-4 bg-[#2d2d2d] text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#c5a059] transition-all shadow-xl">
                                Send Corporate Inquiry
                            </button>

                            <p className="text-[10px] text-center text-stone-400 uppercase tracking-widest italic">
                                * All data is processed securely through our export department
                            </p>
                        </form>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-20 bg-stone-900 text-white mt-12 px-6">
                <div className="max-w-7xl mx-auto flex flex-col items-center space-y-12">
                    <div className="text-center space-y-2">
                        <span className="text-3xl font-serif font-bold tracking-tight text-[#c5a059]">GANGA</span>
                        <p className="text-[10px] tracking-[0.4em] font-medium text-stone-500 uppercase">Handmade Export | Since 1999</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full text-center text-sm font-light text-stone-400 border-y border-white/5 py-12">
                        <div className="space-y-4">
                            <h5 className="text-white text-xs font-bold uppercase tracking-widest">Location</h5>
                            <p>Bhadohi, Uttar Pradesh, India - 221301</p>
                        </div>
                        <div className="space-y-4">
                            <h5 className="text-white text-xs font-bold uppercase tracking-widest">Connect</h5>
                            <p>WhatsApp: +91 63882 87704 , +91 82994 01248<br />Email: gangahandmadeexport@gmail.com</p>
                        </div>
                        <div className="space-y-4">
                            <h5 className="text-white text-xs font-bold uppercase tracking-widest">Gallery</h5>
                            <p>Monday - Saturday<br />9:00 AM - 7:00 PM IST</p>
                        </div>
                    </div>
                    <p className="text-stone-600 text-[10px] uppercase tracking-[0.3em] font-bold">
                        © 2026 Ganga Handmade Export. Globally Respected Craftsmanship.
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Contact
