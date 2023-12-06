"use client";

import Image from "next/image";

export default function Hero({ inGroup, setIngroup }) {
  return (
    <div
      style={{ backgroundImage: "/assets/hero.png" }}
      className="w-full relative h-auto bg-gray-100 text-black overflow-hidden"
    >
      <div className="absolute w-full h-full lin-gr z-20"></div>

      {/* desktop img */}
      <Image
        className="relative hidden md:block w-full h-auto bg-black "
        src="/assets/hero.png"
        alt="Next.js Logo"
        width={1440}
        height={440}
        priority
      />

      {/* Mobile Image */}
      <Image
        className="relative block md:hidden w-full h-auto bg-black "
        src="/assets/hero-sm.png"
        alt="Next.js Logo"
        width={1440}
        height={440}
        priority
      />

      {/* Buttons in Mobile */}
      <div className="absolute top-0 w-full p-5 flex justify-between md:hidden z-50">
        <button>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="icon/navigation/arrow_back_24px">
              <path
                id="icon/navigation/arrow_back_24px_2"
                d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                fill="white"
              />
            </g>
          </svg>
        </button>

        <button onClick={() => setIngroup(!inGroup)} className="text-xs rounded-lg p-2 text-white border-2">{inGroup ?  'Leave Group' : 'Join Group'}</button>
      </div>

      <div className="w-full absolute bottom-0 text-white md:py-20 z-50">
        <div className="w-full p-5 md:w-3/4 mx-auto ">
          <h1 className="font-bold text-lg md:text-4xl">Computer Engineering</h1>
          <h2 className="text-xs md:text-base">142,765 Computer Engineers follow this</h2>
        </div>
      </div>
    </div>
  );
}
