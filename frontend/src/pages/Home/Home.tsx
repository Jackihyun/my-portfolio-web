import Layout from "../../layout/Layout";
import PortfolioSrc1 from "../../assets/imgs/portfolio1.png";
import Carousel from "../Home/components/Carousel";

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

  return (
    <Layout>
      <div>
        <Carousel cards={cards} />
      </div>
    </Layout>
  );
}
