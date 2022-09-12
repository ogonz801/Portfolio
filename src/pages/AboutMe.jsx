import React from "react";

const AboutMe = () => {
  return (
    <div name="about" className="w-full h-[75vh] bg-[#0a192f] text-[#ccd6f6]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>A Little Bit About Me</p>
          </div>
          <div>
            <p>
              My name is Osvaldo, but most people either call me 'oz' or 'valdo'. I'm a full stack developer with a passion to create interactive applications and experiences on the web. 
              <br></br>
              On my free time I like to draw anime characters and poorly animate them using a program called live2D.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
