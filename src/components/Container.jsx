const Container = ({ children, className = '' }) => (
  <div
    className={`max-w-page mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-32 ${className}`}
  >
    {children}
  </div>
)

export default Container