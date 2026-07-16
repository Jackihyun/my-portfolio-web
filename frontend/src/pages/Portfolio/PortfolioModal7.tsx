import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import Card from "./Card";
import imageMapping from "@/utils/imageMapping";
import React from "react";

interface PortfolioModalProps {
  data: {
    title: string;
    imgSrc: string;
    period: string;
    bgColor: string;
    textColor: string;
    modalColor: string;
    modalImgSrc: string;
    kicker?: string;
    role?: string;
    summary?: string;
    highlights?: string[];
    tags?: string[];
  };
}

const resultCards = [
  {
    title: "entry JS gzip",
    value: "38.4% 감소",
    detail: "218.30kB -> 134.39kB",
  },
  {
    title: "Overlay 생성/제거",
    value: "100% 제거",
    detail: "stable viewport 기준",
  },
  {
    title: "Cluster 계산",
    value: "38.8% 개선",
    detail: "N=5,000 benchmark",
  },
  {
    title: "Playwright",
    value: "1 passed",
    detail: "핵심 사용자 흐름 검증",
  },
];

const PortfolioModal7: React.FC<PortfolioModalProps> = ({ data }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card
          className="mb-5"
          title={<span dangerouslySetInnerHTML={{ __html: data.title }} />}
          imgSrc={imageMapping[data.imgSrc]}
          period={data.period}
          kicker={data.kicker}
          role={data.role}
          summary={data.summary}
          highlights={data.highlights}
          tags={data.tags}
          style={{
            color: data.textColor,
            backgroundColor: data.bgColor,
          }}
        />
      </DialogTrigger>
      <DialogContent
        closeIconStyle="text-[#F36F21] p-2"
        className="p-4 sm:p-6 lg:p-8 md:!rounded-[30px] rounded-xl overflow-hidden max-h-[90vh] flex flex-col bg-white dark:bg-[#0F0F0F]"
      >
        <DialogHeader className="flex flex-col flex-shrink-0">
          <div
            className="font-orbitron-medium text-2xl lg:text-3xl"
            style={{ color: data.modalColor }}
          >
            Main Project
          </div>
          <DialogTitle className="font-orbitron-regular text-lg lg:text-xl text-[#303030] dark:text-white">
            Gotgot - AI Local Map Service
          </DialogTitle>
        </DialogHeader>

        <div className="mt-4 overflow-y-auto pr-1">
          <div className="grid gap-6 xl:grid-cols-[minmax(260px,360px)_minmax(0,1fr)] xl:gap-8">
            <div className="flex flex-col gap-5">
              <InteractiveHoverButton
                transitionClassName="group-hover:translate-x-0"
                dotBgClassName="bg-[#F36F21] size-1.5"
                className="flex w-fit items-center justify-center border border-[#F36F21] bg-[#F36F21]/15 text-xs text-[#F36F21] font-orbitron-regular"
              >
                SSAFY 최우수상
              </InteractiveHoverButton>

              <section>
                <SectionTitle color={data.modalColor}>프로젝트 소개</SectionTitle>
                <p className="mt-2 font-pretendard text-sm leading-7 text-[#303030] dark:text-[#D9D9D9]">
                  동네 장소를 기록하고 상황에 맞는 코스를 추천받는 AI 로컬 지도
                  서비스입니다. 장소 탐색 이후의 선택 피로를 줄이기 위해 지도 UX,
                  코스 추천, 개인 기록 흐름을 하나의 경험으로 연결했습니다.
                </p>
              </section>

              <section>
                <SectionTitle color={data.modalColor}>Project Info</SectionTitle>
                <div className="mt-2 space-y-1 font-pretendard text-xs leading-6 text-[#303030] dark:text-[#D9D9D9] lg:text-[13px]">
                  <p>Team - FE 1 / BE 1</p>
                  <p>Role - Frontend Developer</p>
                  <p>
                    Stack - React, TypeScript, Vite, TanStack Query, Zustand,
                    Kakao Map, Playwright
                  </p>
                  <p>Award - SSAFY 1학기 관통 프로젝트 최우수상</p>
                </div>
              </section>

              <section>
                <SectionTitle color={data.modalColor}>맡은 역할</SectionTitle>
                <ul className="mt-2 space-y-1 font-pretendard text-xs leading-6 text-[#303030] dark:text-[#D9D9D9] lg:text-[13px]">
                  <li>- 홈, 탐색, 코스 생성, 쪽지 작성, 마이페이지 UI 구현</li>
                  <li>- Kakao Map 마커, 클러스터, CustomOverlay 렌더링 최적화</li>
                  <li>- AI 코스 추천 실패 상황을 위한 fallback 구조 설계</li>
                  <li>- Playwright 기반 핵심 사용자 흐름 검증</li>
                </ul>
              </section>
            </div>

            <div className="flex flex-col gap-4">
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {resultCards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-[#F36F21]/20 bg-[#F36F21]/10 p-4"
                  >
                    <p className="font-pretendard text-xs text-[#8A3A0F] dark:text-[#FFD7BE]">
                      {card.title}
                    </p>
                    <p className="mt-2 font-orbitron-medium text-2xl text-[#F36F21]">
                      {card.value}
                    </p>
                    <p className="mt-2 font-pretendard text-xs text-[#5F5F5F] dark:text-[#D0D0D0]">
                      {card.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                <InfoBlock title="문제 / 원인">
                  <p>
                    지도 화면에서 마커와 오버레이가 반복 생성되면서 화면 전환이
                    무거워졌고, AI 추천 실패 상황에서는 사용자가 다음 행동을 알기
                    어려웠습니다.
                  </p>
                </InfoBlock>
                <InfoBlock title="해결 과정">
                  <p>
                    지도 요소를 key 기반 재사용 구조로 정리하고 불필요한 chunk를
                    분리했습니다. AI 추천 실패 시에는 fallback 코스와 안내 메시지로
                    사용 흐름이 끊기지 않도록 설계했습니다.
                  </p>
                </InfoBlock>
              </div>

              <div className="rounded-3xl border border-black/10 bg-black/[0.03] p-5 dark:border-white/10 dark:bg-white/[0.04]">
                <p className="font-orbitron-medium text-sm text-[#F36F21]">
                  Verification
                </p>
                <p className="mt-2 font-pretendard text-sm leading-7 text-[#303030] dark:text-[#D9D9D9]">
                  빌드와 lint를 통과했고, Vite 500kB chunk warning을 제거했습니다.
                  Playwright smoke test로 핵심 사용자 흐름을 확인했으며, 결과 수치는
                  전체 JS 총량이 아니라 초기 entry chunk 기준으로 기록했습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const SectionTitle = ({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) => (
  <div className="flex items-center gap-2 font-pretendard">
    <div className="size-[5px] rounded-full" style={{ backgroundColor: color }} />
    <p className="text-sm font-medium lg:text-[17px]" style={{ color }}>
      {children}
    </p>
  </div>
);

const InfoBlock = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="rounded-3xl border border-black/10 bg-white/60 p-5 dark:border-white/10 dark:bg-white/[0.04]">
    <p className="font-pretendard text-sm font-semibold text-[#202020] dark:text-white">
      {title}
    </p>
    <div className="mt-2 font-pretendard text-sm leading-7 text-[#5C5C5C] dark:text-[#D0D0D0]">
      {children}
    </div>
  </div>
);

export default PortfolioModal7;
