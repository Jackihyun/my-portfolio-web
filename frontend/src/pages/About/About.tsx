import { cn } from "@/utils/classname";
import Box from "@/pages/About/Box";
import React from "react";

type Props = {
  className?: string;
};

const About: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("w-full flex flex-col", className)}>
      <p className="font-orbitron-regular text-[#303030] dark:text-[#FAFAFC] text-xl">
        Let me introduce myself 🗣️
      </p>

      <div className="mt-10">
        <p className="font-orbitron-regular text-3xl text-[#202020] dark:text-[#FAFAFC]">
          🗂️ Projects
        </p>
        <Box className="flex w-full flex-col text-lg gap-2">
          <div className="flex w-full gap-4 font-pretendard text-nowrap ">
            <p className="w-44">2025.04 - 2024.06</p>
            <p>
              온라인 인력 사무소 웹사이트 '바로잡'
              <br />
              <span className="text-sm text-[#919191]">FE 개발 (진행중)</span>
            </p>
          </div>
          <div className="flex gap-4 font-pretendard text-nowrap">
            <p className="w-44">2024.03 - 2024.08</p>
            <p>
              경희대학교 의상학과 제 44회 졸업작품패션쇼 웹사이트
              <br />
              <span className="text-sm text-[#919191]">FE 개발 (90%)</span>
            </p>
          </div>
          <div className="flex gap-4 font-pretendard text-nowrap">
            <p className="w-44">2023.12 - 2024.03</p>
            <p>
              컴퓨터공학과 스터디(AO) 웹사이트
              <br />
              <span className="text-sm text-[#919191]">FE 개발 (70%)</span>
            </p>
          </div>
        </Box>
      </div>
      <div className="mt-10">
        <p className="font-orbitron-regular text-3xl text-[#303030] dark:text-[#FAFAFC]">
          🏫 Education
        </p>
        <Box className="flex gap-4 text-nowrap font-pretendard text-lg">
          <p className="w-44">2020.03 - 재학중</p>
          <p>
            명지대학교 컴퓨터공학과
            <br />
            <span className="text-sm text-[#919191]">2026.02 졸업예정</span>
          </p>
        </Box>
      </div>
      <div className="mt-10">
        <p className="font-orbitron-regular text-3xl text-[#303030] dark:text-[#FAFAFC]">
          📨️ Cover letter
        </p>
        <Box className="font-pretendard flex flex-col gap-6">
          <p className="text-[#202020] dark:text-[#FAFAFD] text-lg">
            [섬세함을 가진 프론트엔드 개발자]
          </p>
          <div className="flex flex-col gap-4 text-[#636363] dark:text-gray-300 text-base">
            <p>
              프론트엔드 개발자로서, 섬세한 작업이 사용자 경험을 더욱 풍부하게
              만들어 시너지를 이끌어 낸다고 생각합니다.
              <br />
              화면의 섬세한 요소를 다루면서 더 많은 사람들이 편리하고 유용하게
              사용할 수 있는 서비스를 만들기 위해 끊임없이 고민해 왔습니다.
            </p>
            <p>
              다양한 프로젝트를 진행하면서, 단순한 기능 구현을 넘어 더
              직관적이고, 더 가치있는 경험을 제공하는 UI/UX를 설계하고 구현하는
              데 집중해왔습니다. 또한, 사용자 피드백을 기반으로 지속적으로
              서비스를 개선하고, 데이터와 테스트를 통해 최적의 경험을 제공하는
              것이 저의 목표입니다.
            </p>
            <p>
              앞으로 사용자가 쉽고 편하게 사용할 수 있는 인터렉션을 설계하며,
              자연스럽게 경험을 만들어가는 것을 목표로 나아가려고 합니다.
              <br />
              기술과 디자인, 사용자 경험이 조화를 이루는 프로젝트를 만들어가며,
              더 많은 사람들이 편리하고 만족할 수 있는 서비스를 개발하겠습니다.
            </p>
          </div>
        </Box>
      </div>
    </div>
  );
};
export default About;
