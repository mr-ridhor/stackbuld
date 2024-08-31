import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FacebookIcon from "@/svgComponents/FacebookIcon";
import InstagramIcon from "@/svgComponents/InstagramIcon";
import LinkedInIcon from "@/svgComponents/LinkedIn";
import { XIcon } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full text-sm md:text-base md:h-[350px] flex  justify-center  text-white bg-[#421f80]">
      <footer className=" flex items-center flex-col  h-full w-[80%]   gap-y-3 py-4">
        <div className="w-full flex items-center justify-center h-[10%]">
          <div className="w-[200px] flex items-center justify-between">
            <XIcon />
            <FacebookIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </div>
        </div>
        <div className="h-[40%] gap-y-2 flex flex-col justify-start w-full">
          <p>Sign up for Newsletters</p>
          <div className="flex gap-x-2">
            <Input
              placeholder="Enter Email here"
              className="border-0 w-[70%] lg:w-[40%]"
            />
            <Button className="bg-[#6f42c2] text-white rounded-md border">
              Subcribe
            </Button>
          </div>
        </div>
        <div className="grid w-full grid-cols-2 md:grid-cols-4  md:gap-y-0 gap-y-4   ">
          <div className="w-full space-y-3">
            <p className="font-bold">Get to know us</p>
            <div className="">
              <p>About us</p>
              <p>Careers</p>
              <p>Investor's</p>
              <p>News</p>
              <p>Advertise with us</p>
              <p>Press Releases</p>
            </div>
          </div>
          <div className="w-full space-y-3">
            <p className="font-bold">Popular Locations</p>
            <div className="">
              <p>Lagos</p>
              <p>Ibadan</p>
              <p>Abuja</p>
              <p>Port-Harcourt</p>
              <p>Abia</p>
            </div>
          </div>
          <div className="w-full space-y-3">
            <p className="font-bold">Sell</p>
            <div className="">
              <p>Start Selling</p>
              <p>Learn to Sell</p>
              <p>Affiliates & Creators</p>
              <p>Teams</p>
              <p>Forums</p>
            </div>
          </div>
          <div className="w-full space-y-3">
            <p className="font-bold">Learn us help you</p>
            <div className="">
              <p>Your Account</p>
              <p>Return Center</p>
              <p>Help Center</p>
              <p>Legacy & Privacy</p>
            </div>
          </div>
        </div>
        {/* &copy; 2024 E-commerce Platform */}
      </footer>
    </div>
  );
};

export default Footer;
