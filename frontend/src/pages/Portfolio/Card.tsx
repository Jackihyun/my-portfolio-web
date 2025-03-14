import { cn } from "@/utils/classname";

type Props = {
  className?: string;
  title: React.ReactNode;
  style?: React.CSSProperties;
  imgSrc: string;
  period: string;
};

const Card: React.FC<Props> = ({ className, title, style, imgSrc, period }) => {
  return (
    <div
      style={style}
      className={cn(
        `flex flex-col size-[500px] rounded-3xl shadow-lg py-7 px-9`,

        className
      )}
    >
      <div className="">
        <p className="font-orbitronRegular text-xl mb-2 tracking-widest">
          {title}
        </p>
      </div>
      <img
        src={imgSrc}
        alt="project"
        className="size-[530px] object-cover rounded-[40px]"
      />
      <div>
        <p className="text-right font-orbitronRegular text-[15px] mt-2">
          {period}
        </p>
      </div>
    </div>
  );
};

export default Card;
