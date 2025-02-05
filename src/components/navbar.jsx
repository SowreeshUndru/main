import React from 'react'

function Navbar() {
    return (
        <div className='fixed z-[999] w-full px-20 py-8 font-["Neue Montreal"] flex justify-between items-center'>
            <img className='bg-white rounded-[30%]'
                width="50"
                height="50"
                src="https://img.icons8.com/ios-filled/50/s-key.png"
                alt="s-key" />
            <div className="links flex gap-10 flex-wrap content-center">
                {["Introduction  ", "Our Work  ", "About Us  ", "projects", "Contacts"].map(function (item, index) {
                    return <a key={index} className={`text-lg caipitalize font-light ${index===4 &&"ml-32"}`}>{item}</a>
                })}
            </div>
        </div>
    )
}

export default Navbar
