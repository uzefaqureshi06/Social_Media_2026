import { img } from "../assets/data";

export default function Avatar({ n, size = "w-10 h-10", online }) {
  return (
    <div className={`relative shrink-0 ${size}`}>
      <img
        src={img(n)}
        alt=""
        className="w-full h-full rounded-full object-cover"
      />
      {online && (
        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-white" />
      )}
    </div>
  );
}
