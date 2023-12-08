import Image from "next/image";
import React from "react";
import * as Html from "../../public/assets/skills/html.png";
import * as Css from "../../public/assets/skills/css.png";
import * as Javascript from "../../public/assets/skills/javascript.png";
import * as ReactImg from "../../public/assets/skills/react.png";
import * as Tailwind from "../../public/assets/skills/tailwind.png";
import * as Github from "../../public/assets/skills/github1.png";
import * as NextJS from "../../public/assets/skills/nextjs.png";
import * as redux from "../../public/assets/skills/redux.png";
import * as typescript from "../../public/assets/skills/typescript.png";
import * as git from "../../public/assets/skills/git.png";

const skillsData = [
  { skill: "Html", image: Html },
  { skill: "Css", image: Css },
  { skill: "Tailwind", image: Tailwind },
  { skill: "Javascript", image: Javascript },
  { skill: "Typescript", image: typescript },
  { skill: "React JS", image: ReactImg },
  { skill: "Next JS", image: NextJS },
  { skill: "Redux Toolkit", image: redux },
  { skill: "Git", image: git },
  { skill: "Github", image: Github },
];

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen  p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <div className="md:h-14">
          <h1> </h1>
        </div>
        <h2 className="py-4 md:mt-4">Skills ~ What can i do</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skills: any) => {
            return (
              <div
                key={skills.skill}
                className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
              >
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image src={skills.image} width={64} height={64} alt="/" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>{skills.skill}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
