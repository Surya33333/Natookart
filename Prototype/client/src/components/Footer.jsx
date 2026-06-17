import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaYoutube, FaGooglePlay, FaApple } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker, HiOutlineClock } from 'react-icons/hi'
import Logo from './Logo'

const companyLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'Partner With Us', path: '/partner' },
]

const helpLinks = [
  { name: 'Help Center', path: '#' },
  { name: 'FAQs', path: '#' },
  { name: 'Terms & Conditions', path: '#' },
  { name: 'Privacy Policy', path: '#' },
]

const partnerLinks = [
  { name: 'Become a Partner', path: '/partner' },
  { name: 'Partner Login', path: '#' },
  { name: 'Benefits', path: '/partner' },
  { name: 'Resources', path: '#' },
]

const socialLinks = [
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaXTwitter, href: '#', label: 'X' },
  { icon: FaYoutube, href: '#', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="section-container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <Logo className="h-10 w-10" />
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">
                  <span className="text-white">Natoo</span>
                  <span className="text-primary-400">Kart</span>
                </span>
                <span className="text-[10px] text-gray-500 font-medium leading-tight tracking-wide">
                  India's Local Shopping App
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 mb-6 max-w-xs leading-relaxed">
              Empowering local stores and customers with a better shopping experience.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-gray-800 hover:bg-primary-600 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Help & Support</h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Partners */}
          <div>
            <h4 className="text-white font-semibold mb-4">For Partners</h4>
            <ul className="space-y-3">
              {partnerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <HiOutlinePhone className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <HiOutlineMail className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span>support@natookart.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <HiOutlineLocationMarker className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                <span>Ahmedabad, Gujarat</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <HiOutlineClock className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span>Available 24/7</span>
              </li>
            </ul>

            {/* Download badges - small version */}
            <div className="mt-5 space-y-2">
              <p className="text-xs text-gray-500 font-medium">Download the NatooKart App</p>
              <div className="flex gap-2">
                <a href="#" className="flex items-center gap-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg px-3 py-1.5 transition-colors">
                  <FaGooglePlay className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-medium">Google Play</span>
                </a>
                <a href="#" className="flex items-center gap-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg px-3 py-1.5 transition-colors">
                  <FaApple className="w-4 h-4" />
                  <span className="text-[10px] font-medium">App Store</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} NatooKart. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            Made with <span className="text-red-500">❤</span> in India <span className="text-lg">🇮🇳</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
