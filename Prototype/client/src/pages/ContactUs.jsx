import { useState } from 'react'
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone, HiOutlineClock } from 'react-icons/hi'
import { FiUser, FiMail, FiPhone, FiEdit3, FiSend, FiShield } from 'react-icons/fi'
import AppDownloadBanner from '../components/AppDownloadBanner'

const contactInfo = [
  {
    icon: HiOutlineLocationMarker,
    title: 'Our Location',
    detail: 'Ahmedabad, Gujarat, India',
    color: 'bg-primary-50 text-primary-600',
  },
  {
    icon: HiOutlineMail,
    title: 'Email Us',
    detail: 'support@natookart.com',
    color: 'bg-primary-50 text-primary-600',
  },
  {
    icon: HiOutlinePhone,
    title: 'Call Us',
    detail: '+91 98765 43210',
    color: 'bg-primary-50 text-primary-600',
  },
  {
    icon: HiOutlineClock,
    title: 'Working Hours',
    detail: 'Mon - Sat: 9:30 AM - 6:00 PM IST',
    color: 'bg-gray-50 text-gray-500',
  },
]

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()

      if (data.success) {
        setStatus({ type: 'success', message: data.message })
        setFormData({ fullName: '', email: '', phone: '', message: '' })
      } else {
        setStatus({ type: 'error', message: data.error })
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Unable to send message. Please try again later.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden">
        {/* Decorative leaf */}
        <div className="absolute top-5 left-5 w-24 h-24 opacity-10 rotate-12">
          <svg viewBox="0 0 100 100" fill="none"><path d="M50 0C50 50 100 50 100 50C100 50 50 50 50 100C50 100 50 50 0 50C0 50 50 50 50 0Z" fill="#16a34a"/></svg>
        </div>

        <div className="section-container py-16 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="section-badge mb-6">
                <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
                WE ARE HERE TO HELP
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
                Contact <span className="green-accent">Us</span>
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed">
                Have a question, suggestion, or need help?
                <br />
                We'd love to hear from you. Reach out to us anytime!
              </p>
            </div>

            {/* Hero Illustration */}
            <div className="flex justify-center animate-slide-in-right">
              <div className="relative">
                <div className="w-72 h-72 md:w-80 md:h-80 bg-gradient-to-br from-primary-50 to-yellow-50 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <span className="text-5xl animate-bounce-gentle">🎧</span>
                      <span className="text-4xl animate-float">💬</span>
                    </div>
                    <span className="text-5xl animate-bounce-gentle" style={{ animationDelay: '0.5s' }}>✉️</span>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-2 -right-2 bg-white rounded-xl shadow-lg p-2.5 animate-bounce-gentle">
                  <span className="text-2xl">📞</span>
                </div>
                <div className="absolute -bottom-2 -left-2 bg-white rounded-xl shadow-lg p-2.5 animate-float">
                  <span className="text-2xl">💚</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Get in Touch */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Get in <span className="green-accent">Touch</span>
              </h2>
              <p className="text-gray-500 mb-8">
                You can reach us through any of the following channels.
              </p>

              <div className="space-y-4 mb-10">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:shadow-card transition-all duration-300">
                    <div className={`w-12 h-12 rounded-xl ${info.color} flex items-center justify-center flex-shrink-0`}>
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{info.title}</p>
                      <p className="text-gray-500 text-sm">{info.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative illustration */}
              <div className="hidden lg:block">
                <div className="bg-gradient-to-br from-primary-50 to-yellow-50 rounded-2xl p-8 flex items-center justify-center">
                  <div className="flex items-center gap-6">
                    <span className="text-5xl">🛵</span>
                    <span className="text-4xl">📦</span>
                    <span className="text-5xl">🛒</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Send Us a <span className="green-accent">Message</span>
              </h2>
              <p className="text-gray-500 mb-8">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="input-field"
                      required
                    />
                    <FiUser className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className="input-field"
                      required
                    />
                    <FiMail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="input-field"
                    />
                    <FiPhone className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your message here..."
                      rows="5"
                      className="input-field resize-none"
                      required
                    ></textarea>
                    <FiEdit3 className="absolute right-3 top-4 w-5 h-5 text-gray-300" />
                  </div>
                </div>

                {/* Status Message */}
                {status.message && (
                  <div className={`p-4 rounded-xl text-sm font-medium ${
                    status.type === 'success' 
                      ? 'bg-primary-50 text-primary-700 border border-primary-200' 
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}>
                    {status.message}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-green hover:opacity-90 text-white font-semibold py-4 rounded-xl 
                           flex items-center justify-center gap-2 transition-all duration-300 
                           hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Send Message <FiSend className="w-5 h-5" />
                    </>
                  )}
                </button>

                {/* Trust text */}
                <p className="flex items-center justify-center gap-2 text-sm text-gray-400">
                  <FiShield className="w-4 h-4" />
                  Your information is safe with us.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Banner */}
      <AppDownloadBanner />
    </>
  )
}
