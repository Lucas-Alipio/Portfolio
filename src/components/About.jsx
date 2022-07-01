import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>

        <p className="text-xl mt-20">
          My name is Lucas Antonio Alípio de Souza, I'm 22 years old. I've always liked math
          and technology, and mainly the world of games and because of that I decided to do Computer Engeneering
          which now I'm in my last year of college.
          During my time in here I've learned a lot of things, one of them was programming which I fell in
          love with. So I decided to be a developer and build a career.
        </p>
        <br />

        <p className="text-xl">
        I'm looking to test and expand my knowledge in the programming area, both in front-end and 
        back-end. Currently, I am improving my skills in web development, learning about HTML, CSS, 
        JavaScript, React and more.
        </p>
        <br />
      </div>
    </div>
  );
};

export default About;
