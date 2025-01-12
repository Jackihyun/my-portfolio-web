import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import "../style/Carousel.css";

interface Card {
  imgSrc: string;
  title: string;
  year: string;
}

interface CarouselProps {
  cards: Card[];
}

const Carousel: React.FC<CarouselProps> = ({ cards }) => {
  // Embla Carousel 초기화 (dragFree와 loop 설정)
  const [emblaRef] = useEmblaCarousel({
    loop: true, // 무한 루프
    dragFree: true, // 드래그의 자연스러움 개선
    align: "center", // 중앙 정렬
    skipSnaps: false, // 카드 고정
  });

  return (
    <div className="carousel">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {cards.map((card, index) => (
            <div className="embla__slide" key={index}>
              <div className="carousel-item">
                <img src={card.imgSrc} alt={card.title} />
                <div className="content">
                  <h3>{card.title}</h3>
                  <p>{card.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
