import React, { useState } from "react";
import about_me from "../../portfolio assets/blog/about_me.jpeg";

const About = () => {
  const [toggleInfo, setToggleInfo] = useState(0);

  const handleToggleInfo = (id) => {
    setToggleInfo(id);
  };

  return (
    <section
      id="about"
      className="w-full transition-all md:h-[150vh]  lg:h-[100vh]  flex justify-center items-center  border-b border-gray-200"
    >
      <div
        className={`${
          toggleInfo === 0
            ? " flex-col md:py-15 lg:py-12 lg:flex-row flex w-[86%] md:w-[70%] mx-auto"
            : " flex-col md:py-15 lg:py-12 lg:flex-row  flex w-[86%] md:w-[70%] mx-auto"
        }`}
      >
        <div className="lg:w-2/3 md:w-2/3">
          <img
            className="lg:w-[80%] rounded-md shadow-lg"
            src={about_me}
            alt="coder"
          />
        </div>

        <div className="mt-10 lg:mt-0 flex flex-col gap-6 lg:w-1/2">
          <div className="flex gap-12">
            <h1
              onClick={() => handleToggleInfo(0)}
              className={`${
                toggleInfo === 0 ? "text-blue-950 underline" : "text-blue-900"
              } text-lg font-bold cursor-pointer`}
            >
              About Me
            </h1>
            <h1
              onClick={() => handleToggleInfo(1)}
              className={`${
                toggleInfo === 1 ? "text-blue-950 underline" : "text-blue-900"
              } text-lg font-bold cursor-pointer`}
            >
              Education
            </h1>
            <h1
              onClick={() => handleToggleInfo(2)}
              className={`${
                toggleInfo === 2 ? "text-blue-950 underline" : "text-blue-900"
              } text-lg font-bold cursor-pointer`}
            >
              Skills
            </h1>
          </div>
          {toggleInfo === 0 && (
            <div className="flex flex-col gap-3 py-3 lg:py-0">
              <h1 className="text-lg font-bold">
                A dedicated Front-end Developer based in New Delhi, India 📍
              </h1>
              <p className="text-md ">
                As a Full Stack Developer, I possess an impressive arsenal of
                skills in HTML, CSS, tailwind CSS, JavaScript, React.js,
                Node.js, Express.js, MongoDB and SQL. I have also worked with
                technologies like Typescript, Next.js, React Native, etc
              </p>
              <p className="text-md ">
                My expertise extends beyond code – I'm dedicated to helping
                businesses and individuals enhance their online presence and
                achieve growth. By combining technical prowess with a deep
                understanding of user experience, I specialize in creating
                visually appealing and high-performance websites that engage and
                convert.
              </p>
            </div>
          )}

          {toggleInfo === 1 && (
            <div className="py-4 lg:py-0">
              <ul className="flex flex-col gap-4">
                <li>
                  <h1 className="text-lg font-semibold">BCA 2023(Graduate)</h1>
                  <p>Guru Gobind Singh Indraprastha University</p>
                </li>
                <li>
                  <h1 className="text-lg font-semibold">
                    Senior Secondary 2020
                  </h1>
                  <p>New Delhi Public School (CBSE)</p>
                </li>
                <li>
                  <h1 className="text-lg font-semibold">Secondary</h1>
                  <p>New Delhi Public School (CBSE)</p>
                </li>
              </ul>
            </div>
          )}

          {toggleInfo === 2 && (
            <div className="py-4 lg:py-0">
              <ul className="flex flex-col gap-4">
                <li>
                  <h1 className="text-lg font-semibold">
                    Programming Language:
                  </h1>
                  <p>JavaScript</p>
                </li>
                <li>
                  <h1 className="text-lg font-semibold">Database:</h1>
                  <p>Mongo Database, MySql Databbase</p>
                </li>
                <li>
                  <h1 className="text-lg font-semibold">Framework, Library</h1>
                  <p>React.js, Express.js, Tailwind CSS</p>
                </li>
                <li>
                  <h1 className="text-lg font-semibold">Versioning Tools</h1>
                  <p>Github</p>
                </li>
                <li>
                  <h1 className="text-lg font-semibold">Tools, utilities</h1>
                  <p>VS Code, Thunder Client, Firebase, Postman</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
