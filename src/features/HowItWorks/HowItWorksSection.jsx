import React from 'react';
import Container from '../../components/Container';
import { FiSearch, FiHeart, FiUser } from 'react-icons/fi';

const steps = [
  {
    id: 1,
    icon: <FiSearch size={24} className="text-[#FF725E]" />,
    text: "Find your dating relationship in app and waiting until you get a notification. have a good relationship its started",
  },
  {
    id: 2,
    icon: <FiHeart size={24} className="text-[#FF725E]" />,
    text: "Dating with benefits and you redefine the expectations of a perfect relationship with your partner",
  },
  {
    id: 3,
    icon: <FiUser size={24} className="text-[#FF725E]" />,
    text: "Ideal relationship makes your online dating relationship run more smoothly using this app",
  }
];

const HowItWorksSection = () => {
  return (
    <section className="bg-white py-20 md:py-28 border-b border-gray-200">
      <Container>
        <div className="max-w-[550px]">
          
          <h2 className="text-[36px] md:text-[40px] font-semibold leading-[1.3] text-[#262626] mb-12">
            How It Works To Find<br />
            Your Relationship
          </h2>

          <div className="flex flex-col gap-10">
            {steps.map((step) => (
              <div key={step.id} className="flex items-start gap-6">
                
                <div className="w-[64px] h-[64px] rounded-full bg-[#FF834F]/25 flex items-center justify-center shrink-0">
                  {step.icon}
                </div>
                
                <p className="text-[#727272] text-[16px] leading-[24px] tracking-normal pt-3">
                  {step.text}
                </p>
                
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
};

export default HowItWorksSection;