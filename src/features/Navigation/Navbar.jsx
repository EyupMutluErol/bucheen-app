import { useState } from 'react'
import Container from '../../components/Container'
import { FiMenu } from 'react-icons/fi';

const NAV_LINKS = ['Home', 'Service', 'About', 'Pricing', 'Support']

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home')

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between py-5 h-[128px]">

          <div className="text-[32px] font-bold leading-none tracking-normal">
            <span className="text-[#6C63FF]">Bu</span>
            <span className="text-[#F4704D]">cheen</span>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => setActiveLink(link)}
                className={`text-[16px] font-normal leading-none tracking-normal transition-colors duration-200 cursor-pointer ${
                  activeLink === link
                    ? 'text-[#F4704D]'
                    : 'text-[#999999] hover:text-gray-700'
                }`}
              >
                {link}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button className="px-6 py-2 text-sm font-semibold text-[#F4704D] border-2 border-[#F4704D] rounded-xl hover:bg-orange-50 transition-colors duration-200 cursor-pointer">
              Sign In
            </button>
            <button className="px-6 py-2 text-sm font-semibold text-white bg-[#F4704D] rounded-xl hover:bg-[#e05e3c] transition-colors duration-200 shadow-md cursor-pointer">
              Sign Up
            </button>
          </div>

          <div className="block lg:hidden">
            <button className="text-[#1E1E1E] text-[28px] focus:outline-none">
              <FiMenu />
            </button>
          </div>

        </div>
      </Container>
    </nav>
  )
}

export default Navbar