import React, { useState } from 'react';
import Container from '../../components/Container';
import JavarSaripun from "../../assets/JavarSaripun.png";
import FausiahFera from "../../assets/FausiahFera.png";
import ShrerylOlap from "../../assets/ShrerylOlap.png";

const profiles = [
  {
    id: 1,
    name: "Javar Saripun",
    description: "A man who is ideal for all women. Javar is very handsome and attractive with a very friendly and kind nature. Javar is also a person who excels in the field of music.",
    bgColor: "bg-[#FFD4D4]",
    contentBg: "bg-[#FFF5F2]",
    image: JavarSaripun,
    marginTop: "mt-0"
  },
  {
    id: 2,
    name: "Fausiah Fera",
    description: "Fera is a student from one of the famous universities in Tokyo and she is a very famous and very beautiful woman.",
    bgColor: "bg-[#AEA4FF]",
    contentBg: "bg-white",
    image: FausiahFera,
    marginTop: "md:mt-16"
  },
  {
    id: 3,
    name: "Shreryl Olap",
    description: "Olap is a very sweet woman with curly and blonde hair which makes her very beautiful and sweet. He works in the field of music, which is famous in Indonesia.",
    bgColor: "bg-[#FFE4B5]",
    contentBg: "bg-white",
    image: ShrerylOlap,
    marginTop: "md:mt-32"
  }
];

const PopularProfilesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const width = e.target.clientWidth;
    const index = Math.round(scrollLeft / (width * 0.85));
    setActiveIndex(Math.min(Math.max(index, 0), profiles.length - 1));
  };

  return (
    <section className="bg-[#FFF5F2] pt-16 pb-12 md:pt-32 md:pb-16 overflow-hidden">
      <Container>
        <div className="text-center mb-10 md:mb-24">
          <h2 className="text-[32px] md:text-[42px] font-bold text-[#1E1E1E] mb-6">
            Most Popular In This Week
          </h2>
          <p className="text-[#6B6B6B] text-[15px] md:text-[16px] leading-[1.8] max-w-[650px] mx-auto">
            There are so many platforms from this Pokan to make a task
            manager manage all your time, the data needed is very useful.
            and we have it all to get you to be successful
          </p>
        </div>

        <div 
          className="flex flex-row md:justify-center items-stretch md:items-start gap-4 md:gap-8 lg:gap-10 overflow-x-auto snap-x snap-mandatory md:overflow-visible md:snap-none hide-scrollbar pb-4 md:pb-0"
          onScroll={handleScroll}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {profiles.map((profile) => (
            <div 
              key={profile.id} 
              className={`w-[85%] shrink-0 md:w-[300px] lg:w-[320px] snap-center md:snap-align-none bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col ${profile.marginTop}`}
            >
              <div className={`w-full h-[200px] md:h-[260px] ${profile.bgColor} flex items-end justify-center relative shrink-0`}>
                <img 
                  src={profile.image} 
                  alt={profile.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className={`px-6 pt-6 pb-8 md:px-8 md:pt-8 md:pb-8 ${profile.contentBg} flex-1`}>
                <h3 className="text-[24px] md:text-[28px] font-bold text-[#1E1E1E] mb-3">
                  {profile.name}
                </h3>
                <p className="text-[#6B6B6B] text-[14px] md:text-[15px] leading-[1.8]">
                  {profile.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex md:hidden justify-center items-center gap-2 mt-6">
          {profiles.map((_, index) => (
            <div 
              key={index}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'w-2.5 bg-[#F4704D]' : 'w-2.5 bg-[#F4704D]/20'
              }`}
            />
          ))}
        </div>
      </Container>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
};

export default PopularProfilesSection;