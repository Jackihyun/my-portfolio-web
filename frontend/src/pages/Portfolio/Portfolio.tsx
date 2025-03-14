import { cn } from "@/utils/classname";
import React, { useState } from "react";
import Card from "./Card";
import Modal from "./Modal";
import portfoliodata from "./Portfolio.json";
import imageMapping from "../../utils/imageMapping";

type Props = {
  className?: string;
};

const Portfolio: React.FC<Props> = ({ className }) => {
  // 선택한 프로젝트의 데이터를 저장합니다.
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <div className={cn("w-full flex flex-col", className)}>
      <div className="text-left tracking-wide gap-2 flex flex-col text-[#303030] dark:text-[#FAFAFC] font-orbitronRegular text-3xl">
        <p>Welcome to my portfolio! 👨🏻‍💻</p>
        <p>Check out my projects</p>
      </div>
      <div className="grid grid-cols-2 mt-10 gap-6">
        {portfoliodata.map((project, index) => (
          <Card
            key={index}
            className="mb-5"
            onClick={() => setSelectedProject(project)}
            title={<span dangerouslySetInnerHTML={{ __html: project.title }} />}
            imgSrc={imageMapping[project.imgSrc]}
            period={project.period}
            style={{
              color: project.textColor,
              backgroundColor: project.bgColor,
            }}
          />
        ))}
      </div>
      {/* 선택한 프로젝트가 있으면 모달 표시 */}
      {selectedProject && (
        <Modal isOpen={true} onClose={() => setSelectedProject(null)}>
          <h2 className="text-2xl font-bold mb-4">
            <span dangerouslySetInnerHTML={{ __html: selectedProject.title }} />
          </h2>
          <p className="mb-2 text-sm">{selectedProject.period}</p>
          {/* 포트폴리오 JSON에 modalContent 또는 description 필드가 있다면 표시 */}
          <div className="text-base">
            {selectedProject.modalContent ||
              selectedProject.description ||
              "No additional details provided."}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Portfolio;
