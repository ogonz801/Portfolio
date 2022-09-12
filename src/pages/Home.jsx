import React from "react";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen container-color">
      <div className="max-w-[1000px] mx-auto h-full px-5 flex flex-col justify-center">
        <p className="text-4xl text-pink-500">Hey, I'm</p>
        <h1 className="text-6xl sm:text-4x1 py-1 font-bold text-[#ccd6f6]">
          Osvaldo Gonzalez
        </h1>
        <h2 className="text-3xl font-bold text-[#8892b0]">
          A Full Stack Developer
        </h2>
      </div>
    </div>
  );
};

export default Home;
