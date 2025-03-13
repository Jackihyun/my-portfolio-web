import { cn } from "@/utils/classname";
import React from "react";
import Card from "./Card";
import portfoliodata from "./Portfolio.json";

type Props = {
  className?: string;
};

const Portfolio: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("w-full flex flex-col", className)}>
      <div className="text-left tracking-wide gap-2 flex flex-col text-[#303030] font-orbitronMedium text-3xl">
        <p>Welcome to my portfolio! 👨🏻‍💻</p>
        <p>Check out my projects</p>
      </div>
      <div className="grid grid-cols-2 mt-10">
        {portfoliodata.map((project, index) => (
          <Card
            key={index}
            title={<span dangerouslySetInnerHTML={{ __html: project.title }} />}
            imgSrc={project.imgSrc}
            period={project.period}
            style={{
              color: project.textColor,
              backgroundColor: project.bgColor,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
