import Home from "@/pages/Home/Home";
import { cn } from "../utils/classname";
import Header from "./Header";
import SideProfile from "./SideProfile";
import Portfolio from "@/pages/Portfolio/Portfolio";

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
          <Home className="mt-[40vh]" />
          <Portfolio className="mt-[15vh]" />
        </main>
      </div>
    </div>
  );
};

export default Layout;
