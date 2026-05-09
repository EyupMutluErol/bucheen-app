import heroPhone from '../assets/hero-phone.png'


const PhoneMockup = () => {
  return (
    <div className="flex items-center justify-end w-full">
      <img
        src={heroPhone}
        alt="Bucheen App Preview"
        className="w-full max-w-[640px] object-contain drop-shadow-2xl"
      />
    </div>
  )
}

export default PhoneMockup