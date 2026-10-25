import Avatar from "./Avatar";
import { PURPLE } from "../assets/data";
 
export default function Composer() {
  return (
    <div className="bg-white rounded-full flex items-center gap-3 pl-4 pr-1.5 h-12">
      <Avatar n={47} size="w-8 h-8" />
      <input
        placeholder="What's on your mind, Diana?"
        className="flex-1 min-w-0 bg-transparent outline-none text-sm placeholder:text-gray-400"
      />
      <button className="text-white text-sm font-medium px-6 h-9 rounded-full" style={{ background: PURPLE }}>
        Post
      </button>
    </div>
  );
}