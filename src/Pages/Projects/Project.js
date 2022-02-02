import React from "react";
// import movieMaster from './movie-master-photo.png'
// import robinStore from './robin-store.png'
// import foodie from './foodie.png'
// import profileWebsite from './profile-website.png'
import { BsEmojiWink } from "react-icons/bs";
import Slider from "./Slider";

const Project = () => {
  return (
    <section
      className="projects-wrapper w-full flex justify-center py-10 md:py-36"
      id="project"
    >
      <div className="projects w-3/5 flex flex-col items-center">
        <h1 className="text-center text-2xl font-bold tracking-widest">
          Projects
        </h1>
        <div className="w-52 mt-1 mb-2 bg-black py-0.5"></div>
        <p className="mb-10 font-semibold text-gray-400 text-sm">
          Click photo and check my project{" "}
          <BsEmojiWink className="inline text-yellow-500 text-xl" />
        </p>
        <div className="w-screen px-10 md:w-full md:px-0">
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default Project;
