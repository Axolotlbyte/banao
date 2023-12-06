"use client";

import Image from "next/image";
import { useState } from "react";

const RecommendationOption = ({ img, name }) => {
  const [follow, setFollow] = useState(false);
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Image
          className="relative rounded-full aspect-square bg-black "
          src={img}
          alt="Next.js Logo"
          width={36}
          height={36}
          priority
        />
        <p className="font-semibold text-sm ">{name}</p>
      </div>

      <button
        onClick={() => setFollow(!follow)}
        style={{
          backgroundColor: follow ? "#000000" : "#EDEEF0",
          color: follow ? "white" : "",
        }}
        className="flex p-2 rounded-r-full rounded-l-full text-xs px-4 items-center"
      >
        {follow ? "Followed" : "Follow"}
      </button>
    </div>
  );
};

export default function Recommendation() {
  const groups = [
    {
      name: "Leisure",
      img: "/assets/groupOne.png",
    },
    {
      name: "Activism",
      img: "/assets/groupTwo.png",
    },
    {
      name: "MBA",
      img: "/assets/groupThree.png",
    },
    {
      name: "Philosophy",
      img: "/assets/groupFour.png",
    },
  ];
  return (
    <div className="w-3/4">
      <div className="flex gap-2 items-center ">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1_1263)">
            <path
              opacity="0.3"
              d="M15.75 9V7.5H9L10.005 3.495L6.75 6.75V14.25H13.5L15.75 9Z"
              fill="black"
            />
            <path
              d="M6.75 15.75H13.5C14.1225 15.75 14.655 15.375 14.88 14.835L17.145 9.5475C17.2125 9.375 17.25 9.195 17.25 9V7.5C17.25 6.675 16.575 6 15.75 6H11.0175L11.73 2.5725L11.7525 2.3325C11.7525 2.025 11.625 1.74 11.4225 1.5375L10.6275 0.75L5.685 5.6925C5.415 5.9625 5.25 6.3375 5.25 6.75V14.25C5.25 15.075 5.925 15.75 6.75 15.75ZM6.75 6.75L10.005 3.495L9 7.5H15.75V9L13.5 14.25H6.75V6.75ZM0.75 6.75H3.75V15.75H0.75V6.75Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_1263">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <h1>Recommended Groups</h1>
      </div>
      <div className="flex flex-col gap-3 py-3">
        {groups.map((group) => (
          <RecommendationOption key={group.name} name={group.name} img={group.img} />
        ))}
      </div>
      <p style={{color: '#2F6CE5'}} className="pt-10 text-xs text-right">See more...</p>
    </div>
  );
}
