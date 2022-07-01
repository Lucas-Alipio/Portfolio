import React from "react";
import EmBreve from "../assets/projects/EmBreve.jpg";
import Wheater from "../assets/projects/weather-app.JPG";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: Wheater,
      demo: "https://tiny-licorice-62f8e6.netlify.app/",
      git: "https://github.com/Lucas-Alipio/react-weather-app",
    },
    {
      id: 2,
      src: EmBreve,
    },
    {
      id: 3,
      src: EmBreve,
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, demo, git }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md cursor-pointer duration-200 hover:scale-110"
              />
              <div className="flex items-center justify-center">
                <a href={demo} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110">
                    Demo
                  </button>
                </a>

                <a href={git} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110">
                    Git
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
