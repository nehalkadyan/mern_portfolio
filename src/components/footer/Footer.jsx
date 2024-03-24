import React from "react";
import { IoDocumentAttach } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import resume from "../../portfolio assets/resume/Nehal_Kadyan_Resume.pdf";

const Footer = () => {
  return (
    <footer className=" bg-blue-950 ">
      <div className="p-4 sm:p-8 w-full sm:w-[80%] mx-auto">
        <div className="w-1/2 md:w-1/4 flex justify-around gap-4 bg-white p-2 rounded-md">
          <a href="https://www.linkedin.com/in/nehal-k-817818205/">
            <FaLinkedin className="text-3xl text-blue-600 cursor-pointer hover:text-4xl transition-all duration-300" />
          </a>
          <a href="https://www.instagram.com/nehalkadyann/">
            <FaInstagram className="text-3xl text-pink-600 cursor-pointer hover:text-4xl transition-all duration-300" />
          </a>
          <a href="https://github.com/nehalkadyan">
            <FaGithub className="text-3xl text-black-600 cursor-pointer hover:text-4xl transition-all duration-300" />
          </a>
        </div>
        <a
          download
          href={resume}
          className="flex mt-2 items-center gap-1 hover:underline text-white cursor-pointer"
        >
          <button className="text-white font-semibold">Download Resume</button>
          <IoDocumentAttach className="text-white" />
        </a>

        <div className="text-center mt-4">
          <h1 className="text-8xl italic text-white font-semibold">
            Thank You
          </h1>
        </div>

        <div className="flex mt-8 flex-col items-center text-white">
          <p>Copyright ©️ Developer Nehal Kadyan [2024]</p>
          <p>Made by Nehal Kadyan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
