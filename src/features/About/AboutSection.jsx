import Container from '../../components/Container'

const AboutSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div
        className="absolute pointer-events-none top-1/2 -translate-y-1/2 hidden md:block"
        style={{ left: '-120px' }}
        aria-hidden="true"
      >
        <svg
          width="640"
          height="640"
          viewBox="0 0 640 640"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="220" cy="320" r="200" stroke="#FEEEDB" strokeOpacity="0.95" strokeWidth="4" />
          <circle cx="280" cy="320" r="180" stroke="#FEEEDB" strokeOpacity="0.95" strokeWidth="4" />
          <circle cx="250" cy="320" r="110" stroke="#FEEEDB" strokeOpacity="0.95" strokeWidth="4" />
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[400px]">
          <div className="hidden md:block" aria-hidden="true" />
          
          <div>
            <h2 className="text-[42px] font-bold leading-[1.2] text-[#1E1E1E] mb-6">
              Find Match Now and<br />
              Develop Your Feelings
            </h2>
            
            <p className="text-[#6B6B6B] text-[16px] leading-[1.9] mb-10 max-w-[440px]">
              There are so many platforms from this Pokan to make a task
              manager manage all your time, the data needed is very useful.
              and we have it all to get you to be successful
            </p>
            
            <button className="bg-[#F4704D] hover:bg-[#e05e3c] text-white font-semibold text-[15px] px-9 py-4 rounded-xl shadow-[0px_8px_20px_rgba(244,112,77,0.3)] transition-colors duration-200 cursor-pointer">
              Read More
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutSection