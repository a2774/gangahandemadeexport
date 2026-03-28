import './App.css'

const imageModules = import.meta.glob('../public/image/*.{jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' })
const productImages = Object.values(imageModules).map(url => (url as string).replace('../public', '')) as string[]

const products = productImages.map((image, idx) => ({
  id: idx + 1,
  name: `Premium Collection #${idx + 1}`,
  size: '4x6 Feet',
  image,
}))

function App() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#2d2d2d] selection:bg-[#c5a059] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-serif font-bold tracking-tight text-[#c5a059]">GANGA</span>
            <span className="text-[10px] tracking-[0.3em] font-medium text-stone-400 uppercase -mt-1">Handmade Export</span>
          </div>
          <div className="hidden md:flex gap-10 text-sm font-medium tracking-wide uppercase">
            <a href="#" className="hover:text-[#c5a059] transition-colors">Home</a>
            <a href="#collection" className="hover:text-[#c5a059] transition-colors">Collection</a>
            <a href="#about" className="hover:text-[#c5a059] transition-colors">About</a>
            <a href="#contact" className="hover:text-[#c5a059] transition-colors">Contact</a>
          </div>
          <button className="px-6 py-2 bg-[#2d2d2d] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#c5a059] transition-all duration-300">
            Enquire Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[#c5a059] text-sm font-bold tracking-[0.4em] uppercase mb-4 animate-fade-in">Exquisite Craftsmanship</h2>
          <h1 className="text-5xl md:text-7xl font-serif font-light leading-tight mb-8">
            The Art of <span className="italic font-normal">Handmade</span> Elegance
          </h1>
          <p className="text-stone-500 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Discover our exclusive collection of premium carpets and rugs, meticulously
            handcrafted for the modern home. 4x6 sizes curated for timeless beauty.
          </p>
          <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">
            <a href="#collection" className="px-10 py-4 bg-[#2d2d2d] text-white text-sm font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all">
              Explore Collection
            </a>
          </div>
        </div>
      </header>

      {/* Collection Grid */}
      <section id="collection" className="py-20 px-6 max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between mb-16 border-b border-stone-200 pb-8">
          <div>
            <h3 className="text-3xl font-serif">Signature 4x6 Series</h3>
            <p className="text-stone-400 mt-2">All pieces available for worldwide export</p>
          </div>
          <div className="text-sm font-medium text-stone-400">
            Showing {products.length} unique designs
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[4/6] overflow-hidden bg-stone-100 shadow-sm transition-all duration-500 group-hover:shadow-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="w-full py-3 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#c5a059] hover:text-white transition-colors">
                    View Details
                  </button>
                </div>
              </div>
              <div className="mt-6 space-y-1">
                <h4 className="text-sm font-medium tracking-tight group-hover:text-[#c5a059] transition-colors">
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
      <section id="about" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 relative space-y-4">
            <div className="aspect-[4/5] bg-stone-100 overflow-hidden shadow-2xl">
              <img
                src={products[0]?.image}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                alt="Craftsmanship"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-56 h-56 bg-[#c5a059] p-8 hidden lg:flex flex-col justify-center text-white">
              <p className="text-3xl font-serif italic mb-2">"Direct from Bhadohi."</p>
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">Legacy Export quality</p>
            </div>
          </div>
          <div className="md:w-1/2 space-y-8">
            <h2 className="text-[#c5a059] text-sm font-bold tracking-[0.4em] uppercase">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-light leading-tight text-[#2d2d2d]">Tradition meets <br />modern luxury.</h3>
            <p className="text-stone-500 font-light leading-relaxed text-lg">
              Ganga Handmade Export is more than a brand; it's a testament to the timeless art of Indian weaving.
              Based in the legendary carpet hub of Bhadohi, we specialize in high-end, handcrafted rugs that
              adorn the finest spaces globally.
            </p>
            <p className="text-stone-500 font-light leading-relaxed text-lg">
              Our 4x6 collection is designed for versatility, bringing warmth and sophistication to any room
              with meticulous attention to detail and zero compromise on quality.
            </p>
            <div className="pt-8 flex gap-12 border-t border-stone-100">
              <div>
                <p className="text-3xl font-serif text-[#c5a059]">25+</p>
                <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-[#c5a059]">10k+</p>
                <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Designs Exported</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-[#2d2d2d] text-white px-6 mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[#c5a059] text-sm font-bold tracking-[0.4em] uppercase mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <h3 className="text-4xl font-serif font-light">Bring art into your space.</h3>
              <p className="text-stone-400 font-light leading-relaxed">
                For bulk orders, custom requirements, or export inquiries, please reach out to our team directly.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-10 backdrop-blur-sm space-y-6 text-left">
              <div>
                <p className="text-[#c5a059] text-[10px] font-bold uppercase tracking-widest mb-2">WhatsApp / Call</p>

                <p className="text-xl font-light">+91 63882 87704</p>
              </div>
              <div className="pt-6 border-t border-white/10">
                <p className="text-[#c5a059] text-[10px] font-bold uppercase tracking-widest mb-2">Email Address</p>
                <p className="text-xl font-light underline decoration-[#c5a059]/30">gangahandmadeexport@gmail.com</p>
              </div>
              <div className="pt-6 border-t border-white/10">
                <p className="text-[#c5a059] text-[10px] font-bold uppercase tracking-widest mb-2">Location</p>
                <p className="text-stone-300 font-light">Bhadohi, Uttar Pradesh, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-stone-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xl font-serif font-bold tracking-tight text-[#c5a059]">GANGA</span>
            <span className="text-[8px] tracking-[0.3em] font-medium text-stone-400 uppercase -mt-1">Handmade Export</span>
          </div>
          <p className="text-stone-400 text-[10px] uppercase tracking-widest font-medium">
            © 2026 Ganga Handmade Export. Handcrafted Excellence.
          </p>
          <div className="flex gap-6">
            {/* Social Placeholder icons */}
            {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 border border-stone-200 rounded-full flex items-center justify-center text-stone-400 hover:border-[#c5a059] hover:text-[#c5a059] cursor-pointer transition-colors text-xs">•</div>)}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

