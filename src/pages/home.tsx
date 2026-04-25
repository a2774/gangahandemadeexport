import { useState } from 'react'
import InquiryModal from '../components/InquiryModal'

interface Product {
    id: number
    name: string
    size: string
    image: string
    description: string
}

const imageModules = import.meta.glob('../../public/image/*.{jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' })
const productImages = Object.values(imageModules).map(url => (url as string).replace('../../public', '')) as string[]

const products: Product[] = productImages.map((image, idx) => ({
    id: idx + 1,
    name: `Design Number GHEAD${(idx + 1).toString().padStart(4, '0')}`,
    size: 'Multiple sizes available',
    image,
    description: 'This exquisite piece is a testament to traditional weaving techniques, meticulously handcrafted in Bhadohi. Using premium materials, it offers a perfect blend of modern aesthetics and timeless durability, suitable for any luxury interior.'
}))

function Home() {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
    const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false)

    return (
        <div className="min-h-screen bg-[#faf9f6] text-[#2d2d2d] selection:bg-[#c5a059] selection:text-white">
            {/* Hero Section */}

            {/* Hero Section */}
            <header className="pt-20 pb-8 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-[#c5a059] text-xs font-medium tracking-[0.4em] uppercase mb-3 animate-fade-in">Exquisite Craftsmanship</h2>
                    <h1 className="text-3xl md:text-4xl font-serif font-light leading-tight mb-4">
                        The Art of <span className="italic font-normal">Handmade</span> Elegance
                    </h1>
                    <p className="text-stone-500 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
                        Discover our exclusive collection of premium carpets and rugs, meticulously
                        handcrafted for the modern home. Available in all sizes and fully customizable to your specific requirements.
                    </p>
                    <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
                        <a href="#collection" className="px-8 py-3 bg-[#2d2d2d] text-white text-[10px] md:text-xs font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all">
                            Explore Collection
                        </a>
                    </div>
                </div>
            </header>

            {/* Collection Grid */}
            <section id="collection" className="py-20 px-6 max-w-[1400px] mx-auto">
                <div className="flex items-center justify-between mb-16 border-b border-stone-200 pb-8">
                    <div>
                        <h3 className="text-3xl font-serif">Custom Handcrafted Excellence</h3>
                        <p className="text-stone-400 mt-2 italic">
                            Made to order • Specialized in Bulk Export & Luxury Customization
                        </p>
                    </div>
                    <div className="text-sm font-medium text-stone-400">
                        Showing {products.length} unique designs
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group cursor-pointer flex flex-col h-full"
                            onClick={() => setSelectedProduct(product)}
                        >
                            <div className="relative aspect-[4/6] overflow-hidden bg-stone-100 shadow-sm transition-all duration-500 hover:shadow-2xl flex-shrink-0">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Overlay for desktop hover, but visible info on mobile */}
                                <div className="absolute inset-0 bg-black/10 sm:bg-black/20 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 sm:translate-y-4 sm:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <div className="w-full py-3 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] flex items-center justify-center hover:bg-[#c5a059] hover:text-white transition-colors shadow-lg">
                                        View Details
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 space-y-1 flex-grow">
                                <h4 className="text-sm font-medium tracking-tight group-hover:text-[#c5a059] transition-colors leading-tight">
                                    {product.name}
                                </h4>
                                <p className="text-[10px] text-stone-400 uppercase tracking-widest font-bold">
                                    Size: {product.size}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 bg-white px-6">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2 relative">
                        <div className="aspect-[4/5] bg-stone-100 overflow-hidden shadow-xl max-w-sm mx-auto md:ml-0">
                            <img
                                src={products[0]?.image}
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                alt="Craftsmanship"
                            />
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-[#c5a059] p-6 hidden lg:flex flex-col justify-center text-white shadow-lg">
                            <p className="text-xl font-serif italic mb-1 leading-tight">"Direct from Bhadohi."</p>
                            <p className="text-[9px] uppercase tracking-widest font-bold opacity-70">Legacy quality</p>
                        </div>
                    </div>
                    <div className="md:w-1/2 space-y-4">
                        <h2 className="text-[#c5a059] text-[10px] font-bold tracking-[0.4em] uppercase">Our Story</h2>
                        <h3 className="text-2xl md:text-3xl font-serif font-light leading-tight text-[#2d2d2d]">Tradition meets <br />modern luxury.</h3>
                        <div className="space-y-3">
                            <p className="text-stone-500 font-light leading-relaxed text-sm">
                                Ganga Handmade Export is a testament to the timeless art of Indian weaving.
                                Located in Bhadohi, we specialize in luxury rugs for high-end spaces globally.
                            </p>
                            <p className="text-stone-500 font-light leading-relaxed text-sm">
                                Our collection brings warmth and sophistication to any room
                                with meticulous attention to detail and zero compromise on quality.
                            </p>
                        </div>
                        <div className="pt-4 flex gap-8 border-t border-stone-100">
                            <div>
                                <p className="text-xl font-serif text-[#c5a059]">25+</p>
                                <p className="text-[9px] uppercase tracking-widest text-stone-400 font-bold">Years Experience</p>
                            </div>
                            <div>
                                <p className="text-xl font-serif text-[#c5a059]">10k+</p>
                                <p className="text-[9px] uppercase tracking-widest text-stone-400 font-bold">Designs Exported</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section & Footer moved to global component */}
            
            {/* Product Detail Modal */}
            {selectedProduct && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
                    <div
                        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                        onClick={() => setSelectedProduct(null)}
                    />
                    <div className="relative bg-white max-w-6xl w-full max-h-[90vh] overflow-y-auto flex flex-col md:flex-row shadow-2xl animate-in fade-in zoom-in duration-300">
                        <button
                            onClick={() => setSelectedProduct(null)}
                            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-[#c5a059] text-black hover:text-white flex items-center justify-center transition-colors text-2xl"
                        >
                            ×
                        </button>

                        <div className="md:w-1/2 bg-stone-100 flex items-center justify-center overflow-hidden">
                            <img
                                src={selectedProduct.image}
                                className="w-full h-full object-cover"
                                alt={selectedProduct.name}
                            />
                        </div>

                        <div className="md:w-1/2 p-10 flex flex-col justify-center space-y-8">
                            <div className="space-y-2">
                                <p className="text-[#c5a059] text-[10px] font-bold uppercase tracking-[0.4em]">Product Details</p>
                                <h3 className="text-4xl font-serif text-[#2d2d2d]">{selectedProduct.name}</h3>
                            </div>

                            <div className="space-y-4 text-stone-500 leading-relaxed">
                                <p className="text-lg">Classic Indian Craftsmanship</p>
                                <p>{selectedProduct.description}</p>
                            </div>

                            <div className="pt-8 border-t border-stone-100 space-y-6">
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-[#c5a059] font-bold mb-1">Available Sizes</p>
                                    <p className="text-stone-600">Standard & Custom dimensions available</p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button
                                        onClick={() => setIsInquiryModalOpen(true)}
                                        className="flex-1 px-8 py-4 bg-[#2d2d2d] text-white text-xs font-bold uppercase tracking-[0.2em] text-center hover:bg-[#c5a059] transition-all"
                                    >
                                        Get Price Quote
                                    </button>
                                    <a
                                        href={`https://wa.me/+916388287704?text=I am interested in ${selectedProduct.name}`}
                                        className="flex-1 px-8 py-4 bg-[#25D366] text-white text-xs font-bold uppercase tracking-[0.2em] text-center hover:bg-[#1ebc5a] transition-all flex items-center justify-center gap-2 shadow-lg"
                                    >
                                        Get on WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Inquiry Form Modal (Shared) */}
            <InquiryModal
                isOpen={isInquiryModalOpen}
                onClose={() => setIsInquiryModalOpen(false)}
                productName={selectedProduct?.name}
            />
        </div>
    )
}

export default Home