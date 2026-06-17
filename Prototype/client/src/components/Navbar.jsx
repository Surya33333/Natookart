import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { FiDownload } from 'react-icons/fi'
import Logo from './Logo'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'Partner With Us', path: '/partner' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <nav className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
      scrolled ? 'shadow-nav' : 'shadow-sm'
    }`}>
      <div className="section-container">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-primary-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Logo className="h-10 w-10 relative" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-tight">
                <span className="text-maroon-500">Natoo</span>
                <span className="text-primary-600">Kart</span>
              </span>
              <span className="text-[10px] text-gray-400 font-medium leading-tight tracking-wide">
                India's Local Shopping App
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium transition-colors duration-200 py-1
                  ${location.pathname === link.path
                    ? 'text-primary-600'
                    : 'text-gray-600 hover:text-primary-600'
                  }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Download App Button */}
          <div className="hidden lg:block">
            <a
              href="#"
              className="btn-primary text-sm py-2.5 px-5"
            >
              <FiDownload className="w-4 h-4" />
              Download App
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <HiOutlineX className="w-6 h-6 text-gray-600" />
            ) : (
              <HiOutlineMenu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}>
          <div className="flex flex-col gap-1 pt-2 border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                  ${location.pathname === link.path
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-primary-600'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#"
              className="btn-primary text-sm py-2.5 px-5 mt-3 justify-center"
            >
              <FiDownload className="w-4 h-4" />
              Download App
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
