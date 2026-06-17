import { Link } from 'react-router-dom'
import { HiArrowRight, HiStar, HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { FiShield, FiTruck, FiTag, FiHeadphones, FiCheckCircle } from 'react-icons/fi'
import { useState } from 'react'
import AppDownloadBanner from '../components/AppDownloadBanner'

const features = [
  {
    icon: FiTruck,
    title: 'Lightning Fast Delivery',
    desc: 'Get your orders delivered in minutes',
  },
  {
    icon: FiShield,
    title: 'Trusted Local Stores',
    desc: 'Shop from verified local businesses',
  },
  {
    icon: FiTag,
    title: 'Best Prices Guaranteed',
    desc: 'Unbeatable prices everyday',
  },
  {
    icon: FiHeadphones,
    title: '24/7 Customer Support',
    desc: 'We are always here to help you',
  },
]

const categories = [
  { name: 'Fruits & Vegetables', emoji: '🥬🍎🥕', bg: 'bg-green-50' },
  { name: 'Dairy & Bakery', emoji: '🥛🧀🍞', bg: 'bg-yellow-50' },
  { name: 'Snacks & Beverages', emoji: '🍿🥤🍫', bg: 'bg-orange-50' },
  { name: 'Grocery Essentials', emoji: '🛒🍚🫘', bg: 'bg-emerald-50' },
  { name: 'Personal Care', emoji: '🧴🪥💆', bg: 'bg-pink-50' },
  { name: 'Household Needs', emoji: '🧹🧼🏠', bg: 'bg-blue-50' },
  { name: 'Electronics', emoji: '🎧📱💻', bg: 'bg-purple-50' },
  { name: 'More Categories', emoji: '•••', bg: 'bg-gray-50', isMore: true },
]

const testimonials = [
  {
    quote: "Super fast delivery and great prices. NatooKart is my go-to app now!",
    name: 'Ravi Patel',
    city: 'Ahmedabad',
    rating: 5,
  },
  {
    quote: "Love supporting local shops through NatooKart. Amazing experience!",
    name: 'Neha Shah',
    city: 'Vadodara',
    rating: 5,
  },
  {
    quote: "Fresh products, on-time delivery and helpful support team.",
    name: 'Vikram Singh',
    city: 'Surat',
    rating: 5,
  },
]

const trustBadges = [
  { icon: FiCheckCircle, text: 'Quality Products' },
  { icon: FiTruck, text: 'Fast & Safe Delivery' },
  { icon: FiTag, text: 'Best Prices Everyday' },
  { icon: FiHeadphones, text: '24/7 Support' },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden">
        {/* Decorative leaves */}
        <div className="absolute top-10 right-10 w-20 h-20 opacity-10">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0C50 50 100 50 100 50C100 50 50 50 50 100C50 100 50 50 0 50C0 50 50 50 50 0Z" fill="#16a34a"/>
          </svg>
        </div>
        <div className="absolute bottom-20 left-5 w-16 h-16 opacity-10">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0C50 50 100 50 100 50C100 50 50 50 50 100C50 100 50 50 0 50C0 50 50 50 50 0Z" fill="#16a34a"/>
          </svg>
        </div>

        <div className="section-container py-16 md:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in-up">
              <div className="section-badge mb-6">
                <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
                SHOP LOCAL, SAVE MORE
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
                Shop More.
                <br />
                <span className="text-gradient-green">Pay Less.</span>
              </h1>
              <p className="text-lg text-gray-500 mb-8 max-w-lg leading-relaxed">
                Natookart connects you with local stores for the best products, 
                unbeatable prices and lightning-fast delivery.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link to="/partner" className="btn-primary text-base px-8 py-3.5">
                  Shop Now <HiArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/about" className="btn-outline text-base px-8 py-3.5">
                  Explore Deals
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6">
                {trustBadges.map((badge) => (
                  <div key={badge.text} className="flex items-center gap-2 text-sm text-gray-500">
                    <badge.icon className="w-5 h-5 text-primary-600" />
                    <span>{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Phone Mockup */}
            <div className="relative flex justify-center animate-slide-in-right">
              <div className="relative w-72 md:w-80">
                {/* Phone frame */}
                <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-white rounded-[2.3rem] overflow-hidden">
                    {/* Screen content */}
                    <div className="h-[520px] bg-gradient-to-b from-primary-50 to-white p-4">
                      {/* Status bar */}
                      <div className="flex items-center justify-between mb-4 px-2">
                        <span className="text-xs font-medium text-gray-600">9:41</span>
                        <div className="flex gap-1">
                          <div className="w-4 h-2 bg-gray-400 rounded-sm"></div>
                          <div className="w-4 h-2 bg-gray-400 rounded-sm"></div>
                        </div>
                      </div>
                      
                      {/* App header */}
                      <div className="flex items-center gap-2 mb-3 px-1">
                        <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs font-bold">NK</span>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-gray-800">NatooKart</p>
                          <p className="text-[9px] text-gray-400">📍 Ahmedabad, India</p>
                        </div>
                      </div>

                      {/* Search bar */}
                      <div className="bg-gray-100 rounded-xl px-3 py-2.5 mb-4 flex items-center gap-2">
                        <span className="text-gray-400 text-xs">🔍</span>
                        <span className="text-xs text-gray-400">Search for products...</span>
                      </div>

                      {/* Banner */}
                      <div className="bg-gradient-to-r from-primary-500 to-primary-400 rounded-xl p-4 mb-4 text-white">
                        <p className="text-xs font-bold mb-1">Fresh Picks</p>
                        <p className="text-lg font-extrabold">Great Savings!</p>
                        <p className="text-[10px] opacity-80 mt-1">Up to 30% Off</p>
                      </div>

                      {/* Categories */}
                      <p className="text-xs font-semibold text-gray-800 mb-2 px-1">Categories</p>
                      <div className="grid grid-cols-4 gap-2 mb-4">
                        {['🍎', '🥛', '🍿', '🧴'].map((emoji, i) => (
                          <div key={i} className="bg-gray-50 rounded-lg p-2 flex flex-col items-center gap-1">
                            <span className="text-lg">{emoji}</span>
                            <span className="text-[8px] text-gray-500 text-center">
                              {['Fruits', 'Dairy', 'Snacks', 'Care'][i]}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Products */}
                      <p className="text-xs font-semibold text-gray-800 mb-2 px-1">Best Deals Near You</p>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { emoji: '🍌', name: 'Fresh Bananas', price: '₹39' },
                          { emoji: '🥛', name: 'Amul Milk', price: '₹56' },
                        ].map((product, i) => (
                          <div key={i} className="bg-white rounded-xl border border-gray-100 p-2">
                            <div className="bg-gray-50 rounded-lg p-3 mb-2 text-center">
                              <span className="text-2xl">{product.emoji}</span>
                            </div>
                            <p className="text-[10px] font-medium text-gray-800">{product.name}</p>
                            <p className="text-xs font-bold text-primary-600">{product.price}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -right-6 top-20 bg-white rounded-xl shadow-lg p-3 animate-bounce-gentle">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                      <FiTruck className="w-4 h-4 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold text-gray-800">Delivered!</p>
                      <p className="text-[8px] text-gray-400">In 15 mins</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -left-8 bottom-32 bg-white rounded-xl shadow-lg p-3 animate-float">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">⭐</span>
                    <div>
                      <p className="text-[10px] font-semibold text-gray-800">4.8 Rating</p>
                      <p className="text-[8px] text-gray-400">50K+ reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-white -mt-2 relative z-10">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="card p-6 flex items-start gap-4 hover:-translate-y-1"
              >
                <div className="feature-icon-box flex-shrink-0">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Categories */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Shop by <span className="green-accent">Categories</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="card p-6 text-center hover:-translate-y-2 cursor-pointer group"
              >
                <div className={`${cat.bg} rounded-2xl p-6 mb-4 mx-auto w-fit transition-transform duration-300 group-hover:scale-110`}>
                  <span className={`text-4xl ${cat.isMore ? 'text-gray-400 tracking-widest' : ''}`}>
                    {cat.emoji}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{cat.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-natoo-lightgray">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-title">
              What Our <span className="green-accent">Customers</span> Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="card p-8 hover:-translate-y-1">
                {/* Quote icon */}
                <div className="text-primary-200 mb-4">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{t.quote}</p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <HiStar key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                    <span className="text-primary-700 font-semibold text-sm">
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary-50 hover:border-primary-200 transition-colors">
              <HiChevronLeft className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary-50 hover:border-primary-200 transition-colors">
              <HiChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
      </section>

      {/* App Download Banner */}
      <AppDownloadBanner />
    </>
  )
}
