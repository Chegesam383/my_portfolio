import { Contact, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { FaPhoneFlip } from "react-icons/fa6";
const Hero = () => {
  return (
    <div className=" rounded-md">
      <div className="py-4 lg:py-4 h-[45vh] flex  items-center flex-col gap-5 relative ">
        <div className="-z-20 blur-xl md:-top-[150px] rotate-[40deg] absolute flex gap-3 overflow-hidden">
          <div className=" h-[200px] md:h-[330px] w-[25px] bg-blue-200 rounded-full "></div>
          <div className="h-[200px] md:h-[330px] w-[25px] bg-pink-200 rounded-full"></div>
          <div className="h-[200px] md:h-[330px] w-[25px] bg-yellow-200 rounded-full"></div>
        </div>
        <h1 className=" text-3xl lg:text-5xl font-bold text-center">
          Crafting impactful solutions through web development
        </h1>
        <p className="text-sm text-gray-600">
          I am Samuel Gachuki a fullstack MERN and T3 stack web developer
          currently based in Canada.
        </p>
        <Button
          size="sm"
          className="mt-4 w-[130px] bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800 rounded-lg shadow-sm hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer"
        >
          Contact me <FaPhoneFlip className="ml-2 mt-1" />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
