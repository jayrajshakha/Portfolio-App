import React from "react";
import ExpenseImage from "../../public/assets/projects/expense.jpeg";
import snap from "../../public/assets/projects/snap2.png";

import ProjectItem from "./ProjectItems";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Expense Tracker App"
            backgroundImg={ExpenseImage}
            projectUrl="/expense"
            tech="React JS"
          />
          <ProjectItem
            title="Snapgram Chat App"
            backgroundImg={snap}
            projectUrl="/snapgram"
            tech="React JS"
          />
          {/* <ProjectItem
            title='Expense Tracker App'
            backgroundImg={jovials}
            projectUrl='/crypto'
            tech='React JS'

          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
