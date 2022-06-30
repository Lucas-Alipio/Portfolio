import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>

        <p className="text-xl mt-20">
          I'm starting my career as a developer. Currently I'm enjoying to work
          on web applications. I'm in my last year for a bachelor's degree in
          computer engineering. I started this course because I've always loved
          technology and during my time in college I fell in love with
          programming.
        </p>
        <br />

        <p className="text-xl">
          I'm starting my career as a developer. Currently I'm enjoying to work
          on web applications. I'm in my last year for a bachelor's degree in
          computer engineering. I started this course because I've always loved
          technology and during my time in college I fell in love with
          programming.
        </p>
        <br />
      </div>
    </div>
  );
};

export default About;
