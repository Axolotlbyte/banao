"use client";

import Card from "@/components/Card";
import Recommendation from "@/components/Recommendation";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [inGroup, setInGroup] = useState(false);
  return (
    <main className="bg-white">
      {/* Hero */}
      <div
        style={{ backgroundImage: "/assets/hero.png" }}
        className="w-full relative h-auto bg-gray-100 text-black overflow-hidden"
      >
        <div className="absolute w-full h-full lin-gr z-20"></div>
        <Image
          className="relative w-full h-auto bg-black "
          src="/assets/hero.png"
          alt="Next.js Logo"
          width={1440}
          height={440}
          priority
        />
        <div className="w-full absolute bottom-0 text-white py-20 z-50">
          <div className="w-3/4 mx-auto ">
            <h1 className="font-bold text-4xl">Computer Engineering</h1>
            <h2>142,765 Computer Engineers follow this</h2>
          </div>
        </div>
      </div>

      <div className="w-3/4 mx-auto py-8 bg-white z-50">
        {/* Navigation */}
        <div className="flex items-center justify-between border-b-2">
          <div className="flex gap-5">
            <button className="py-5 border-b-2 border-black ">
              All Posts(32)
            </button>
            <button style={{ color: "#8A8A8A" }} className="">
              Article
            </button>
            <button style={{ color: "#8A8A8A" }} className="">
              Event
            </button>
            <button style={{ color: "#8A8A8A" }} className="">
              Education
            </button>
            <button style={{ color: "#8A8A8A" }} className="">
              Job
            </button>
          </div>

          <div className="flex gap-5 ">
            <button
              style={{ backgroundColor: "#EDEEF0" }}
              className="flex p-1.5 px-2.5 gap-2 items-center text-base rounded"
            >
              Write a Post
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_822)">
                  <path d="M7 10L12 15L17 10H7Z" fill="#2E2E2E" />
                </g>
                <defs>
                  <clipPath id="clip0_1_822">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            {inGroup ? (
              <button
                onClick={() => setInGroup(false)}
                style={{  color: '#6A6A6B' }}
                className="flex p-1.5 px-2.5 gap-2 border-2 items-center text-base rounded "
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_1222)">
                    <path
                      d="M9.24917 14.2908L10.5417 15.5833L15.125 11L10.5417 6.41667L9.24917 7.70917L11.6142 10.0833H2.75V11.9167H11.6142L9.24917 14.2908ZM17.4167 2.75H4.58333C3.56583 2.75 2.75 3.575 2.75 4.58333V8.25H4.58333V4.58333H17.4167V17.4167H4.58333V13.75H2.75V17.4167C2.75 18.425 3.56583 19.25 4.58333 19.25H17.4167C18.425 19.25 19.25 18.425 19.25 17.4167V4.58333C19.25 3.575 18.425 2.75 17.4167 2.75Z"
                      fill="#6A6A6B"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1222">
                      <rect width="22" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Leave Group
              </button>
            ) : (
              <button
                onClick={() => setInGroup(true)}
                style={{ backgroundColor: "#2F6CE5" }}
                className="flex p-1.5 px-2.5 gap-2 text-white items-center text-base rounded "
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_859)">
                    <path
                      d="M7.33333 9.16671H4.58333V6.41671H2.75V9.16671H0V11H2.75V13.75H4.58333V11H7.33333V9.16671ZM16.5 10.0834C18.0217 10.0834 19.2408 8.85504 19.2408 7.33337C19.2408 5.81171 18.0217 4.58337 16.5 4.58337C16.2067 4.58337 15.9225 4.62921 15.6658 4.71171C16.1883 5.45421 16.4908 6.35254 16.4908 7.33337C16.4908 8.31421 16.1792 9.20337 15.6658 9.95504C15.9225 10.0375 16.2067 10.0834 16.5 10.0834ZM11.9167 10.0834C13.4383 10.0834 14.6575 8.85504 14.6575 7.33337C14.6575 5.81171 13.4383 4.58337 11.9167 4.58337C10.395 4.58337 9.16667 5.81171 9.16667 7.33337C9.16667 8.85504 10.395 10.0834 11.9167 10.0834ZM17.985 12.0634C18.7458 12.7325 19.25 13.585 19.25 14.6667V16.5H22V14.6667C22 13.255 19.8275 12.3842 17.985 12.0634ZM11.9167 11.9167C10.0833 11.9167 6.41667 12.8334 6.41667 14.6667V16.5H17.4167V14.6667C17.4167 12.8334 13.75 11.9167 11.9167 11.9167Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_859">
                      <rect width="22" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Join Group
              </button>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex justify-between">
          <div className="w-70-p gap-5 flex flex-col flex-shrink-0 py-8">
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

          <div className="flex items-end py-10 w-full flex-col">
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

      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.js</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div> */}
      {/* 
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  );
}
