import { cn } from "../utils/classname";
import Header from "./Header";
import SideProfile from "./SideProfile";

type Props = {
  className?: string;
};

const Layout: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("flex px-20 py-14", className)}>
      <SideProfile />
      <div className="flex flex-col pl-[400px] w-full  h-full relative">
        <Header />
        <main className="flex-1 flex-col">
          <p className="text-[100px]">1</p>
          <p className="text-[100px]">1</p>
          <p className="text-[100px]">1</p>
          <p className="text-[100px]">1</p>
          <p className="text-[100px]">1</p>
          <p className="text-[100px]">1</p>
          <p className="text-[100px]">1</p>
          <p className="text-[100px]">1</p>
        </main>
      </div>
    </div>
  );
};

export default Layout;
