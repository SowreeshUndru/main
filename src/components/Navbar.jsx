import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Optional icons, or replace with your own

function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className={`fixed z-[999] w-full px-6 md:px-20 py-3 font-['Neue Montreal'] backdrop-blur-sm flex justify-between items-center transition-all duration-500 ${
        hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      {/* Logo */}
      <img
        className="bg-white rounded-[30%] w-10 h-10 md:w-[50px] md:h-[50px]"
        src="https://img.icons8.com/ios-filled/50/s-key.png"
        alt="s-key"
      />

      {/* Desktop Links */}
      <div className="hidden md:flex links gap-10 flex-wrap content-center">
        {["Introduction", "Our Work", "About Us", "Projects", "Contacts"].map(
          (item, index) => (
            <a
              key={index}
              className={`text-base md:text-lg capitalize font-light ${
                index === 4 ? "ml-10 md:ml-32" : ""
              }`}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {item}
            </a>
          )
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white text-black flex flex-col items-center py-4 gap-4 shadow-md md:hidden transition-all duration-300">
          {["Introduction", "Our Work", "About Us", "Projects", "Contacts"].map(
            (item, index) => (
              <a
                key={index}
                className="text-base capitalize font-medium"
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setMenuOpen(false)} // close menu on link click
              >
                {item}
              </a>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar;
