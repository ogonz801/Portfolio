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
        <div className="max-w-[1000px] w-full px-4 text-xl font-bold">
            <p>
              My name is Osvaldo, but most people either call me 'oz', 'ozzy', or
              'valdo'. I'm a Full Stack Developer with a background in design.
              Applying the same critical and creative thinking as a designer to
              writing clean and scalable code as a programmer. Solving problems and generating
              results through a creative outlook and creating intuitive
              applications and experiences on the web is my passion.
            </p>
            <br/>
            <p>
              Outside of tech you can either find me doodling on a tablet or at my local race track going sideways.
            </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
