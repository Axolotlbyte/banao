"use client";

import { useState } from "react";

export default function Options() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={"relative" + (toggle ? "" : " overflow-hidden")}>
      <button
        onClick={() => setToggle(!toggle)}
        style={{ backgroundColor: toggle ? "#BFBFC0" : "" }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1_948)">
            <path
              d="M18.6667 14C18.6667 15.2833 19.7167 16.3333 21 16.3333C22.2834 16.3333 23.3334 15.2833 23.3334 14C23.3334 12.7166 22.2834 11.6666 21 11.6666C19.7167 11.6666 18.6667 12.7166 18.6667 14ZM16.3334 14C16.3334 12.7166 15.2834 11.6666 14 11.6666C12.7167 11.6666 11.6667 12.7166 11.6667 14C11.6667 15.2833 12.7167 16.3333 14 16.3333C15.2834 16.3333 16.3334 15.2833 16.3334 14ZM9.33337 14C9.33337 12.7166 8.28337 11.6666 7.00004 11.6666C5.71671 11.6666 4.66671 12.7166 4.66671 14C4.66671 15.2833 5.71671 16.3333 7.00004 16.3333C8.28337 16.3333 9.33337 15.2833 9.33337 14Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_948">
              <rect
                width="28"
                height="28"
                fill="white"
                transform="translate(28) rotate(90)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
      <div className="absolute bg-white shadow-2xl overflow-hidden w-24 rounded -right-0">
        <button
          onClick={() => setToggle(false)}
          className="p-1 hover:bg-gray-200 w-full text-left"
        >
          Edit
        </button>
        <button
          onClick={() => setToggle(false)}
          className="p-1 hover:bg-gray-200 w-full text-left"
        >
          Report
        </button>
        <button
          onClick={() => setToggle(false)}
          className="p-1 hover:bg-gray-200 w-full text-left"
        >
          Option 3
        </button>
      </div>
    </div>
  );
}
