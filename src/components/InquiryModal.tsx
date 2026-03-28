import React, { useState, useEffect } from 'react';

interface InquiryModalProps {
    isOpen: boolean;
    onClose: () => void;
    productName?: string;
}

const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose, productName }) => {
    const [inquiryData, setInquiryData] = useState({ name: '', email: '', phone: '', message: '' });

    // Pre-fill message if product name exists
    useEffect(() => {
        if (productName) {
            setInquiryData(prev => ({
                ...prev,
                message: `I am interested in ${productName}. Please provide more details.`
            }));
        } else {
            setInquiryData(prev => ({
                ...prev,
                message: `Hello Ganga Handmade Export! I have a general inquiry about your products.`
            }));
        }
    }, [productName, isOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = productName ? `Inquiry for ${productName}` : "General Inquiry";
        const waMessage = `✨ *${subject}* ✨\n\n👤 *Name:* ${inquiryData.name}\n📧 *Email:* ${inquiryData.email}\n📞 *Phone:* ${inquiryData.phone}\n\n📝 *Inquiry:* ${inquiryData.message}`;
        const waUrl = `https://wa.me/916388287704?text=${encodeURIComponent(waMessage)}`;
        window.open(waUrl, '_blank');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-md"
                onClick={onClose}
            />
            <div className="relative bg-[#faf9f6] max-w-lg w-full p-6 md:p-12 shadow-2xl border border-stone-200 animate-in fade-in slide-in-from-bottom-5 duration-300">
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-stone-400 hover:text-black text-2xl"
                >
                    ×
                </button>
                
                <div className="text-center mb-8 space-y-2">
                    <h3 className="text-2xl font-serif">{productName ? 'Product Inquiry' : 'General Inquiry'}</h3>
                    <p className="text-stone-400 text-[10px] uppercase tracking-[0.3em] font-bold">Expect a quick response on WhatsApp</p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-[#c5a059]">Full Name</label>
                        <input 
                            required
                            type="text" 
                            className="w-full bg-white border-b border-stone-200 py-3 px-0 focus:border-[#c5a059] outline-none transition-colors text-sm"
                            value={inquiryData.name}
                            onChange={(e) => setInquiryData({...inquiryData, name: e.target.value})}
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-[#c5a059]">Email Address</label>
                        <input 
                            required
                            type="email" 
                            className="w-full bg-white border-b border-stone-200 py-3 px-0 focus:border-[#c5a059] outline-none transition-colors text-sm"
                            value={inquiryData.email}
                            onChange={(e) => setInquiryData({...inquiryData, email: e.target.value})}
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-[#c5a059]">WhatsApp / Phone</label>
                        <input 
                            required
                            type="text" 
                            className="w-full bg-white border-b border-stone-200 py-3 px-0 focus:border-[#c5a059] outline-none transition-colors text-sm"
                            value={inquiryData.phone}
                            onChange={(e) => setInquiryData({...inquiryData, phone: e.target.value})}
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-[#c5a059]">Requirement Details</label>
                        <textarea 
                            rows={3}
                            className="w-full bg-white border-b border-stone-200 py-3 px-0 focus:border-[#c5a059] outline-none transition-colors text-sm resize-none"
                            value={inquiryData.message}
                            onChange={(e) => setInquiryData({...inquiryData, message: e.target.value})}
                        />
                    </div>
                    
                    <button 
                        type="submit"
                        className="w-full py-4 bg-[#25D366] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#1ebc5a] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                    >
                        Send WhatsApp Inquiry
                    </button>
                </form>
            </div>
        </div>
    );
};

export default InquiryModal;
