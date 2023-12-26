import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const resume = () => {
  return (
    <>
      <Head>
        <title>Jay | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="../../public/assets/logo.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Jay Rajshakha</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/jayrajshakha01/"
              target="_blank"
              rel="noreferrer"
              title="linkedin"
            >
              <FaLinkedinIn size={20} style={{ margininset-inline-end: "1rem" }} />
            </a>
            <a
              href="https://github.com/jayrajshakha"
              target="_blank"
              rel="noreferrer"
              title="github"
            >
              <FaGithub size={20} style={{ margininset-inline-end: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Proven Leadership <span className="px-1">|</span> Web Development{" "}
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          A Front-End Developer with entry-level experience specializing in web
          development, user interface design, HTML, CSS and React JS. Adept at
          identifying opportunities to enhance front-end design and improve the
          user experience. Logical and results-driven Web Developer dedicated to
          building and optimizing user-focused websites for customers with
          various business objectives. Judicious and creative when crafting
          effective websites, apps and platforms to propel competitive advantage
          and revenue growth..
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>Typescript
            <span className="px-2">|</span>React JS
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>Redux
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span> RESTAPI
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">Experties</h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Projects</span>
            <span className="px-2">|</span>React JS
          </p>
          <p className="py-1 italic">Chat App ~</p>
          <p>
            i build a Real time chat app using React js and Typescript also use
            tailwind css for styling, for state managment i use Zustand and
            context Api, for backend i used Appwrite Cloud
          </p>
        </div>

        {/* Personal Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Projects</span>
          </p>
          <p className="py-1 italic">Expense Tracker App</p>
          <p>
            I built an expense tracker app using React JS and Tailwind. I have
            also added functionality like add, delete, update, and responsive.
          </p>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Learnin Projects</span>
          </p>
          <p className="py-1 italic">Other Projects</p>
          <p>
            i build a Crypto App using redux tk also build a shoping Cart and
            Api fetchimg projects for learning Perposed.
          </p>
        </div>

        {/*  */}
        <h5 className="text-center underline text-[18px] py-4">
          Let&apos;s Connect
        </h5>

        <div className="py-6">
          <p>
            Im excited about the opportunities to connect with like-minded
            professionals, share knowledge, and explore potential
            collaborations. Whether you&apos;re interested in discussing the
            latest web technologies, need advice on a frontend challenge, or
            want to explore potential partnerships, feel free to reach out.
            Let&apos;s build the web of the future together!
          </p>
        </div>
        <Link href={"/"}>
          {" "}
          <button className="p-2">go back home</button>
        </Link>
      </div>
    </>
  );
};

export default resume;
