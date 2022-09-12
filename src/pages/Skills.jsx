import React from "react";
import HTML from "assets/svg/HTML.svg";
import CSS from "assets/svg/CSS.svg";
import JavaScript from "assets/svg/JavaScript.svg";
import MongoDB from "assets/svg/Mongodb.svg";
import ExpressJS from "assets/svg/Expressjs.svg";
import ReactJS from "assets/svg/React.svg";
import NodeJS from "assets/svg/Nodejs.svg";
import Python from "assets/svg/Python.svg";
import DJango from "assets/svg/DJango.svg";

const Skills = () => {
  return (
    <div name="skills" className="w-full container-color text-[#ccd6f6]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="sm:text-right pb-8 pl-4 flex justify-center items-center">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
        </div>
        <div className="sm:text-center text-2xl font-bold mb-20">
          <h2>Technologies and Frameworks I've worked with</h2>
        </div>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-3 text-center text-white">
          <div flex>
            <img src={HTML} alt="HTML logo" />
            <p className="my-4">HTML</p>
          </div>
          <div>
            <img src={CSS} alt="CSS logo" />
            <p className="my-4">CSS</p>
          </div>
          <div>
            <img src={JavaScript} alt="JavaScript logo" />
            <p className="my-4">JavaScript</p>
          </div>
          <div>
            <img src={MongoDB} alt="MongoDB logo" />
            <p className="my-4">MongoDB</p>
          </div>
          <div>
            <img src={ExpressJS} alt="ExpressJS logo" />
            <p className="my-4">ExpressJS</p>
          </div>
          <div>
            <img src={ReactJS} alt="ReactJS logo" />
            <p className="my-4">ReactJS</p>
          </div>
          <div>
            <img src={NodeJS} alt="NodeJS logo" />
            <p className="my-4">NodeJS</p>
          </div>
          <div>
            <img src={Python} alt="Python logo" />
            <p className="my-4">Python</p>
          </div>
          <div>
            <img src={DJango} alt="DJango logo" />
            <p className="my-4">DJango</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
