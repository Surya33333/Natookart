import { Link } from 'react-router-dom'
import { FiShield, FiGlobe, FiCheckCircle, FiDollarSign, FiUserPlus, FiFileText, FiPackage, FiPlay, FiShoppingBag, FiUsers, FiTrendingUp, FiSmartphone, FiLock, FiBarChart2, FiHeadphones, FiArrowRight } from 'react-icons/fi'
import { HiCheckCircle, HiArrowRight } from 'react-icons/hi'
import AppDownloadBanner from '../components/AppDownloadBanner'

const trustPills = [
  { icon: FiShield, text: 'Trusted Platform' },
  { icon: FiGlobe, text: 'Wide Reach' },
  { icon: FiCheckCircle, text: 'Secure & Reliable' },
  { icon: FiDollarSign, text: 'Timely Payments' },
]

const storeBenefits = [
  'List your products on the NatooKart app',
  'Reach more local customers',
  'Increase sales and grow your business',
  'Get dedicated support',
]

const deliveryBenefits = [
  'Flexible earning opportunities',
  'Daily incentives & rewards',
  'Work in your preferred area',
  'Timely payments',
]

const steps = [
  { num: '01', icon: FiUserPlus, title: 'Sign Up', desc: 'Register your store with basic details.' },
  { num: '02', icon: FiFileText, title: 'Verification', desc: 'Our team verifies your store and documents.' },
  { num: '03', icon: FiPackage, title: 'Add Products', desc: 'List your products and set your inventory.' },
  { num: '04', icon: FiPlay, title: 'Go Live', desc: 'Your store goes live on NatooKart app.' },
  { num: '05', icon: FiShoppingBag, title: 'Receive Orders', desc: 'Get orders from nearby customers and grow.' },
]

const whyPartner = [
  { icon: FiUsers, title: 'Huge Local Customer Base', desc: 'Connect with thousands of nearby customers.' },
  { icon: FiTrendingUp, title: 'Increase Sales', desc: 'Boost your store sales and earn more every day.' },
  { icon: FiSmartphone, title: 'Easy to Use', desc: 'Simple app and dashboard to manage products and orders.' },
  { icon: FiLock, title: 'Secure Payments', desc: '100% secure payments and weekly settlements.' },
  { icon: FiBarChart2, title: 'Marketing Support', desc: 'Get visibility and promotions on the NatooKart platform.' },
  { icon: FiHeadphones, title: 'Dedicated Support', desc: 'Our support team is here to help you always.' },
]

const deliveryPerks = [
  'Earn attractive incentives',
  'Flexible working hours',
  'Choose your delivery area',
  'Regular payouts & rewards',
]

export default function PartnerWithUs() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 opacity-10 -translate-x-1/2 -translate-y-1/2">
          <svg viewBox="0 0 100 100" fill="none"><path d="M50 0C50 50 100 50 100 50C100 50 50 50 50 100C50 100 50 50 0 50C0 50 50 50 50 0Z" fill="#16a34a"/></svg>
        </div>
        <div className="absolute top-10 right-10 w-20 h-20 opacity-10 rotate-45">
          <svg viewBox="0 0 100 100" fill="none"><path d="M50 0C50 50 100 50 100 50C100 50 50 50 50 100C50 100 50 50 0 50C0 50 50 50 50 0Z" fill="#16a34a"/></svg>
        </div>

        <div className="section-container py-16 md:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="section-badge mb-6">
                <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
                GROW TOGETHER WITH NATOOKART
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Partner With{' '}
                <span className="text-gradient-green">NatooKart</span>
              </h1>
              <p className="text-lg text-gray-500 mb-8 max-w-lg leading-relaxed">
                Join India's trusted local shopping platform and grow your business 
                or earn with flexible opportunities.
              </p>
              <div className="flex flex-wrap gap-5">
                {trustPills.map((pill) => (
                  <span key={pill.text} className="flex items-center gap-1.5 text-sm text-gray-600">
                    <pill.icon className="w-4 h-4 text-primary-600" />
                    {pill.text}
                  </span>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex justify-center animate-slide-in-right">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-primary-50 via-yellow-50 to-primary-100 rounded-3xl flex items-center justify-center shadow-card overflow-hidden">
                  <div className="text-center">
                    <span className="text-8xl block mb-4">👨‍🌾</span>
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-4xl">🏪</span>
                      <span className="text-3xl">🤝</span>
                      <span className="text-4xl">📱</span>
                    </div>
                    <p className="text-primary-700 font-semibold text-sm mt-4">Partner & Grow Together</p>
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 bg-white rounded-xl shadow-lg p-3 animate-bounce-gentle">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📈</span>
                    <span className="text-xs font-semibold text-gray-700">Grow Sales</span>
                  </div>
                </div>
                <div className="absolute -bottom-3 -left-3 bg-white rounded-xl shadow-lg p-3 animate-float">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">💰</span>
                    <span className="text-xs font-semibold text-gray-700">Earn More</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Options */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-title mb-3">
              Partner in the way <span className="green-accent">that suits you</span>
            </h2>
            <p className="section-subtitle">Choose the option that best fits you.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Partner as a Store */}
            <div className="card p-8 hover:-translate-y-1 border-2 border-transparent hover:border-primary-100">
              <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mb-6">
                <FiShoppingBag className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Partner as a Store</h3>
              <p className="text-sm text-gray-500 mb-6">
                For Local Supermarkets, Grocery Stores, Kirana Stores & Mini Marts
              </p>
              <ul className="space-y-3 mb-8">
                {storeBenefits.map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-sm text-gray-600">
                    <HiCheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <button className="btn-primary w-full justify-center">
                Partner as a Store <HiArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Partner as Delivery */}
            <div className="card p-8 hover:-translate-y-1 border-2 border-transparent hover:border-primary-100">
              <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🛵</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Partner as a Delivery Partner</h3>
              <p className="text-sm text-gray-500 mb-6">
                For Individuals who want to earn as a Delivery Partner
              </p>
              <ul className="space-y-3 mb-8">
                {deliveryBenefits.map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-sm text-gray-600">
                    <HiCheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <button className="btn-primary w-full justify-center">
                Become a Delivery Partner <HiArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="section-padding bg-natoo-lightgray">
        <div className="section-container">
          <div className="text-center mb-14">
            <h2 className="section-title mb-3">
              How it Works for <span className="green-accent">Store Partners</span>
            </h2>
            <p className="section-subtitle">Start selling on NatooKart in simple steps.</p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-10">
            {steps.map((step, idx) => (
              <div key={idx} className="relative text-center">
                {/* Connector line */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-primary-300 z-0"></div>
                )}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary-50 border-2 border-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-600 font-bold text-sm">{step.num}</span>
                  </div>
                  <div className="w-12 h-12 bg-white rounded-xl shadow-card flex items-center justify-center mx-auto mb-3 -mt-2">
                    <step.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">{step.title}</h4>
                  <p className="text-xs text-gray-500 max-w-[160px] mx-auto">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Support banner */}
          <div className="bg-primary-50 border border-primary-100 rounded-2xl py-4 px-6 text-center">
            <p className="text-sm text-primary-700 font-medium flex items-center justify-center gap-2">
              <FiHeadphones className="w-5 h-5" />
              Our team is always here to help you at every step!
            </p>
          </div>
        </div>
      </section>

      {/* Why Partner with NatooKart */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Why Partner with <span className="green-accent">NatooKart</span>?
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {whyPartner.map((item) => (
              <div key={item.title} className="card p-5 text-center hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-primary-600" />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Delivery Partner */}
      <section className="section-container mb-16">
        <div className="bg-gradient-green-dark rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 items-center p-8 md:p-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Why Become a Delivery Partner?
              </h3>
              <ul className="space-y-4">
                {deliveryPerks.map((perk) => (
                  <li key={perk} className="flex items-center gap-3 text-white/90">
                    <HiCheckCircle className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                    <span className="text-sm">{perk}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="bg-white rounded-xl p-6 text-center">
                  <p className="text-xs text-gray-400 mb-1">Monthly Earnings</p>
                  <p className="text-3xl font-extrabold text-primary-600 mb-1">₹12,500</p>
                  <p className="text-xs text-gray-400 mb-4">Average delivery partner earnings</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Deliveries</span>
                      <span className="font-semibold text-gray-700">350+/month</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Bonus</span>
                      <span className="font-semibold text-primary-600">₹2,500</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Tips</span>
                      <span className="font-semibold text-primary-600">₹1,200</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-center gap-3">
                  <span className="text-3xl">🛵</span>
                  <span className="text-3xl">📦</span>
                  <span className="text-3xl">💰</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Banner */}
      <AppDownloadBanner />
    </>
  )
}
