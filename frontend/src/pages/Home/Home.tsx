import { useState } from "react";
import Layout from "../../layout/Layout";
import Card from "./Card";
import PortfolioSrc1 from "../../assets/imgs/portfolio1.png";
import gsap from "gsap";
import Draggable from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export default function Home() {
  const cards = [
    {
      imgSrc: PortfolioSrc1,
      title: "Black Life Matter",
      year: "2020",
    },
    {
      imgSrc: PortfolioSrc1,
      title: "Nice Elijah",
      year: "2021",
    },
    {
      imgSrc: PortfolioSrc1,
      title: "Design Concept",
      year: "2022",
    },
    {
      imgSrc: PortfolioSrc1,
      title: "Visual Identity",
      year: "2023",
    },
    {
      imgSrc: PortfolioSrc1,
      title: "Creative Project",
      year: "2024",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  return (
    <Layout>
      <div className="relative mt-[180px] w-full h-screen flex justify-center items-center overflow-hidden">
        <div className="relative w-[600px] h-[600px]">
          {cards.map((card, index) => {
            const angle = (360 / cards.length) * (index - currentIndex);
            const translateX = 250 * Math.cos((angle * Math.PI) / 180);
            const translateY = 250 * Math.sin((angle * Math.PI) / 180);
            const isCentered = index === currentIndex;
            const scale = isCentered ? 1.2 : 1;
            const zIndex = isCentered ? 10 : 1;

            return (
              <div
                key={index}
                className="absolute transition-transform duration-500"
                style={{
                  transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
                  zIndex,
                }}
              >
                <Card
                  imgSrc={card.imgSrc}
                  title={card.title}
                  year={card.year}
                  isCentered={isCentered}
                />
              </div>
            );
          })}
        </div>
        <button onClick={handlePrev} className="absolute left-0">
          Prev
        </button>
        <button onClick={handleNext} className="absolute right-0">
          Next
        </button>
      </div>
    </Layout>
  );
}
