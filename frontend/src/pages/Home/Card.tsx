export default function Card(props: any) {
  return (
    <div className="w-[455px] h-[570px] border-0 rounded-xl bg-gray-400">
      <img className="object-fill" src="{props}" />
    </div>
  );
}
