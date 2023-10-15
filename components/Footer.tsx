import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="relative bg-gradient-to-t from-cyan-900 to-cyan-900 bg-black/70 bg-blend-multiply bg-cover bg-center text-white">
      <div className="flex justify-center items-center py-10">
        <p className="text-gray-300 font-medium">
          <span className="text-cyan-500">Otto</span>{" "}
          <span className="text-amber-500">Gold</span> Made by{" "}
          <Link
            href="https://pybot.tech"
            target="_blank"
            className="text-cyan-500 hover:text-cyan-600 transition-all duration-300"
          >
            PyBot.Tech
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
