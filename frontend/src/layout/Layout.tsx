import Home from "@/pages/Home/Home";
import { cn } from "../utils/classname";
import Header from "./Header";
import SideProfile from "./SideProfile";
import Portfolio from "@/pages/Portfolio/Portfolio";
import About from "@/pages/About/About";
import { Element } from "react-scroll";
import { SpinningText } from "@/components/magicui/spinning-text";

type Props = {
  className?: string;
};

const Layout: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("flex px-20 py-14", className)}>
      <SideProfile />
      <div className="flex flex-col pl-[400px] size-full">
        <Header />
        <main className="flex-1 flex-col w-full h-full">
          <Element name="Home">
            <Home className="mt-[40vh]" />
          </Element>
          <Element name="Portfolio">
            <Portfolio className="mt-[25vh]" />
          </Element>
          <Element name="About">
            <About className="mt-[25vh]" />
          </Element>
          <Element name="Contact">
            {/* 여기에 Contact 컴포넌트를 추가하거나, 해당 섹션의 내용을 넣으세요 */}
          </Element>
          <div className="fixed bottom-32 right-32 z-50">
            <SpinningText
              radius={4}
              duration={4}
              className="text-lg text-[#303030] dark:text-[#FAFAFC] font-orbitronRegular"
            >
              Scroll Down • Scroll Up •
            </SpinningText>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
