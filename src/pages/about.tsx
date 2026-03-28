const About = () => {
    return (
        <div className="min-h-screen bg-[#faf9f6] text-[#2d2d2d] selection:bg-[#c5a059] selection:text-white">
            {/* Hero Section */}
            <header className="pt-48 pb-24 px-6 bg-stone-100">
                <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-8">
                    <h2 className="text-[#c5a059] text-sm font-bold tracking-[0.4em] uppercase">Tradition & Craft</h2>
                    <h1 className="text-5xl md:text-7xl font-serif leading-tight">
                        Carpets & Rugs – <span className="italic">A Timeless Piece of Art</span>
                    </h1>
                    <div className="w-24 h-px bg-[#c5a059] mx-auto" />
                </div>
            </header>

            {/* Introduction Section */}
            <section className="py-24 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2 space-y-6">
                    <h3 className="text-3xl font-serif">Introduction</h3>
                    <p className="text-stone-500 text-lg leading-relaxed font-light">
                        Carpets and rugs are more than just floor coverings — they are timeless works of art that reflect culture, craftsmanship, and tradition. 
                        Each handmade carpet carries the story of skilled artisans who dedicate months, sometimes years, to create a single masterpiece.
                    </p>
                </div>
                <div className="lg:w-1/2 overflow-hidden shadow-2xl">
                    <img 
                        src="/about/image/about1.jpg" 
                        alt="Artisan at work" 
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                    />
                </div>
            </section>

            {/* Difference Section */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <h3 className="text-3xl font-serif">What is the Difference Between Carpet and Rug?</h3>
                    <div className="grid md:grid-cols-2 gap-12 text-left">
                        <div className="p-8 border border-stone-100 bg-stone-50">
                            <h4 className="text-[#c5a059] font-bold uppercase tracking-widest text-xs mb-4">Carpet</h4>
                            <p className="text-stone-600 italic leading-relaxed">A large textile that covers the entire floor area.</p>
                        </div>
                        <div className="p-8 border border-stone-100 bg-stone-50">
                            <h4 className="text-[#c5a059] font-bold uppercase tracking-widest text-xs mb-4">Rug</h4>
                            <p className="text-stone-600 italic leading-relaxed">A smaller decorative piece used for specific spaces.</p>
                        </div>
                    </div>
                    <p className="text-stone-500 font-light italic">
                        Both serve functional and aesthetic purposes, enhancing the beauty of any interior.
                    </p>
                </div>
            </section>

            {/* History Section */}
            <section className="py-24 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-16">
                <div className="lg:w-1/2 space-y-8">
                    <h3 className="text-3xl font-serif font-light">History of Carpet Weaving</h3>
                    <div className="space-y-4 text-stone-500 leading-relaxed font-light">
                        <p className="border-l-4 border-[#c5a059] pl-6 py-2">The earliest known carpet, the Pazyryk Carpet, dates back over 2,500 years.</p>
                        <p>The craft originated in Persia, known for its intricate patterns.</p>
                        <p>In India, carpet weaving flourished during the Mughal era under Akbar.</p>
                        <p className="font-medium text-[#2d2d2d]">Today, regions like <span className="text-[#c5a059]">Bhadohi</span> are globally recognized for high-quality carpets.</p>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <div className="relative aspect-video shadow-2xl overflow-hidden">
                        <img 
                            src="/about/image/about2.avif" 
                            alt="Historical Craft" 
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                        />
                    </div>
                </div>
            </section>

            {/* Materials & Dye Section */}
            <section className="py-24 px-6 bg-[#2d2d2d] text-white">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
                    <div className="space-y-4">
                        <h4 className="text-3xl font-serif text-[#c5a059]">Wool</h4>
                        <p className="text-stone-400 font-light leading-relaxed">Durable, soft, and widely used. Ideal for everyday carpets.</p>
                    </div>
                    <div className="space-y-4 border-l border-white/10 pl-12">
                        <h4 className="text-3xl font-serif text-[#c5a059]">Silk</h4>
                        <p className="text-stone-400 font-light leading-relaxed">Luxurious and fine. Provides a rich shine and detailed design.</p>
                    </div>
                    <div className="space-y-4 border-l border-white/10 pl-12">
                        <h4 className="text-3xl font-serif text-[#c5a059]">Cotton</h4>
                        <p className="text-stone-400 font-light leading-relaxed">Used as a base foundation. Adds strength and structure.</p>
                    </div>
                </div>
                <div className="max-w-xl mx-auto mt-20 text-center border-t border-white/10 pt-10">
                    <h4 className="text-xs font-bold uppercase tracking-[0.4em] mb-4">Natural & Synthetic Dyes</h4>
                    <p className="text-stone-400 italic">Used to create vibrant and long-lasting colors which tell a story of their own.</p>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-20 space-y-4">
                    <h3 className="text-4xl font-serif">How Carpets Are Made</h3>
                    <p className="text-stone-400 uppercase tracking-widest text-[10px] font-bold">A meticulous 6-step journey</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {[
                        { step: "1", title: "Design Creation", desc: "A detailed pattern is drawn, often on graph paper, guiding the entire weaving process." },
                        { step: "2", title: "Yarn Preparation", desc: "Raw materials like wool or silk are cleaned, spun into yarn, and dyed." },
                        { step: "3", title: "Loom Setup", desc: "Threads are arranged on a loom to form the base structure." },
                        { step: "4", title: "Hand Knotting", desc: "Artisans tie each knot by hand. A single carpet may contain millions of knots." },
                        { step: "5", title: "Weaving & Tightening", desc: "The knots are secured tightly to ensure durability." },
                        { step: "6", title: "Finishing", desc: "The carpet is trimmed, washed, and polished to achieve its final look." }
                    ].map((item, idx) => (
                        <div key={idx} className="p-10 border border-stone-100 hover:border-[#c5a059]/30 transition-colors group">
                            <span className="text-4xl font-serif opacity-20 block mb-6 group-hover:text-[#c5a059] group-hover:opacity-100 transition-all">0{item.step}</span>
                            <h4 className="text-xl font-medium mb-4">{item.title}</h4>
                            <p className="text-stone-500 font-light text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Types & Art Section */}
            <section className="py-24 px-6 bg-stone-900 text-white overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
                    <div className="lg:w-1/2 space-y-12">
                        <h3 className="text-4xl font-serif text-[#c5a059]">Types of Carpets</h3>
                        <div className="space-y-8">
                            <div>
                                <h4 className="font-bold tracking-widest text-xs mb-2">Hand-Knotted</h4>
                                <p className="text-stone-400 text-sm font-light">Fully handmade. Premium quality. Highly artistic and long-lasting.</p>
                            </div>
                            <div>
                                <h4 className="font-bold tracking-widest text-xs mb-2">Hand-Tufted</h4>
                                <p className="text-stone-400 text-sm font-light">Made using tools. Faster production. More affordable.</p>
                            </div>
                            <div>
                                <h4 className="font-bold tracking-widest text-xs mb-2">Flat-Weave (Kilim)</h4>
                                <p className="text-stone-400 text-sm font-light">Lightweight and reversible. No knots used.</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <img 
                            src="/about/image/about3.jpg" 
                            className="w-full opacity-60 shadow-2xl" 
                            alt="Decorative Rug"
                        />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#c5a059] p-10 w-full max-w-sm text-center">
                            <h3 className="text-2xl font-serif text-white mb-4 italic">"A handmade carpet is a living expression of art."</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-stone-200">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-stone-400">
                    <div className="flex flex-col items-center md:items-start text-[#c5a059]">
                        <span className="text-xl font-serif font-bold tracking-tight">GANGA</span>
                        <span className="text-[8px] tracking-[0.3em] font-medium uppercase -mt-1">Handmade Export</span>
                    </div>
                    <p className="text-[10px] uppercase tracking-widest font-medium">
                        © 2026 Ganga Handmade Export. Handcrafted Excellence.
                    </p>
                    <div className="flex gap-6">
                        {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 border border-stone-200 rounded-full flex items-center justify-center text-stone-400 hover:border-[#c5a059] hover:text-[#c5a059] cursor-pointer transition-colors text-xs">•</div>)}
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default About
