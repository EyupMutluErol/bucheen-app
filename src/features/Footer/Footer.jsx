import React from 'react';
import Container from '../../components/Container';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-[#FFF5F2] pt-16 pb-10 md:pt-20 md:pb-16">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-y-10 gap-x-8 lg:gap-8">
          
          <div className="col-span-2 lg:col-span-5 pr-0 lg:pr-24">
            <div className="text-[32px] font-bold leading-none tracking-normal mb-6">
              <span className="text-[#6C63FF]">Bu</span>
              <span className="text-[#F4704D]">cheen</span>
            </div>
            <p className="text-[#6B6B6B] text-[16px] leading-[1.9]">
              The most accurate and simplest time tracking for all of you. and we have been serving for more than 4 years and have made you happy
            </p>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-[18px] md:text-[20px] font-bold text-[#F4704D] mb-5 md:mb-6">About Us</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-[#6B6B6B] hover:text-[#1E1E1E] transition-colors text-[15px] md:text-[16px]">Our people</a></li>
              <li><a href="#" className="text-[#6B6B6B] hover:text-[#1E1E1E] transition-colors text-[15px] md:text-[16px]">Our categories</a></li>
              <li><a href="#" className="text-[#6B6B6B] hover:text-[#1E1E1E] transition-colors text-[15px] md:text-[16px]">Contact us</a></li>
              <li><a href="#" className="text-[#6B6B6B] hover:text-[#1E1E1E] transition-colors text-[15px] md:text-[16px]">Testimonial</a></li>
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-[18px] md:text-[20px] font-bold text-[#F4704D] mb-5 md:mb-6">Product</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-[#6B6B6B] hover:text-[#1E1E1E] transition-colors text-[15px] md:text-[16px]">Task Mangement</a></li>
              <li><a href="#" className="text-[#6B6B6B] hover:text-[#1E1E1E] transition-colors text-[15px] md:text-[16px]">Service</a></li>
              <li><a href="#" className="text-[#6B6B6B] hover:text-[#1E1E1E] transition-colors text-[15px] md:text-[16px]">Task Schedule</a></li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-3">
            <h4 className="text-[18px] md:text-[20px] font-bold text-[#F4704D] mb-5 md:mb-6">Contact us</h4>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-4">
                <FiPhone className="text-[#6B6B6B] text-[20px] mt-1 shrink-0" />
                <span className="text-[#6B6B6B] text-[15px] md:text-[16px]">(021) 3258 4930</span>
              </li>
              <li className="flex items-start gap-4">
                <FiMail className="text-[#6B6B6B] text-[20px] mt-1 shrink-0" />
                <span className="text-[#6B6B6B] text-[15px] md:text-[16px]">Pokan@Hola.com</span>
              </li>
              <li className="flex items-start gap-4">
                <FiMapPin className="text-[#6B6B6B] text-[20px] mt-1 shrink-0" />
                <span className="text-[#6B6B6B] text-[15px] md:text-[16px] leading-[1.8]">
                  Sukabumi, Jawa Barat<br />Indonesia, IDN
                </span>
              </li>
            </ul>
          </div>

        </div>
      </Container>
    </footer>
  );
};

export default Footer;