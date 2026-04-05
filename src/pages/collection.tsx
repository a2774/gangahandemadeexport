const imageModules = import.meta.glob('../../public/image/*.{jpg,jpeg,png,webp,avif}', { eager: true, query: '?url', import: 'default' })
const productImages = Object.values(imageModules).map(url => (url as string).replace('../../public', '')) as string[]

const Collection = () => {
    return (
        <div className="min-h-screen bg-[#faf9f6] pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Minimal Header */}
                <div className="mb-16 text-center">
                    <h1 className="text-4xl font-serif tracking-tight text-stone-800">Complete Gallery</h1>
                    <div className="w-12 h-px bg-[#c5a059] mx-auto mt-4" />
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {productImages.map((image, idx) => (
                        <div key={idx} className="space-y-4 group">
                            <div className="aspect-[4/5] overflow-hidden bg-stone-100 shadow-sm border border-stone-100 group-hover:shadow-xl transition-all duration-500">
                                <img 
                                    src={image} 
                                    alt={`GHEAD${(idx + 1).toString().padStart(4, '0')}`} 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    loading="lazy"
                                />
                            </div>
                            <div className="text-center">
                                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#c5a059]">Design Number GHEAD{(idx + 1).toString().padStart(4, '0')}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Collection
