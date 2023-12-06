import Image from "next/image";
import Options from "./Options";

export default function Card({
  category,
  title,
  img,
  userImg,
  username,
  cardType,
}) {
  return (
    <div className="w-full md:border shadow-lg rounded-xl overflow-hidden">
      {img ? (
        <Image
          className="relative w-full h-auto bg-black "
          src={img}
          alt="Next.js Logo"
          width={692}
          height={220}
          priority
        />
      ) : (
        ""
      )}
      <div className="p-5 flex flex-col gap-5">
        <p className="text-lg">{category}</p>

        <div className="flex justify-between items-start">
          <h1 className="text-xl font-semibold w-10/12">{title}</h1>
          {/* <button>
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
          </button> */}
          <Options />
        </div>

        {cardType == "post" ? (
          <small style={{ color: "#5C5C5C" }} className=" text-lg ">
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to rei…
          </small>
        ) : cardType == "meetup" ? (
          <>
            <div className="flex gap-16 ">
              <div className="text-base flex items-center gap-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_895)">
                    <path
                      d="M15.8333 2.49992H15V0.833252H13.3333V2.49992H6.66667V0.833252H5V2.49992H4.16667C3.24167 2.49992 2.50833 3.24992 2.50833 4.16659L2.5 15.8333C2.5 16.7499 3.24167 17.4999 4.16667 17.4999H15.8333C16.75 17.4999 17.5 16.7499 17.5 15.8333V4.16659C17.5 3.24992 16.75 2.49992 15.8333 2.49992ZM15.8333 15.8333H4.16667V6.66658H15.8333V15.8333ZM5.83333 8.33325H10V12.4999H5.83333V8.33325Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_895">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Fri, 12 Oct, 2018
              </div>

              <div className="flex items-center text-base">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_886)">
                    <path
                      d="M9.99996 1.66675C6.77496 1.66675 4.16663 4.27508 4.16663 7.50008C4.16663 11.8751 9.99996 18.3334 9.99996 18.3334C9.99996 18.3334 15.8333 11.8751 15.8333 7.50008C15.8333 4.27508 13.225 1.66675 9.99996 1.66675ZM5.83329 7.50008C5.83329 5.20008 7.69996 3.33342 9.99996 3.33342C12.3 3.33342 14.1666 5.20008 14.1666 7.50008C14.1666 9.90008 11.7666 13.4918 9.99996 15.7334C8.26663 13.5084 5.83329 9.87508 5.83329 7.50008Z"
                      fill="black"
                    />
                    <path
                      d="M9.99996 9.58341C11.1506 9.58341 12.0833 8.65067 12.0833 7.50008C12.0833 6.34949 11.1506 5.41675 9.99996 5.41675C8.84937 5.41675 7.91663 6.34949 7.91663 7.50008C7.91663 8.65067 8.84937 9.58341 9.99996 9.58341Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_886">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Ahmedabad, India
              </div>
            </div>
            <button
              style={{ color: "#E56135" }}
              className="w-full border rounded-xl py-2.5 font-semibold text-xs"
            >
              Visit Website
            </button>
          </>
        ) : (
          <>
            <div className="flex gap-16">
              <div className="text-base flex items-center gap-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_941)">
                    <path
                      d="M11.6667 5.00008V3.33341H8.33342V5.00008H11.6667ZM3.33341 6.66675V15.8334H16.6667V6.66675H3.33341ZM16.6667 5.00008C17.5917 5.00008 18.3334 5.74175 18.3334 6.66675V15.8334C18.3334 16.7584 17.5917 17.5001 16.6667 17.5001H3.33341C2.40841 17.5001 1.66675 16.7584 1.66675 15.8334L1.67508 6.66675C1.67508 5.74175 2.40841 5.00008 3.33341 5.00008H6.66675V3.33341C6.66675 2.40841 7.40841 1.66675 8.33342 1.66675H11.6667C12.5917 1.66675 13.3334 2.40841 13.3334 3.33341V5.00008H16.6667Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_941">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Innovaccer Analytics Private Ltd.
              </div>

              <div className="flex items-center text-base">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_886)">
                    <path
                      d="M9.99996 1.66675C6.77496 1.66675 4.16663 4.27508 4.16663 7.50008C4.16663 11.8751 9.99996 18.3334 9.99996 18.3334C9.99996 18.3334 15.8333 11.8751 15.8333 7.50008C15.8333 4.27508 13.225 1.66675 9.99996 1.66675ZM5.83329 7.50008C5.83329 5.20008 7.69996 3.33342 9.99996 3.33342C12.3 3.33342 14.1666 5.20008 14.1666 7.50008C14.1666 9.90008 11.7666 13.4918 9.99996 15.7334C8.26663 13.5084 5.83329 9.87508 5.83329 7.50008Z"
                      fill="black"
                    />
                    <path
                      d="M9.99996 9.58341C11.1506 9.58341 12.0833 8.65067 12.0833 7.50008C12.0833 6.34949 11.1506 5.41675 9.99996 5.41675C8.84937 5.41675 7.91663 6.34949 7.91663 7.50008C7.91663 8.65067 8.84937 9.58341 9.99996 9.58341Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_886">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Noida, India
              </div>
            </div>
            <button
              style={{ color: "#02B875" }}
              className="w-full border rounded-xl py-2.5 font-semibold text-xs"
            >
              Apply on Timesjobs
            </button>
          </>
        )}

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              className="relative rounded-full aspect-square bg-black "
              src={userImg}
              alt="Next.js Logo"
              width={48}
              height={48}
              priority
            />
            <p className="font-semibold text-lg ">{username}</p>
          </div>

          <div style={{ color: "#525252" }} className="flex gap-5 items-center">
            <div className="flex items-center gap-2 text-sm">
              <i class="bi bi-eye text-lg "></i>
              1.4k views
            </div>
            <button
              style={{ width: "42px", backgroundColor: "#EDEEF0" }}
              className=" h-9 "
            >
              <i
                style={{ height: "18px", width: "18px" }}
                className="bi bi-share-fill text-black"
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
