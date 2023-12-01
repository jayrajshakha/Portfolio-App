import Image from "next/image";
import React from "react";
import snap from "../../public/assets/projects/snap2.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const snapgram = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={snap}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Snapgram Group Chat App</h2>
          <h3>
            React JS / Typescript / Zustand / Appwrite Cloud
          </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Snapgarm</p>
          <h2>Overview</h2>
          <p>
            I built a <b>fantastic group chat app</b> called <b>Snapgarm</b>.
            <br />
            using <b>React</b> as your front-end framework, <b>Zustand</b> for state
            management, and <b>Appwrite Cloud</b> for the backend. 
            <br />
            i have also used Tailwind CSS and <b>Next UI</b> for styling, and Toast for
            notifications. i includes <b>authentication features</b> and a
            login system written in TypeScript.
            <br />
            Snapgram is a powerful and user-friendly group chat app that lets you build communities
            and chat with your friends. With its sleek design and robust
            features, Snapgram is the perfect way to stay connected with your
            loved ones. You can use Snapgram to share your thoughts,
            exchange ideas, collaborate on projects, and have fun
            with your friends.🚀🚀
          </p>
          <a
            href="https://github.com/jayrajshakha/snapgram_chat_app"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://snapgram1.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Typescript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Appwrite Cloud
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Zustand
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default snapgram;
