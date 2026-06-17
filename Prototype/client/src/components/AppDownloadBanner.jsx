import { FaGooglePlay, FaApple } from 'react-icons/fa'
import { HiCheckCircle } from 'react-icons/hi'

export default function AppDownloadBanner() {
  return (
    <section className="section-container my-12">
      <div className="relative bg-gradient-green-dark rounded-3xl overflow-hidden px-8 py-10 md:py-12">
        {/* Background decorative circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left - Decorative icons */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">🛒</span>
            </div>
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center -mt-6">
              <span className="text-2xl">🍎</span>
            </div>
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mt-4">
              <span className="text-2xl">🥦</span>
            </div>
          </div>

          {/* Center - Text and features */}
          <div className="text-center lg:text-left flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Get the <span className="text-yellow-300">NatooKart</span> App
              <br />
              and <span className="text-yellow-300">Shop Smarter</span>
            </h3>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-white/90">
              <span className="flex items-center gap-1.5">
                <HiCheckCircle className="w-5 h-5 text-yellow-300" />
                Exclusive offers
              </span>
              <span className="flex items-center gap-1.5">
                <HiCheckCircle className="w-5 h-5 text-yellow-300" />
                Easy tracking
              </span>
              <span className="flex items-center gap-1.5">
                <HiCheckCircle className="w-5 h-5 text-yellow-300" />
                Made with ❤️ in India
              </span>
            </div>
          </div>

          {/* Right - Store badges */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
            <a
              href="#"
              className="flex items-center gap-3 bg-black hover:bg-gray-900 text-white rounded-xl px-5 py-3 transition-all duration-300 hover:scale-105"
            >
              <FaGooglePlay className="w-6 h-6" />
              <div>
                <div className="text-[10px] uppercase tracking-wider opacity-80">Get it on</div>
                <div className="text-sm font-semibold -mt-0.5">Google Play</div>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 bg-black hover:bg-gray-900 text-white rounded-xl px-5 py-3 transition-all duration-300 hover:scale-105"
            >
              <FaApple className="w-7 h-7" />
              <div>
                <div className="text-[10px] uppercase tracking-wider opacity-80">Download on the</div>
                <div className="text-sm font-semibold -mt-0.5">App Store</div>
              </div>
            </a>
          </div>

          {/* Right - Decorative */}
          <div className="hidden xl:flex items-center gap-3">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
              <span className="text-2xl">🛵</span>
            </div>
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center -mt-4">
              <span className="text-3xl">🛍️</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
