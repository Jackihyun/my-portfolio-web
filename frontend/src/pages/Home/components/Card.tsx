interface CardProps {
  imgSrc: string;
  title: string;
  year: string;
}

export default function Card({ imgSrc, title, year }: CardProps) {
  return (
    <div
      className={`relative w-[355px] h-[449px] xl:w-[455px] xl:h-[570px] border-0 rounded-xl transition-transform duration-300`}
    >
      <img className="object-fill rounded-t-xl" src={imgSrc} alt={title} />
      <div className="p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-base">{year}</p>
      </div>
    </div>
  );
}
