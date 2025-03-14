import Home from "@/pages/Home/Home";
import { cn } from "../utils/classname";
import Header from "./Header";
import SideProfile from "./SideProfile";
import Portfolio from "@/pages/Portfolio/Portfolio";
import About from "@/pages/About/About";
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
          <div id="Home">
            <Home className="mt-[40vh]" />
          </div>
          <div id="Portfolio">
            <Portfolio className="mt-[25vh]" />
          </div>
          <div id="About">
            <About className="mt-[25vh]" />
          </div>
          <div id="Contact">{/* 추후 Contact 컴포넌트나 섹션 추가 */}</div>
          <SpinningText className="">Scroll down</SpinningText>
        </main>
      </div>
    </div>
  );
};

export default Layout;
