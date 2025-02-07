import React, { useState, useEffect } from "react";

function Navbar() {
  const [hidden, setHidden] = useState(false); 

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
  
  return (
    <div
      
      className={`fixed z-[999] w-full px-20 py-3 font-['Neue Montreal'] backdrop-blur-sm flex justify-between items-center transition-all duration-500 ${
        hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <img
        className="bg-white rounded-[30%]"
        width="50"
        height="50"
        src="https://img.icons8.com/ios-filled/50/s-key.png"
        alt="s-key"
      />
      <div className=" links flex gap-10 flex-wrap content-center">
        {["Introduction", "Our Work", "About Us", "Projects", "Contacts"].map(
          (item, index) => (
            <a
              key={index}
              className={`text-lg capitalize font-light ${
                index === 4 && "ml-32"
              }`}
            >
              {item}
            </a>
          )
        )}
      </div>
    </div>
  );
}

export default Navbar;
