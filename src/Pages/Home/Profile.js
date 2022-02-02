import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { SiTwitter } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { AiOutlineGoogle } from "react-icons/ai";
import TypeAnimation from 'react-type-animation';
import ProfilePic from "../../Components/pic/ProfilePic";
import CV from './ITCV.pdf'

const Profile = () => {
  return (
    <section className="profile-container w-full my-28 flex justify-center items-center" >
      <div className="profile-wrapper w-3/5">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between">

          <div className="right-top flex flex-col justify-center items-center mb-28 lg:mb-0">
            <div className="content flex flex-col items-center">
              <div className="social flex gap-3 mb-2">
                <button className="">
                  <FaFacebookF className="text-lg text-blue-500" />
                </button>
                <button className="">
                  <AiOutlineGoogle className="text-lg text-yellow-500" />
                </button>
                <button className="">
                  <SiTwitter className="text-lg text-blue-500" />
                </button>
                <button className="">
                  <FiGithub className="text-lg text-gray-600" />
                </button>
              </div>
              <h1 className="text-2xl font-semibold tracking-widest">
                Hello, I'm Min Thiha
              </h1>
              <h2 className="text-2xl font-bold tracking-widest my-6">
              <TypeAnimation
                    cursor={true}
                    sequence={[
                    'Junior Front-End Developer',
                    4000,
                    'React Developer',
                    4000,
                    'UI/UX Designer with Figma',
                    4000,
                    ]}
                    repeat={Infinity}
                />
              </h2>
              <p className="font-light tracking-widest mb-5">
                UI/UX Designer and Front-End Web Developer
              </p>
            </div>
            <div className="btn-gp flex gap-5">
              <button className="border border-4 border-black text-lg px-8 py-1 rounded-3xl font-semibold hover:bg-black hover:text-white transiton duration-300 ease-linear">
                <a href="#contact">Hire Me</a>
              </button>
              <button className="border border-4 border-black hover:text-black hover:bg-white bg-black text-white text-lg px-8 py-1 rounded-3xl font-semibold transiton duration-300 ease-out">
                <a href={CV} download={true}>Get CV</a>
              </button>
            </div>
          </div>

          <div className="left-bottom">
            <ProfilePic />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Profile;


{/* <section className="profile-container">
<div className="profile-parent w-4/5 min-h-screen flex justify-center items-center">
  <div className="profile-details flex flex-col md:flex-row items-center justify-center">
    <div className="right-top flex-1 flex flex-col justify-center items-center">
      <div className="content flex flex-col items-center">
        <div className="social flex gap-3 mb-2">
          <button className="">
            <FaFacebookF className="text-lg text-blue-500" />
          </button>
          <button className="">
            <AiOutlineGoogle className="text-lg text-yellow-500" />
          </button>
          <button className="">
            <SiTwitter className="text-lg text-blue-500" />
          </button>
          <button className="">
            <FiGithub className="text-lg text-gray-600" />
          </button>
        </div>
        <h1 className="text-2xl font-semibold tracking-widest">
          Hello, I'm Min Thiha
        </h1>
        <h2 className="text-2xl font-bold tracking-widest my-6">
        <TypeAnimation
              cursor={true}
              sequence={[
              'Junior Front-End Web Developer',
              4000,
              'React Developer',
              4000,
              'UI/UX Designer with Figma',
              4000,
              ]}
              repeat={Infinity}
          />
        </h2>
        <p className="font-light tracking-widest mb-5">
          UI/UX Designer and Front-End Web Developer
        </p>
      </div>
      <div className="btn-gp flex gap-5">
        <button className="bg-black text-white text-lg px-8 py-1 rounded-3xl font-semibold">
          Hire Me
        </button>
        <button className="bg-black text-white text-lg px-8 py-1 rounded-3xl font-semibold">
          Get CV
        </button>
      </div>
    </div>
    <div className="left-bottom flex-1">
      <ProfilePic />
    </div>
  </div>
</div>
</section> */}