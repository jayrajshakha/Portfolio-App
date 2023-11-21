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
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/jayrajshakha"
              target="_blank"
              rel="noreferrer"
              title="github"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
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
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
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
            <span className="font-bold italic">Frontend Technologies :</span>
            <span className="px-2">|</span>React JS
          </p>
          <p className="py-1 italic">Front End Web Developer ~</p>
          <p>
            Despite my relatively short time in the field, I&apos;ve developed a
            deep command of HTML5, CSS3, and JavaScript, and I&apos;m
            well-versed in modern frontend libraries and frameworks like React.
            My early projects showcase responsive web designs that are not only
            visually stunning but also optimized for performance.
          </p>
        </div>

        {/* Personal Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Professional Journey</span>
            <span className="px-2">|</span> India
          </p>
          <p className="py-1 italic">Fresher ~ </p>
          <p>
            My journey has been marked by a commitment to excellence, a hunger
            for knowledge, and a drive to make a meaningful impact through code.
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
        <Link href={'/'}> <button className="p-2">go back home</button></Link>
      </div>
    </>
  );
};

export default resume;
