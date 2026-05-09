import PhoneMockup from '../../components/Phonemockup'
import Container from '../../components/Container'

const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#9CA3AF"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="pointer-events-none flex-shrink-0"
    aria-hidden="true"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

const GenderSelect = ({ options, defaultIndex = 0 }) => (
  <div className="relative flex items-center flex-1">
    <select
      defaultValue={options[defaultIndex]}
      className="
        w-full bg-transparent
        text-[14px] font-medium text-gray-700
        pl-3 pr-6 py-4 lg:pl-4 lg:pr-8
        outline-none cursor-pointer
        border-none appearance-none
      "
    >
      {options.map((opt) => (
        <option key={opt}>{opt}</option>
      ))}
    </select>
    <ChevronDown />
  </div>
)

const GENDER_OPTIONS_LEFT  = ['Male', 'Female', 'Other']
const GENDER_OPTIONS_RIGHT = ['Female', 'Male', 'Other']

const Hero = () => {
  return (
    <section className="bg-[#FFF5F0] min-h-[calc(100vh-80px)] flex items-center py-10 lg:py-16 overflow-hidden">
      <Container className="w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">

          <div className="w-full lg:w-[563px] flex-shrink-0">
            <h1
              style={{ fontFamily: "'Poppins', sans-serif" }}
              className="font-semibold text-[42px] md:text-[48px] lg:text-[56px] leading-[1.25] text-[#1A1A2E] mb-6 lg:mb-8"
            >
              Find{' '}
              <span
                style={{ fontFamily: "'Poppins', sans-serif" }}
                className="font-bold text-[#F4704D]"
              >
                Match Now
              </span>
              <br />
              and Grow Your
              <br />
              Feelings
            </h1>

            <p className="text-gray-400 text-[15px] lg:text-[16px] font-normal leading-[1.9] mb-10 lg:mb-12 w-full lg:max-w-[430px]">
              There are so many platforms from this Pokan to make a task
              manager manage all your time, the data needed is very useful.
              and we have it all to get you to be successful
            </p>

            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5 lg:gap-0 w-full max-w-[490px]">
              <div className="flex items-center bg-white rounded-2xl shadow-md px-2 py-1 w-full lg:w-auto lg:flex-1">
                <GenderSelect options={GENDER_OPTIONS_LEFT} defaultIndex={0} />
                <div className="w-px h-8 bg-gray-200 flex-shrink-0 mx-1" />
                <GenderSelect options={GENDER_OPTIONS_RIGHT} defaultIndex={0} />
                
                <button className="
                  hidden lg:block
                  bg-[#F4704D] text-white
                  text-[15px] font-bold
                  px-8 py-4 ml-2
                  rounded-xl
                  shadow-md
                  hover:bg-[#e05e3c]
                  active:scale-95
                  transition-all duration-200
                  whitespace-nowrap flex-shrink-0
                  cursor-pointer
                ">
                  Find Now
                </button>
              </div>

              <button className="
                block lg:hidden
                self-center
                bg-[#F4704D] text-white
                text-[15px] font-bold
                px-10 py-4
                rounded-xl
                shadow-md
                hover:bg-[#e05e3c]
                active:scale-95
                transition-all duration-200
                whitespace-nowrap
                cursor-pointer
              ">
                Find Now
              </button>
            </div>
          </div>

          <div className="w-full lg:flex-1 flex justify-center lg:justify-end items-center min-w-0 scale-[1] lg:scale-[1.15] origin-center lg:origin-right mt-6 lg:mt-0">
            <PhoneMockup />
          </div>

        </div>
      </Container>
    </section>
  )
}

export default Hero