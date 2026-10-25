import { Search, Menu } from "lucide-react";
import Avatar from "./Avatar";
import { PURPLE } from "../assets/data";

export default function Navbar({ onMenu }) {
  return (
    <header className="sticky top-0 z-30 bg-white">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-3 px-4 sm:px-6 lg:px-8 h-14 sm:h-16">
        <div className="flex items-center gap-2">
          <button
            className="lg:hidden p-1"
            onClick={onMenu}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
          <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">
            nokoSocial
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-3 flex-1 max-w-[445px] bg-[#efedf5] rounded-full px-4 h-11">
          <Search size={16} className="text-gray-500" />
          <input
            placeholder="Search for creators, inspirations, and projects"
            className="bg-transparent outline-none text-sm w-full placeholder:text-gray-400"
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            className="text-white text-sm font-medium px-5 sm:px-6 h-10 rounded-full hover:opacity-90"
            style={{ background: PURPLE }}
          >
            Create
          </button>
          <Avatar n={47} size="w-9 h-9" />
        </div>
      </div>
    </header>
  );
}
