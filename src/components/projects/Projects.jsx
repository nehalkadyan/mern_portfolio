import React from "react";
import ImageSlider from "../img-slider/ImageSlider";
import nike1 from "../../portfolio assets/nike_clone/nike_clone_1.png";
import nike2 from "../../portfolio assets/nike_clone/nike_clone_2.png";
import nike3 from "../../portfolio assets/nike_clone/nike_clone_3.png";
import nike4 from "../../portfolio assets/nike_clone/nike_clone_4.png";
import nike5 from "../../portfolio assets/nike_clone/nike_clone_5.png";
import nike6 from "../../portfolio assets/nike_clone/nike_clone_6.png";
import nike7 from "../../portfolio assets/nike_clone/nike_clone_7.png";
import quiz1 from "../../portfolio assets/quiz/quiz1.png";
import quiz2 from "../../portfolio assets/quiz/quiz2.png";
import quiz3 from "../../portfolio assets/quiz/quiz3.png";
import quiz4 from "../../portfolio assets/quiz/quiz4.png";
import quiz5 from "../../portfolio assets/quiz/quiz5.png";
import movie1 from "../../portfolio assets/movie/movie1.png";
import movie2 from "../../portfolio assets/movie/movie2.png";
import movie3 from "../../portfolio assets/movie/movie3.png";
import movie4 from "../../portfolio assets/movie/movie4.png";
import movie5 from "../../portfolio assets/movie/movie5.png";
import blog1 from "../../portfolio assets/blog/blog1.png";
import blog2 from "../../portfolio assets/blog/blog2.png";
import blog3 from "../../portfolio assets/blog/blog3.png";
import blog4 from "../../portfolio assets/blog/blog4.png";
import blog5 from "../../portfolio assets/blog/blog5.png";
import blog6 from "../../portfolio assets/blog/blog6.png";
import blog7 from "../../portfolio assets/blog/blog7.png";
import car1 from "../../portfolio assets/car-rentals/car1.png";
import car2 from "../../portfolio assets/car-rentals/car2.png";
import car3 from "../../portfolio assets/car-rentals/car3.png";
import car4 from "../../portfolio assets/car-rentals/car4.png";
import car5 from "../../portfolio assets/car-rentals/car5.png";
import car6 from "../../portfolio assets/car-rentals/car6.png";

import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const images = new Array(7);
  images[0] = nike1;
  images[1] = nike2;
  images[2] = nike3;
  images[3] = nike4;
  images[4] = nike5;
  images[5] = nike6;
  images[6] = nike7;

  const quizImgs = new Array(5);
  quizImgs[0] = quiz1;
  quizImgs[1] = quiz2;
  quizImgs[2] = quiz3;
  quizImgs[3] = quiz4;
  quizImgs[4] = quiz5;

  const movieImgs = new Array(5);
  movieImgs[0] = movie2;
  movieImgs[1] = movie1;
  movieImgs[2] = movie3;
  movieImgs[3] = movie4;
  movieImgs[4] = movie5;

  const blogImgs = new Array(7);
  blogImgs[0] = blog1;
  blogImgs[1] = blog2;
  blogImgs[2] = blog3;
  blogImgs[3] = blog4;
  blogImgs[4] = blog5;
  blogImgs[5] = blog6;
  blogImgs[6] = blog7;

  const carImgs = new Array(6);
  carImgs[0] = car1;
  carImgs[1] = car2;
  carImgs[2] = car3;
  carImgs[3] = car4;
  carImgs[4] = car5;
  carImgs[5] = car6;

  return (
    <section id="projects">
      <div className="py-8">
        <h1 className="w-[90%] sm:w-[80%] mx-auto text-2xl font-bold py-4">
          Projects
        </h1>
        <div className="flex flex-col gap-6">
          <div className="flex border border-gray-200 bg-gray-50 shadow-md sm:flex-row flex-col justify-center items-center w-[90%] sm:w-[80%] mx-auto lg:py-6  sm:gap-6 gap-8">
            <div className="w-full sm:w-2/4">
              <ImageSlider images={images} />
            </div>

            <div className=" w-full sm:w-2/4 flex flex-col items-center gap-4 p-4">
              <h1 className="text-lg font-semibold">Nike Clone</h1>
              <p>
                Frontend Nike Clone Project having all common ecommerce features
                such as filteration of products on the basis of prices,
                category, gender, date, etc.
              </p>
              <p> Seamless User Interface using React.js frontend Library.</p>
              <div className="flex gap-8">
                <div className="flex text-lg items-center gap-4">
                  Live Link
                  <a href="https://nehal-nike-clone.netlify.app/">
                    <FaExternalLinkAlt className="cursor-pointer text-teal-600" />
                  </a>
                </div>
                <div className="flex text-lg items-center gap-4">
                  Repo Link
                  <a href="https://github.com/nehalkadyan/nike_clone">
                    <FaGithub className="cursor-pointer text-xl text-blue-800" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex border border-gray-200 bg-gray-50 shadow-md sm:flex-row flex-col justify-center items-center w-[90%] sm:w-[80%] mx-auto lg:py-6  sm:gap-6 gap-8">
            <div className="w-full sm:w-2/4">
              <ImageSlider images={quizImgs} />
            </div>

            <div className=" w-full sm:w-2/4 flex flex-col items-center gap-4 p-2">
              <h1 className="text-lg font-semibold">Quiz App</h1>
              <p>
                Built a React Redux Quiz App with Firebase authentication,
                enabling users to create, edit, and delete quizzes. Features
                include real-time form validation and interactive quiz play.
                Utilized React.js, Redux, and Firebase for seamless user
                experience and data security
              </p>
              <div className="flex gap-8">
                <div className="flex text-lg items-center gap-4">
                  Live Link
                  <a href="https://quiz-alma.web.app/sign-in">
                    <FaExternalLinkAlt className="cursor-pointer text-teal-600" />
                  </a>
                </div>
                <div className="flex text-lg items-center gap-4">
                  Repo Link
                  <a href="https://github.com/nehalkadyan/Almabetter-Quiz">
                    <FaGithub className="cursor-pointer text-xl text-blue-800" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex border border-gray-200 bg-gray-50 shadow-md sm:flex-row flex-col justify-center items-center w-[90%] sm:w-[80%] mx-auto lg:py-6 sm:gap-6 gap-8">
            <div className="w-full sm:w-2/4">
              <ImageSlider images={movieImgs} />
            </div>

            <div className=" w-full sm:w-2/4 flex flex-col items-center gap-4 p-2">
              <h1 className="text-lg font-semibold">Movie App</h1>
              <p>
                Developed a full-stack (MERN) movie app using Node.js, MongoDB,
                and JWT authentication for secure user access. Users can browse
                movie details, search for movies, and manage favorites. Redux
                was implemented for efficient state management, ensuring a
                smooth user experience.
              </p>
              <div className="flex gap-8">
                <div className="flex text-lg items-center gap-4">
                  Live Link
                  <a href="https://github.com/nehalkadyan/entertainment-mern-app">
                    <FaExternalLinkAlt className="cursor-pointer text-teal-600" />
                  </a>
                </div>
                <div className="flex text-lg items-center gap-4">
                  Repo Link
                  <a href="https://github.com/nehalkadyan/entertainment-mern-app">
                    <FaGithub className="cursor-pointer text-xl text-blue-800" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex border border-gray-200 bg-gray-50 shadow-md sm:flex-row flex-col justify-center items-center w-[90%] sm:w-[80%] mx-auto lg:py-6 sm:gap-6 gap-8">
            <div className="w-full sm:w-2/4">
              <ImageSlider images={blogImgs} />
            </div>

            <div className=" w-full sm:w-2/4 flex flex-col items-center gap-4 p-2">
              <h1 className="text-lg font-semibold">Blog App</h1>
              <p>
                Crafted a MERN Stack blog app featuring JWT token authentication
                for Node.js and MongoDB, empowering users to like posts,
                comment, and search. Admin panel capabilities include post
                creation, deletion, user management, and profile editing.
                Leveraged Redux for efficient state management, ensuring
                seamless interaction.
              </p>
              <div className="flex gap-8">
                <div className="flex text-lg items-center gap-4">
                  Live Link
                  <a href="https://github.com/nehalkadyan">
                    <FaExternalLinkAlt className="cursor-pointer text-teal-600" />
                  </a>
                </div>
                <div className="flex text-lg items-center gap-4">
                  Repo Link
                  <a href="https://github.com/nehalkadyan">
                    <FaGithub className="cursor-pointer text-xl text-blue-800" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex border border-gray-200 bg-gray-50 shadow-md sm:flex-row flex-col justify-center items-center w-[90%] sm:w-[80%] mx-auto lg:py-6 sm:gap-6 gap-8">
            <div className="w-full sm:w-2/4">
              <ImageSlider images={carImgs} />
            </div>

            <div className=" w-full sm:w-2/4 flex flex-col items-center gap-4 p-2">
              <h1 className="text-lg font-semibold">Car Rentals App</h1>
              <p>
                Designed a responsive car rental website with Bootstrap,
                emphasizing intuitive UI components like data selection, city
                filters, and dynamic car options. Integrated user testimonials
                and a FAQ section for enhanced user experience and
                trust-building. Ensured seamless responsiveness across devices
                for optimal accessibility and usability.
              </p>
              <div className="flex gap-8">
                <div className="flex text-lg items-center gap-4">
                  Live Link
                  <a href="https://rentalcars-nehalkadyan.netlify.app/">
                    <FaExternalLinkAlt className="cursor-pointer text-teal-600" />
                  </a>
                </div>
                <div className="flex text-lg items-center gap-4">
                  Repo Link
                  <a href="https://github.com/nehalkadyan/car-rental-website">
                    <FaGithub className="cursor-pointer text-xl text-blue-800" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
