export default function Navbar() {
  const NavigationButton = ({ text }) => {
    return (
      <button
        className="
          bg-red-500
          text-white
          hover:text-primary
          flex items-center justify-center
w-1/12 
font-secondary
          font-medium
           lg:text-[clamp(1.25rem,2vw,5rem)]
          
          transition-colors duration-300
        "
      >
        {text}
      </button>
    );
  };

  return (
    <nav
      className="
        flex items-center justify-center
        w-full h-[64px] md:h-[90px]
        px-4 md:px-[32px]
        gap-3 md:gap-[24px]
        flex-wrap
      "
    >
      <NavigationButton text="Classes" />
      <NavigationButton text="Events" />
      <NavigationButton text="Gallery" />
      <NavigationButton text="About Us" />
      <NavigationButton text="Contact Us" />
    </nav>
  );
}
