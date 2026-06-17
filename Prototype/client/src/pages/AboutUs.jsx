import { Link } from 'react-router-dom'
import { FiTruck, FiShield, FiTag, FiHeadphones, FiCheckCircle, FiTarget, FiEye, FiHeart, FiUsers, FiStar, FiZap } from 'react-icons/fi'
import { HiCheckCircle } from 'react-icons/hi'
import AppDownloadBanner from '../components/AppDownloadBanner'

const whyChoose = [
  { icon: FiTruck, title: 'Lightning Fast Delivery', desc: 'Get your essentials delivered quickly from nearby stores in minutes.' },
  { icon: FiShield, title: 'Trusted Local Stores', desc: 'Shop confidently from verified and trusted neighbourhood businesses.' },
  { icon: FiTag, title: 'Best Prices Everyday', desc: 'Enjoy great value and unbeatable prices on everyday products.' },
  { icon: FiHeadphones, title: 'Customer First Support', desc: 'We are always here to help you with a seamless shopping experience.' },
]

const customerBenefits = [
  'Fresh products from local stores',
  'Faster delivery in your area',
  'Better prices and great offers',
  'Support your local community',
]

const storeBenefits = [
  'Reach more customers nearby',
  'Increase sales and grow business',
  'Easy digital order management',
  'Build long-term customer loyalty',
]

const values = [
  { icon: FiHeart, title: 'Community First', desc: 'We believe in strengthening local communities and supporting local businesses.' },
  { icon: FiEye, title: 'Transparency', desc: 'We follow honest practices and believe in complete transparency.' },
  { icon: FiStar, title: 'Reliability', desc: 'We are committed to delivering consistent and dependable service every day.' },
  { icon: FiZap, title: 'Innovation', desc: 'We use technology to simplify shopping and create better experiences for everyone.' },
]

export default function AboutUs() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden">
        {/* Decorative leaves */}
        <div className="absolute top-10 right-10 w-20 h-20 opacity-10 rotate-45">
          <svg viewBox="0 0 100 100" fill="none"><path d="M50 0C50 50 100 50 100 50C100 50 50 50 50 100C50 100 50 50 0 50C0 50 50 50 50 0Z" fill="#16a34a"/></svg>
        </div>
        <div className="absolute bottom-10 left-10 w-16 h-16 opacity-10">
          <svg viewBox="0 0 100 100" fill="none"><path d="M50 0C50 50 100 50 100 50C100 50 50 50 50 100C50 100 50 50 0 50C0 50 50 50 50 0Z" fill="#16a34a"/></svg>
        </div>

        <div className="section-container py-16 md:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="section-badge mb-6">
                <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
                SUPPORTING LOCAL BUSINESSES
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Empowering Local Stores,{' '}
                <span className="text-gradient-green">Delivering Everyday Convenience</span>
              </h1>
              <p className="text-lg text-gray-500 mb-8 max-w-lg leading-relaxed">
                NatooKart connects customers with trusted neighborhood stores, making shopping 
                faster, easier, and more affordable while helping local businesses grow digitally.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a href="#" className="btn-primary text-base px-8 py-3.5">
                  Download App
                </a>
                <Link to="/partner" className="btn-outline text-base px-8 py-3.5">
                  Become a Partner
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <HiCheckCircle className="w-5 h-5 text-primary-500" /> Exclusive Offers
                </span>
                <span className="flex items-center gap-1.5">
                  <HiCheckCircle className="w-5 h-5 text-primary-500" /> Easy Tracking
                </span>
                <span className="flex items-center gap-1.5">
                  <HiCheckCircle className="w-5 h-5 text-primary-500" /> Made in India
                </span>
              </div>
            </div>

            {/* Right - Phone Mockup */}
            <div className="relative flex justify-center animate-slide-in-right">
              <div className="relative w-72 md:w-80">
                <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-white rounded-[2.3rem] overflow-hidden">
                    <div className="h-[520px] bg-gradient-to-b from-primary-50 to-white p-4">
                      <div className="flex items-center gap-2 mb-3 px-1 pt-6">
                        <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs font-bold">NK</span>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-gray-800">NatooKart</p>
                          <p className="text-[9px] text-gray-400">📍 Ahmedabad, India</p>
                        </div>
                      </div>
                      <div className="bg-gray-100 rounded-xl px-3 py-2.5 mb-4 flex items-center gap-2">
                        <span className="text-xs text-gray-400">🔍 Search for products...</span>
                      </div>
                      <div className="bg-gradient-to-r from-primary-500 to-primary-400 rounded-xl p-4 mb-4 text-white">
                        <p className="text-xs font-bold mb-1">Fresh Picks</p>
                        <p className="text-lg font-extrabold">Great Savings!</p>
                        <p className="text-[10px] opacity-80 mt-1">Up to 30% Off</p>
                      </div>
                      <p className="text-xs font-semibold text-gray-800 mb-2">Categories</p>
                      <div className="grid grid-cols-4 gap-2 mb-4">
                        {['🍎', '🥛', '🍿', '🧴'].map((e, i) => (
                          <div key={i} className="bg-gray-50 rounded-lg p-2 flex flex-col items-center">
                            <span className="text-lg">{e}</span>
                            <span className="text-[8px] text-gray-500">{['Fruits', 'Dairy', 'Snacks', 'Care'][i]}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs font-semibold text-gray-800 mb-2">Best Deals Near You</p>
                      <div className="grid grid-cols-2 gap-2">
                        {[{ e: '🍌', n: 'Fresh Bananas', p: '₹39' }, { e: '🥛', n: 'Amul Milk', p: '₹56' }].map((pr, i) => (
                          <div key={i} className="bg-white rounded-xl border border-gray-100 p-2">
                            <div className="bg-gray-50 rounded-lg p-3 mb-2 text-center"><span className="text-2xl">{pr.e}</span></div>
                            <p className="text-[10px] font-medium text-gray-800">{pr.n}</p>
                            <p className="text-xs font-bold text-primary-600">{pr.p}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 opacity-5">
          <svg viewBox="0 0 100 100" fill="none"><path d="M50 0C50 50 100 50 100 50C100 50 50 50 50 100C50 100 50 50 0 50C0 50 50 50 50 0Z" fill="#16a34a"/></svg>
        </div>
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-card">
                <div className="bg-gradient-to-br from-primary-100 via-primary-50 to-yellow-50 p-12 flex items-center justify-center min-h-[400px]">
                  <div className="text-center">
                    <div className="text-7xl mb-4">🏪</div>
                    <div className="flex items-center justify-center gap-3 mb-3">
                      <span className="text-5xl">👨‍💼</span>
                      <span className="text-3xl">🤝</span>
                      <span className="text-5xl">👩‍💻</span>
                    </div>
                    <p className="text-primary-700 font-semibold text-sm mt-4">Bridging Local Stores & Customers</p>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-3 animate-bounce-gentle">
                <div className="flex items-center gap-2">
                  <span className="text-xl">💚</span>
                  <span className="text-xs font-semibold text-gray-700">100% Local</span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-primary-600 tracking-wider uppercase mb-3">OUR STORY</p>
              <h2 className="section-title mb-6">
                Built For <span className="green-accent">Local Communities</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                NatooKart was created to help local stores compete in the digital world while giving 
                customers the convenience of online shopping from nearby trusted businesses.
              </p>
              <p className="text-gray-500 leading-relaxed">
                We believe local commerce is the backbone of every community, and technology 
                should help it thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-natoo-lightgray">
        <div className="section-container">
          <p className="text-center text-sm font-semibold text-primary-600 tracking-wider uppercase mb-3">OUR MISSION & VISION</p>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="card p-8 text-center hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FiTarget className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-500 leading-relaxed">
                To empower local businesses and provide customers with a smarter, faster and more 
                affordable shopping experience.
              </p>
            </div>
            <div className="card p-8 text-center hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FiEye className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-500 leading-relaxed">
                To become India's most trusted hyperlocal commerce platform, strengthening neighbourhood 
                economies one order at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose NatooKart */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <p className="text-center text-sm font-semibold text-primary-600 tracking-wider uppercase mb-3">WHY CHOOSE NATOOKART</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {whyChoose.map((item) => (
              <div key={item.title} className="card p-6 text-center hover:-translate-y-1">
                <div className="feature-icon-box mx-auto mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting Local Businesses */}
      <section className="section-padding bg-natoo-lightgray">
        <div className="section-container">
          <p className="text-center text-sm font-semibold text-primary-600 tracking-wider uppercase mb-2">SUPPORTING LOCAL BUSINESSES</p>
          <div className="grid md:grid-cols-2 gap-10 mt-10">
            {/* Benefits for Customers */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Benefits for <span className="green-accent">Customers</span>
              </h3>
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-primary-50 to-yellow-50 p-8 mb-6 flex items-center justify-center min-h-[200px]">
                <div className="text-center">
                  <span className="text-6xl">🛒</span>
                  <p className="text-sm text-primary-700 font-medium mt-3">Happy Shopping</p>
                </div>
              </div>
              <ul className="space-y-3">
                {customerBenefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-gray-600">
                    <FiCheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits for Store Owners */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Benefits for <span className="green-accent">Store Owners</span>
              </h3>
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-50 to-primary-50 p-8 mb-6 flex items-center justify-center min-h-[200px]">
                <div className="text-center">
                  <span className="text-6xl">🏪</span>
                  <p className="text-sm text-primary-700 font-medium mt-3">Grow Your Business</p>
                </div>
              </div>
              <ul className="space-y-3">
                {storeBenefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-gray-600">
                    <FiCheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <p className="text-center text-sm font-semibold text-primary-600 tracking-wider uppercase mb-3">OUR VALUES</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {values.map((value) => (
              <div key={value.title} className="card p-6 text-center hover:-translate-y-1">
                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-500">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Download Banner */}
      <AppDownloadBanner />
    </>
  )
}
