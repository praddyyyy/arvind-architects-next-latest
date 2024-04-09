"use client";

import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  {
    icon: Facebook,
    link: "/",
  },
  {
    icon: Instagram,
    link: "/",
  },
  {
    icon: Twitter,
    link: "/",
  },
  {
    icon: Linkedin,
    link: "/",
  },
];

const index = () => {
  const currentYear = new Date().getFullYear();
  const onAddressClick = () => {
    window.open(
      "https://www.google.com/maps/place/Palmshore+Restaurant+Nerkundram/@13.0680241,80.1986642,15z/data=!4m6!3m5!1s0x3a52611e65012737:0xeaaccc081286ec78!8m2!3d13.0718877!4d80.1867092!16s%2Fg%2F11h_26dflq?entry=ttu"
    );
  };
  return (
    <div className="bg-zinc-900 h-auto p-10 flex flex-col justify-between text-white">
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="flex flex-col gap-y-5">
          <p className="text-4xl font-semibold">Follow Us on</p>
          <div className="flex space-x-5">
            {footerLinks.map((link, i) => (
              <Link href={link.link} key={i}>
                <link.icon className="h-8 w-8 hover:text-slate-700 hover:scale-90 transition-all duration-300 ease-in-out" />
              </Link>
            ))}
          </div>
        </div>
        <div className="mx-0 my-20 sm:my-0 sm:mx-20">
          <div>
            <p className="text-4xl font-semibold">Let&apos;s Connect</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-5 sm:gap-y-0 gap-x-5 sm:gap-x-20 py-10">
              <div className="leading-7">
                <p>Projects</p>
                <p>Services</p>
                <p>About Us</p>
              </div>
              <div className="leading-7">
                <p>Contact Us</p>
              </div>
              <div className="leading-7">
                <p>Clients</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-10 sm:space-y-0 sm:flex-row sm:space-x-20 sm:justify-between">
            <div>
              <p>
                <a href="tel:9443630096">+91 9443630096</a>
              </p>
              <p>
                <a href="mailto:info@arvindarchitects.com">
                  info@arvindarchitects.com
                </a>
              </p>
            </div>
            <div>
              <p className="text-xl font-bold">Arvind Architects</p>
              <div
                className="leading-5 hover:cursor-pointer hover:underline"
                onClick={onAddressClick}
              >
                <p className="text-md font-sans">
                  3rd Floor, 2/1, 1st Cross Street,
                </p>
                <p className="text-md font-sans">Trustpuram, Kodambakkam,</p>
                <p className="text-md font-sans">Chennai - 600024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="p-3">
          <p className="text-md">&copy; {currentYear} Arvind Architects</p>
        </div>
      </div>
    </div>
  );
};

export default index;
