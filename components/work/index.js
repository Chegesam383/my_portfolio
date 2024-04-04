import React from "react";
import { Badge } from "../ui/badge";
import Link from "next/link";

const Work = () => {
  return (
    <div className="p-2  rounded-lg mt-4">
      <h3 className="my-3 text-left font-bold text-2xl tracking-widest">
        {"< My Projects >"}
      </h3>
      <hr className="my-2" />
      <div className="md:flex gap-4 ">
        <div className="flex justify-between flex-col gap-2 rounded-md shadow-sm ">
          <div className="w-full h-[250px] overflow-hidden flex-1.5">
            <img
              src="fashionsence.jpeg"
              className="w-full h-full object-cover transition-all object-top drop-shadow-lg rounded hover:object-bottom"
            />
          </div>
          <div className="flex-1">
            <p className="leading-md text-sm text-justify  w-[300px]">
              A modern ecommerce platform that with Admin dashboard, add to
              cart, checkout and authentication.
            </p>

            <div className="flex flex-wrap gap-1 mt-2">
              <Badge>Next js</Badge>
              <Badge>Tailwind css</Badge>
              <Badge>Prisma ORM</Badge>
              <Badge>Next Auth</Badge>
              <Badge>Mongodb</Badge>
            </div>

            <div className="flex gap-3 mt-2">
              <Link href="https://fashionsence.vercel.app/" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </Link>
              <Link href="https://github.com/Chegesam383/Fashionsence">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-between flex-col gap-2 rounded-md shadow-sm ">
          <div className="w-full h-[250px] overflow-hidden flex-1.5">
            <img
              src="fashionsence.jpeg"
              className="w-full h-full object-cover transition-all object-top drop-shadow-lg rounded hover:object-bottom"
            />
          </div>
          <div className="flex-1">
            <p className="leading-md text-sm text-justify w-[300px]">
              A modern ecommerce platform that with Admin dashboard, add to
              cart, checkout and authentication.
            </p>

            <div className="flex flex-wrap gap-1 mt-2">
              <Badge>Next js</Badge>
              <Badge>Tailwind css</Badge>
              <Badge>Prisma ORM</Badge>
              <Badge>Next Auth</Badge>
              <Badge>Mongodb</Badge>
            </div>

            <div className="flex gap-3 mt-2">
              <Link href="https://fashionsence.vercel.app/" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </Link>
              <Link href="https://github.com/Chegesam383/Fashionsence">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
