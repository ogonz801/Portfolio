import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full h-[80vh] container-color text-[#ccd6f6]"
    >
      <div
        name="work"
        className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full"
      >
        <div className="sm:text-right pb-8 pl-4 flex justify-center items-center">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Projects
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          <div className="bg-[#060f1e] p-2 container rounded-md flex justify-center items-center mx-auto content-div">
            <div>
              <span className="my-2 opacity-100 flex justify-center items-center text-xl font-bold tracking-wider">
                Whack-A-Mole
              </span>
              <p className="text-sm text-center">
                JavaScript base game making use of DOM manipulation.
                <br/>
                Built using HTML, CSS, and vanilla JavaScript.
              </p>
              <div className="mt-6 py-3 text-center flex justify-evenly items-center">
                <a
                  href="https://ogonz801.github.io/Whack-A-Mole-Game-Project1/"
                  className="m-2 text-[#ccd6f6] text-3xl hover:text-pink-500"
                >
                  <FaExternalLinkAlt />
                </a>
                <a
                  href="https://github.com/ogonz801/Whack-A-Mole-Game"
                  className="m-2 text-[#ccd6f6] text-3xl hover:text-pink-500"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-[#060f1e] p-2 container rounded-md flex justify-center items-center mx-auto content-div">
            <div>
              <span className="my-2 opacity-100 flex justify-center items-center text-xl font-bold tracking-wider">
                Crudify
              </span>
              <p className="text-sm text-center">
                A music playlist app allowing with full CRUD functionality. Built using Node.js, Mongoose, MongoDB, and EJS.
                <br/>
                Utilizing the Spotify OAuth for authentication and authorization.
              </p>
              <div className="py-3 text-center flex justify-evenly items-center">
                <a
                  href="https://music-playlist-crud.herokuapp.com/"
                  className="m-2 text-[#ccd6f6] text-3xl hover:text-pink-500"
                >
                  <FaExternalLinkAlt />
                </a>
                <a
                  href="https://github.com/ogonz801/music-playlist-CRUD"
                  className="m-2 text-[#ccd6f6] text-3xl hover:text-pink-500"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-[#060f1e] p-2 container rounded-md flex justify-center items-center mx-auto content-div">
            <div>
              <span className="my-2 opacity-100 flex justify-center items-center text-xl font-bold tracking-wider">
                Noms On Wheels
              </span>
              <p className="text-sm text-center">
                A group full stack app that allows users to find food trucks in their area and owners to add their own. I handle the backend and utilized passport local and bcrypt for user authentication and authorization.
                <br/>
                Built using Node.js with express framework as the backend, MongoDB as the database, and React.js for the frontend.
              </p>
              <div className="py-3 text-center flex justify-evenly items-center">
                <a
                  href="https://nom-on-wheels-app.herokuapp.com/"
                  className="m-2 text-[#ccd6f6] text-3xl hover:text-pink-500"
                >
                  <FaExternalLinkAlt />
                </a>
                <a
                  href="https://github.com/FoodtruckWebsite"
                  className="m-2 text-[#ccd6f6] text-3xl hover:text-pink-500"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-[#060f1e] p-2 container rounded-md flex justify-center items-center mx-auto content-div">
            <div>
              <span className="my-2 opacity-100 flex justify-center items-center text-xl font-bold tracking-wider">
                Torq 
              </span>
              <p className="text-sm text-center">
                A full stack vehicle maintenance app for users to set reminders for future maintenance.
                <br/>
                Built using Django as the backend, Postgresql as the database, and React.js for the frontend.
              </p>
              <div className="py-3 text-center flex justify-evenly items-center">
                <a
                  href="https://github.com/ogonz801/Torq"
                  className="m-2 text-[#ccd6f6] text-3xl hover:text-pink-500"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
