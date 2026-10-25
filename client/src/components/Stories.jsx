import { stories, img } from "../assets/data";

export default function Stories() {
  return (
    <div className="flex gap-3 overflow-x-auto pb-1 snap-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {stories.map((s, i) => (
        <div
          key={s.name}
          className="relative shrink-0 snap-start w-[84px] sm:w-[76px] h-[150px] rounded-xl overflow-hidden"
        >
          <img
            src={`https://picsum.photos/seed/noko${i}/200/320`}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <img
            src={img(s.img)}
            alt=""
            className="absolute top-2 left-2 w-7 h-7 rounded-full object-cover ring-2 ring-[#6c4fd9]"
          />
          <span className="absolute bottom-2 left-2 right-1 text-white text-[11px] leading-tight">
            {s.name}
          </span>
        </div>
      ))}
    </div>
  );
}
