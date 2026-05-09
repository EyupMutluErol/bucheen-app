import React, { useState } from 'react';
import Container from '../../components/Container';
import { FaStar } from 'react-icons/fa';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    name: "Tasha Wijayanti",
    location: "Curug",
    text: "This Bucheen is so cool, I found the partner I wanted. and it's very easy to use and steady for bcheen. cheers and hopefully many other people can find their partner here",
    rating: 5
  },
  {
    id: 2,
    name: "Sizuka engkol",
    location: "Indonesia",
    text: "Very interesting services are provided to customers, access is very fast and we can also see the development of our partners. and the information provided is accurate and genuine.",
    rating: 5
  },
  {
    id: 3,
    name: "Gundam gandim",
    location: "Bulgarian",
    text: "It's crazy that this application can make me find my soul mate very easily and quickly. the information contained in this buceen is very accurate and really real, not a hoax",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="bg-white py-16 md:py-32">
      <Container>
        <div className="text-center mb-12 md:mb-24">
          <h2 className="text-[32px] md:text-[42px] font-bold text-[#1E1E1E] mb-4 md:mb-6 leading-[1.3]">
            What Our Customers <br className="hidden md:block" /> Have To Say
          </h2>
          <p className="text-[#6B6B6B] text-[15px] md:text-[16px]">
            Here's what our customers say with Bucheen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`${
                index === activeIndex ? 'flex' : 'hidden'
              } md:flex bg-white rounded-[24px] border border-[#DDDDDD] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] flex-col transition-transform duration-300 md:hover:-translate-y-2`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-[32px] h-[32px] rounded-full bg-[#A3A3A3] shrink-0"></div>
                <div>
                  <h4 className="text-[14px] font-semibold text-[#1E1E1E] leading-none mb-2">
                    {testimonial.name}
                  </h4>
                  <p className="text-[#A3A3A3] text-[12px] leading-none">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              <p className="text-[#6B6B6B] text-[16px] leading-[1.9] mb-8 flex-grow">
                {testimonial.text}
              </p>

              <div className="flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-[#FFC107] text-[18px]" />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex md:hidden justify-center items-center gap-4 mt-8">
          <button
            onClick={prevTestimonial}
            className="w-[44px] h-[44px] rounded-full border border-[#F4704D] flex items-center justify-center text-[#F4704D] focus:outline-none active:bg-orange-50 transition-colors"
          >
            <FiArrowLeft className="text-[20px]" />
          </button>
          <button
            onClick={nextTestimonial}
            className="w-[44px] h-[44px] rounded-full bg-[#F4704D] flex items-center justify-center text-white shadow-md focus:outline-none active:bg-[#e05e3c] transition-colors"
          >
            <FiArrowRight className="text-[20px]" />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;