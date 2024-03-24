import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./heroSection.css";
// import MyImg from "../../assets/images/portfolioImage.jpeg"

const HeroSection = () => {
  const [jobTitle, setJobTitle] = useState("Full Stack Developer");

  useEffect(() => {
    const interval = setInterval(() => {
      setJobTitle((currTitle) =>
        currTitle === "Full Stack Developer"
          ? "MERN Stack Developer"
          : "Full Stack Developer"
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="lg:h-[100vh] flex flex-col mt-10 justify-center items-center "
    >
      <div className="sm:flex-col md:flex-row sm:flex p-4 sm:justify-center sm:items-center md:gap-0 gap-3">
        <div className="flex-col sm:w-full sm:p-4 md:w-1/3 flex gap-8">
          <h1 className="text-3xl font-bold animation-fade">{jobTitle}👋</h1>
          <p className="text-lg  md:mt-0 md:pr-8 ">
            Hi, I'm <span className="text-lg font-semibold">Nehal Kadyan</span>.
            A Full Stack Developer with a passion for crafting seamless digital
            experiences. Based in New Delhi, India📍
          </p>
          <div className="flex gap-4">
            <div className="text-3xl cursor-pointer">
              <a href="https://github.com/nehalkadyan">
                <FaGithub />
              </a>
            </div>
            <div className="text-3xl text-blue-950 cursor-pointer">
              <a href="https://www.linkedin.com/in/nehal-k-817818205/">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="md:w-1/3 mt-4 md:mt-0 flex justify-center ">
          <img
            className="md:w-[70%] rounded-lg shadow-lg"
            src="https://nehalkadyan-portfolio.netlify.app/static/media/portfolioImage.f861cd2045330df8ffd7.jpeg"
            alt="coder"
          />
        </div>
      </div>

      <div className="flex flex-col flex-wrap mt-10">
        <div className="flex flex-wrap md:p-0 p-5 md:flex-row items-center gap-8">
          <h1 className="text-lg font-bold">Tech Stack | </h1>
          <div>
            <img
              className="w-12 shadow-md rounded-lg"
              title="html"
              src="https://nehalkadyan-portfolio.netlify.app/static/media/html5.ff3cf75e3b7cbb4ea77c.png"
              alt="html"
            />
          </div>
          <div>
            <img
              className="w-12 shadow-md rounded-lg"
              title="css"
              alt="css"
              src="data:image/png;base64,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"
            />
          </div>
          <div>
            <img
              className="w-11 shadow-md rounded-lg"
              title="javascript"
              src="https://iconape.com/wp-content/files/ez/353342/svg/javascript-seeklogo.com.svg"
              alt="javascript"
            />
          </div>
          <div>
            <img
              className="w-12 shadow-md rounded-lg"
              title="reactjs"
              src="https://nehalkadyan-portfolio.netlify.app/static/media/React-icon.81ed438b18e24116794d.png"
              alt="react"
            />
          </div>
          <div>
            <img
              className="w-12 shadow-md rounded-lg"
              title="nodejs"
              src="https://nehalkadyan-portfolio.netlify.app/static/media/node-js.d6153fa85318a68d9bca.png"
              alt="node"
            />
          </div>
          <div>
            <img
              className="w-12 shadow-md rounded-lg"
              title="express"
              src="data:image/png;base64,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"
              alt="javascript"
            />
          </div>
          <div>
            <img
              className="w-12 shadow-md rounded-lg"
              title="mongodb"
              src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png"
              alt="javascript"
            />
          </div>
          <div>
            <img
              className="w-12 shadow-md rounded-lg"
              title="tailwind"
              src="data:image/png;base64,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"
              alt="tailwind"
            />
          </div>
          <div>
            <img
              className="w-10 shadow-md rounded-lg"
              title="sql"
              src="data:image/png;base64,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"
              alt="sql"
            />
          </div>
        </div>

        <div className="flex flex-wrap md:p-0 p-5 md:flex-row items-center gap-8 mt-8">
          <h1 className="text-lg font-bold">Familiarity With | </h1>
          <div>
            <img
              className="w-11 shadow-md rounded-lg"
              title="next.js"
              src="https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo-square.png"
              alt="javascript"
            />
          </div>
          <div>
            <img
              className="w-12 shadow-md rounded-lg"
              title="typescript"
              src="https://nehalkadyan-portfolio.netlify.app/static/media/typescript.8e08c2165d60d7ca62a9.png"
              alt="node"
            />
          </div>
          <div>
            <img
              className="w-24 shadow-md rounded-lg"
              title="react native"
              src="https://nehalkadyan-portfolio.netlify.app/static/media/react-native-logo.9c7dc0eb17daa44be657.png"
              alt="react"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
