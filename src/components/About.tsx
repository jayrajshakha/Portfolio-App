import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full  md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl md:text-xl   tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600 ">
            <span className="font-bold">👋 Hello,</span>
            <br />
            And welcome to my Portfolio profile! I&apos;m Jay Rajshakha, and
            I&apos;m passionate about crafting exceptional user experiences
            through cutting-edge frontend development. I&apos;m here to take
            your digital projects to the next level.
            <br />
            <br />
            👨‍🏫Professional Journey 
            <br />
            Fresher; My journey has been marked by a commitment to
            excellence, a hunger for knowledge, and a drive to make a meaningful
            impact through code.
            <br />
            <br />
            💥Expertise 
            <br />
             Frontend Technologies: Despite my relatively short
            time in the field, I&apos;ve developed a deep command of HTML5,
            CSS3, and JavaScript, and I&apos;m well-versed in modern frontend
            libraries and frameworks like React. My early projects showcase
            responsive web designs that are not only visually stunning but also
            optimized for performance.
            <br />
          </p>
          <p className="py-2 lg:inline-block text-gray-600">
            🌏Let&apos;s Connect 
            <br />
             I&apos;m excited about the opportunities to
            connect with like-minded professionals, share knowledge, and explore
            potential collaborations. Whether you&apos;re interested in
            discussing the latest web technologies, need advice on a frontend
            challenge <span className="md:hidden lg:inline-block"> or want to explore potential partnerships, feel free to
            reach out. Let&apos;s build the web of the future together!</span>
            <br />
            <br />
          <span className=" md:hidden lg:hidden xl:flex ">
          Thank you for visiting my profile. Let&apos;s connect, and together,
            we can create extraordinary digital experiences that leave a lasting
            impact.
          </span>
          </p>
          <Link 
          className="md:hidden "
          href="/#projects">
            <p className="py-2 font-bold text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
