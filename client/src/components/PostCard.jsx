import { useState } from "react";
import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  MoreHorizontal,
} from "lucide-react";
import Avatar from "./Avatar";
import { img } from "../assets/data";

export default function PostCard() {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <article className="bg-white rounded-2xl p-3 sm:p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <Avatar n={32} size="w-9 h-9" />
          <div>
            <p className="text-sm font-semibold">Lana Rose</p>
            <p className="text-xs text-gray-400">Dubai, 15 minutes ago</p>
          </div>
        </div>
        <MoreHorizontal size={18} className="text-gray-500" />
      </div>

      <img
        src="https://picsum.photos/seed/nokopost/900/700"
        alt="Post"
        className="w-full aspect-[4/3] sm:aspect-[16/11] object-cover rounded-xl"
      />

      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-4">
          <button onClick={() => setLiked(!liked)} aria-label="Like">
            <Heart
              size={20}
              className={liked ? "fill-red-500 text-red-500" : ""}
            />
          </button>
          <MessageCircle size={20} />
          <Share2 size={20} />
        </div>
        <button onClick={() => setSaved(!saved)} aria-label="Bookmark">
          <Bookmark size={20} className={saved ? "fill-gray-800" : ""} />
        </button>
      </div>

      <div className="flex items-center gap-2 mt-3 text-xs">
        <div className="flex -space-x-2">
          {[8, 14, 22].map((n) => (
            <img
              key={n}
              src={img(n)}
              alt=""
              className="w-5 h-5 rounded-full border-2 border-white object-cover"
            />
          ))}
        </div>
        <p>
          Liked by <b>Ernest Achiever</b> and <b>2,323 others</b>
        </p>
      </div>
      <p className="text-xs mt-2 text-gray-700">
        <b>Lana Rose</b> Lorem ipsum dolor sit quisquam eius.{" "}
        <span className="text-[#6c4fd9]">#lifestyle</span>
      </p>
    </article>
  );
}
