import { cn } from "@/utils/classname";
import Box from "@/pages/About/Box";
import React from "react";
import { TypingAnimation } from "@/components/magicui/typing-animation";

type Props = {
  className?: string;
};

const About: React.FC<Props> = ({ className }) => {
  const strengths = [
    {
      title: "문제 정의 중심",
      body: "기능을 바로 만들기보다 사용자가 어디에서 막히는지, 어떤 정보가 먼저 보여야 하는지부터 정리합니다.",
    },
    {
      title: "유지보수 가능한 구조",
      body: "상태 관리, API 계층, 컴포넌트 단위를 분리해 팀원이 이어서 작업하기 좋은 프론트엔드 구조를 지향합니다.",
    },
    {
      title: "사용 경험의 마감",
      body: "반응형 레이아웃, 전환 상태, 로딩과 오류 처리처럼 작은 경험까지 제품의 완성도로 연결합니다.",
    },
  ];

  const projects = [
    {
      period: "2026.05 - 2026.06",
      title: "Gotgot AI Local Map Service",
      detail: "Kakao Map 기반 장소 탐색과 AI 코스 추천 흐름을 구현하고, entry JS gzip 38.4% 감소와 주요 사용자 흐름 검증을 진행했습니다.",
    },
    {
      period: "2025.10 - 2026.02",
      title: "FinVibe Investment Simulation",
      detail: "실시간 시세와 차트 중심의 투자 학습 UI를 만들고, WebSocket 데이터와 클라이언트 상태 동기화 구조를 정리했습니다.",
    },
    {
      period: "2025.03 - 2025.07",
      title: "Memoria AI Diary Service",
      detail: "AI 편지, 이미지, 음악 추천 결과를 사용자가 자연스럽게 확인하는 모바일 중심 인터페이스를 구현했습니다.",
    },
    {
      period: "2025.01 - 2026.01",
      title: "Inteuk Hybrid Job App",
      detail: "위치 기반 탐색, 인증, 매칭 흐름을 담당하며 하이브리드 앱 환경의 화면 안정성을 개선했습니다.",
    },
    {
      period: "2024.03 - 2024.08",
      title: "KHU CNT Fashion Show Website",
      detail: "공식 행사 사이트의 반응형 갤러리, 영상 프레임 UI, 작품 아카이브 화면을 구현했습니다.",
    },
  ];

  const education = [
    {
      period: "2020.03 - 2026.02",
      title: "명지대학교 컴퓨터공학과",
      detail: "졸업",
    },
    {
      period: "2026.01 - ing",
      title: "삼성 청년 SW AI 아카데미 15기",
      detail: "교육 진행 중",
    },
  ];

  return (
    <div className={cn("w-full flex flex-col", className)}>
      <TypingAnimation
        startOnView={true}
        duration={100}
        delay={300}
        className="hidden lg:block font-orbitron-regular text-[#303030] dark:text-[#FAFAFC] text-lg lg:text-3xl font-normal"
      >
        About Jackihyun
      </TypingAnimation>

      <div className="mt-6 lg:mt-10">
        <p className="font-orbitron-regular text-xl lg:text-3xl text-[#202020] dark:text-[#FAFAFC]">
          강점
        </p>
        <Box className="grid w-full gap-3 font-pretendard md:grid-cols-3">
          {strengths.map((strength) => (
            <div
              key={strength.title}
              className="rounded-2xl border border-black/10 bg-white/45 p-4 dark:border-white/10 dark:bg-white/5"
            >
              <p className="font-orbitron-medium text-sm text-green-1">
                {strength.title}
              </p>
              <p className="mt-3 text-sm leading-7 text-[#5C5C5C] dark:text-[#D0D0D0]">
                {strength.body}
              </p>
            </div>
          ))}
        </Box>
      </div>

      <div className="mt-6 lg:mt-10">
        <p className="font-orbitron-regular text-xl lg:text-3xl text-[#303030] dark:text-[#FAFAFC]">
          프로젝트 이력
        </p>
        <Box className="flex w-full flex-col gap-4 font-pretendard text-sm lg:text-base">
          {projects.map((project) => (
            <div
              key={project.title}
              className="grid gap-2 border-b border-black/10 pb-4 last:border-0 last:pb-0 dark:border-white/10 md:grid-cols-[150px_minmax(0,1fr)] lg:grid-cols-[190px_minmax(0,1fr)]"
            >
              <p className="font-orbitron-regular text-xs text-green-1 lg:text-sm">
                {project.period}
              </p>
              <div>
                <p className="font-semibold text-[#202020] dark:text-[#FAFAFC]">
                  {project.title}
                </p>
                <p className="mt-1 text-xs leading-6 text-[#777777] dark:text-[#BDBDBD] lg:text-sm">
                  {project.detail}
                </p>
              </div>
            </div>
          ))}
        </Box>
      </div>

      <div className="mt-6 lg:mt-10">
        <p className="font-orbitron-regular text-xl lg:text-3xl text-[#303030] dark:text-[#FAFAFC]">
          교육
        </p>
        <Box className="flex w-full flex-col gap-4 font-pretendard text-sm lg:text-base">
          {education.map((item) => (
            <div
              key={item.title}
              className="grid gap-2 md:grid-cols-[150px_minmax(0,1fr)] lg:grid-cols-[190px_minmax(0,1fr)]"
            >
              <p className="font-orbitron-regular text-xs text-green-1 lg:text-sm">
                {item.period}
              </p>
              <div>
                <p className="font-semibold text-[#202020] dark:text-[#FAFAFC]">
                  {item.title}
                </p>
                <p className="mt-1 text-xs text-[#777777] dark:text-[#BDBDBD] lg:text-sm">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </Box>
      </div>

      <div className="mt-6 lg:mt-10">
        <p className="font-orbitron-regular text-xl lg:text-3xl text-[#303030] dark:text-[#FAFAFC]">
          작업 방식
        </p>
        <Box className="font-pretendard flex flex-col gap-4 lg:gap-6">
          <p className="text-[#202020] dark:text-[#FAFAFD] text-base lg:text-lg">
            세부 구현을 제품의 사용 흐름으로 바꾸는 프론트엔드 개발을 좋아합니다.
          </p>
          <div className="flex flex-col gap-3 lg:gap-4 text-[#636363] dark:text-gray-300 text-sm lg:text-base">
            <p>
              프론트엔드는 사용자가 서비스를 처음 신뢰하는 접점이라고 생각합니다.
              그래서 화면의 흐름, 상태 변화, 로딩과 오류 상황까지 사용자가 자연스럽게
              이해할 수 있도록 만드는 일에 집중합니다.
            </p>
            <p>
              여러 프로젝트를 거치며 UI 구현뿐 아니라 API 연동 구조, 상태 관리,
              컴포넌트 재사용성, 작업 규칙까지 함께 정리해 왔습니다. 앞으로도 제품의
              맥락을 이해하고 오래 사용할 수 있는 화면을 만드는 개발자로 성장하고
              싶습니다.
            </p>
          </div>
        </Box>
      </div>
    </div>
  );
};
export default About;
