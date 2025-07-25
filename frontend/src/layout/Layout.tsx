import Home from "@/pages/Home/Home";
import { cn } from "../utils/classname";
import Header from "./Header";
import SideProfile from "./SideProfile";
import MobileSideProfile from "@/components/MobileSideProfile";
import Portfolio from "@/pages/Portfolio/Portfolio";
import About from "@/pages/About/About";
import { Element } from "react-scroll";
import { SpinningText } from "@/components/magicui/spinning-text";
import Contact from "@/pages/Contact/Contact";

type Props = {
  className?: string;
};

const Layout: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("flex px-4 md:px-20 py-4 md:py-14 ", className)}>
      <SideProfile />
      <div className="flex flex-col pl-0 lg:pl-[400px] size-full">
        <Header />
        <MobileSideProfile className="mb-6" />
        <main className="flex-1 flex-col w-full h-full">
          <Element name="Home" id="Home">
            <Home className="mt-[5vh] lg:mt-[40vh]" />
          </Element>
          <Element name="Portfolio" id="Portfolio">
            <Portfolio className="mt-[15vh] lg:mt-[20vh]" />
          </Element>
          <Element name="About" id="About">
            <About className="mt-[15vh] lg:mt-[25vh]" />
          </Element>
          <Element name="Contact" id="Contact">
            <Contact className="mt-[15vh] lg:mt-[25vh]" />
          </Element>

          {/* PC용 스피닝 텍스트만 유지 */}
          <div className="hidden lg:block fixed bottom-32 right-32 z-50">
            <SpinningText
              radius={4}
              duration={4}
              className="text-lg text-[#303030] dark:text-[#FAFAFC] font-orbitron-regular"
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
