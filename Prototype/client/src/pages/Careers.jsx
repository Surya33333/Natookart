import { FiCode, FiSmartphone, FiBox, FiBarChart2, FiHeadphones, FiBriefcase, FiMapPin, FiClock, FiHeart, FiTrendingUp, FiUsers, FiStar, FiAward } from 'react-icons/fi'
import { HiCheckCircle } from 'react-icons/hi'
import AppDownloadBanner from '../components/AppDownloadBanner'

const jobs = [
  {
    icon: FiCode,
    title: 'Software Engineer',
    dept: 'Engineering',
    type: 'Full-time',
    desc: 'Build scalable web and mobile applications that power local commerce.',
    exp: '2-4 Years',
    location: 'Bangalore, India',
  },
  {
    icon: FiSmartphone,
    title: 'Mobile App Developer',
    dept: 'Engineering',
    type: 'Full-time',
    desc: 'Develop high-performance Android and iOS applications.',
    exp: '2-4 Years',
    location: 'Bangalore, India',
  },
  {
    icon: FiBox,
    title: 'Product Manager',
    dept: 'Product',
    type: 'Full-time',
    desc: 'Define product strategy and build solutions that delight users.',
    exp: '3-5 Years',
    location: 'Bangalore, India',
  },
  {
    icon: FiBarChart2,
    title: 'Data Analyst',
    dept: 'Analytics',
    type: 'Full-time',
    desc: 'Analyze data and derive insights to drive better business decisions.',
    exp: '2-4 Years',
    location: 'Bangalore, India',
  },
  {
    icon: FiHeadphones,
    title: 'Customer Support Executive',
    dept: 'Support',
    type: 'Full-time',
    desc: 'Assist customers and ensure they have the best experience.',
    exp: '0-2 Years',
    location: 'Ahmedabad, India',
  },
  {
    icon: FiBriefcase,
    title: 'Business Development Executive',
    dept: 'Sales',
    type: 'Full-time',
    desc: 'Onboard new local stores and build strong partnerships.',
    exp: '1-3 Years',
    location: 'Ahmedabad, India',
  },
]

const whyJoin = [
  { icon: FiHeart, title: 'Impactful Work', desc: 'Empower local stores and communities' },
  { icon: FiTrendingUp, title: 'Growth Opportunities', desc: 'Learn, grow and advance your career' },
  { icon: FiUsers, title: 'Great Team', desc: 'Collaborate with passionate and talented people' },
  { icon: FiStar, title: 'Flexible Environment', desc: 'A culture that values balance and flexibility' },
  { icon: FiAward, title: 'Competitive Benefits', desc: 'Great compensation and perks' },
]

export default function Careers() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute top-8 right-16 w-16 h-16 opacity-10">
          <svg viewBox="0 0 100 100" fill="none"><path d="M50 0C50 50 100 50 100 50C100 50 50 50 50 100C50 100 50 50 0 50C0 50 50 50 50 0Z" fill="#16a34a"/></svg>
        </div>

        <div className="section-container py-16 md:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="section-badge mb-6">
                <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
                JOIN OUR MISSION
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Build the Future
                <br />
                of <span className="text-gradient-green">Local Commerce</span>
              </h1>
              <p className="text-lg text-gray-500 mb-8 max-w-lg leading-relaxed">
                At NatooKart, we're building technology that empowers local stores and delivers 
                convenience to millions of customers. Join us in creating a bigger impact in every neighborhood.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                    <FiHeart className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Make an Impact</p>
                    <p className="text-xs text-gray-400">Help local businesses grow</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                    <FiTrendingUp className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Grow Your Career</p>
                    <p className="text-xs text-gray-400">Learn, innovate and advance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex justify-center animate-slide-in-right">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-primary-50 via-yellow-50 to-primary-100 rounded-3xl flex items-center justify-center overflow-hidden shadow-card">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <span className="text-6xl">👩‍💻</span>
                      <span className="text-6xl">👨‍💼</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-5xl">🧑‍💻</span>
                      <span className="text-4xl">💡</span>
                      <span className="text-5xl">👩‍🔬</span>
                    </div>
                    <p className="text-primary-700 font-semibold text-sm mt-4">Join Our Team!</p>
                  </div>
                </div>
                {/* Floating badges */}
                <div className="absolute -top-3 -right-3 bg-white rounded-xl shadow-lg p-3 animate-bounce-gentle">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🚀</span>
                    <span className="text-xs font-semibold text-gray-700">Growing Fast</span>
                  </div>
                </div>
                <div className="absolute -bottom-3 -left-3 bg-white rounded-xl shadow-lg p-3 animate-float">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🍎</span>
                    <span className="text-xs font-semibold text-gray-700">Fresh Products</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-title mb-3">
              Open <span className="green-accent">Positions</span>
            </h2>
            <p className="section-subtitle">
              Explore exciting career opportunities and become a part of the NatooKart family.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {jobs.map((job, idx) => (
              <div
                key={idx}
                className="card p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <job.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{job.title}</h3>
                    <div className="flex items-center gap-2 mt-1 mb-2">
                      <span className="text-xs bg-primary-50 text-primary-700 px-2.5 py-0.5 rounded-full font-medium">
                        {job.dept}
                      </span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500 font-medium">{job.type}</span>
                    </div>
                    <p className="text-sm text-gray-500">{job.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 lg:gap-8">
                  <div className="flex items-center gap-1.5 text-sm text-gray-500">
                    <FiClock className="w-4 h-4 text-gray-400" />
                    {job.exp}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-gray-500">
                    <FiMapPin className="w-4 h-4 text-gray-400" />
                    {job.location}
                  </div>
                  <button className="btn-outline-green whitespace-nowrap">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join NatooKart */}
      <section className="py-16 bg-natoo-lightgray">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Why Join <span className="green-accent">NatooKart</span>?
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {whyJoin.map((item) => (
              <div key={item.title} className="card p-6 text-center hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.desc}</p>
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
