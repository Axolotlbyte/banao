"use client";

import Card from "@/components/Card";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Recommendation from "@/components/Recommendation";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [inGroup, setInGroup] = useState(false);
  return (
    <main className="bg-white relative">
      {/* Hero */}
      <Hero inGroup={inGroup} setIngroup={(e) => setInGroup(e)} />

      <div className="w-full md:w-3/4 mx-auto md:py-8 bg-white z-50">
        {/* Navigation */}
        <Navbar inGroup={inGroup} setInGroup={(e) => setInGroup(e)} />

        {/* Content */}
        <div className="flex justify-between">
          <div className="w-70-p gap-5 flex flex-col flex-shrink-0 py-3 md:py-8">
            <Card
              key={0}
              category={"✍️ Article"}
              img={"/assets/postOne.png"}
              userImg={"/assets/userOne.png"}
              username={"Sarthak Kamra"}
              title={
                "What if famous brands had regular fonts? Meet RegulaBrands!"
              }
              cardType={"post"}
            />
            <Card
              key={1}
              category={"🔬️ Education"}
              img={"/assets/postTwo.png"}
              userImg={"/assets/userTwo.png"}
              username={"Sarah West"}
              title={
                "Tax Benefits for Investment under National Pension Scheme launched by Government"
              }
              cardType={"post"}
            />
            <Card
              key={2}
              category={"🗓️ Meetup"}
              img={"/assets/postThree.png"}
              userImg={"/assets/userThree.png"}
              username={"Ronal Jones"}
              title={"Finance & Investment Elite Social Mixer @Lujiazui"}
              cardType={"meetup"}
            />
            <Card
              key={3}
              category={"💼️ Job"}
              userImg={"/assets/userFour.png"}
              username={"Joseph Gray"}
              title={"Software Developer"}
              cardType={"job"}
            />
          </div>

          <div className="hidden md:flex items-end py-10 w-full flex-col">
            <div className="w-3/4">
              {/* Input */}
              <div className="flex items-center w-full justify-between py-2 gap-2 border-b">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <g clip-path="url(#clip0_1_842)">
                    <path
                      d="M9 1.5C6.0975 1.5 3.75 3.8475 3.75 6.75C3.75 10.6875 9 16.5 9 16.5C9 16.5 14.25 10.6875 14.25 6.75C14.25 3.8475 11.9025 1.5 9 1.5ZM5.25 6.75C5.25 4.68 6.93 3 9 3C11.07 3 12.75 4.68 12.75 6.75C12.75 8.91 10.59 12.1425 9 14.16C7.44 12.1575 5.25 8.8875 5.25 6.75Z"
                      fill="black"
                    />
                    <path
                      d="M9 8.625C10.0355 8.625 10.875 7.78553 10.875 6.75C10.875 5.71447 10.0355 4.875 9 4.875C7.96447 4.875 7.125 5.71447 7.125 6.75C7.125 7.78553 7.96447 8.625 9 8.625Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_842">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <input type="text" className="w-full" value={"Noida, India"} />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 flex-shrink-0"
                >
                  <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                </svg>
              </div>

              {/*  */}
              <small className="flex opacity-50 gap-1 py-10   ">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="pt-1"
                >
                  <g opacity="0.5" clipPath="url(#clip0_1_853)">
                    <path
                      d="M7.33337 10H8.66671V11.3334H7.33337V10ZM7.33337 4.66671H8.66671V8.66671H7.33337V4.66671ZM7.99337 1.33337C4.31337 1.33337 1.33337 4.32004 1.33337 8.00004C1.33337 11.68 4.31337 14.6667 7.99337 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8.00004C14.6667 4.32004 11.68 1.33337 7.99337 1.33337ZM8.00004 13.3334C5.05337 13.3334 2.66671 10.9467 2.66671 8.00004C2.66671 5.05337 5.05337 2.66671 8.00004 2.66671C10.9467 2.66671 13.3334 5.05337 13.3334 8.00004C13.3334 10.9467 10.9467 13.3334 8.00004 13.3334Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_853">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Your location will help us serve better and extend a
                personalised experience.
              </small>
            </div>

            <Recommendation />
          </div>
        </div>
      </div>

      {/* Write button mobile */}
      <button
        style={{
          background: "linear-gradient(180deg, #FF5C5C 0%, #F0568A 100%)",
        }}
        className="fixed flex items-center justify-center md:hidden h-14 w-14 bottom-5 right-5 rounded-full z-50"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.6588 3C17.4088 3 17.1488 3.1 16.9588 3.29L15.1288 5.12L18.8788 8.87L20.7088 7.04C21.0988 6.65 21.0988 6.02 20.7088 5.63L18.3688 3.29C18.1688 3.09 17.9188 3 17.6588 3ZM14.0588 9.02L14.9788 9.94L5.91878 19H4.99878V18.08L14.0588 9.02ZM2.99878 17.25L14.0588 6.19L17.8088 9.94L6.74878 21H2.99878V17.25Z"
            fill="white"
          />
        </svg>
      </button>
    </main>
  );
}
