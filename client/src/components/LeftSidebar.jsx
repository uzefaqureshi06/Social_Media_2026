import { NavLink } from "react-router-dom";
import Avatar from "./Avatar";
import { nav, PURPLE } from "../assets/data";

export function ProfileCard() {
  return (
    <div className="bg-white rounded-2xl p-4 flex items-center gap-3">
      <Avatar n={47} size="w-10 h-10" />
      <div>
        <p className="text-sm font-semibold text-gray-800">Diana Ayi</p>
        <p className="text-sm text-gray-400">@dayi</p>
      </div>
    </div>
  );
}

export function NavList({ onPick }) {
  return (
    <nav className="bg-white rounded-2xl py-2 overflow-hidden">
      {nav.map(({ label, path, icon: Icon, badge }) => (
        <NavLink
          key={label}
          to={path}
          end={path === "/"}
          onClick={onPick}
          className={({ isActive }) =>
            `relative w-full flex items-center gap-5 px-8 h-[53px] text-[15px] font-medium transition-colors ${
              isActive
                ? "bg-[#f1eefc] text-[#6c4fd9]"
                : "text-gray-700 hover:bg-gray-50"
            }`
          }
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <span className="absolute left-0 top-0 h-full w-1.5 bg-[#6c4fd9]" />
              )}
              <span className="relative">
                <Icon
                  size={20}
                  className={isActive ? "text-[#6c4fd9]" : "text-gray-400"}
                />
                {badge && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {badge}
                  </span>
                )}
              </span>
              {label}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}

export default function LeftSidebar() {
  return (
    <aside className="hidden lg:block space-y-4 sticky top-24 self-start">
      <ProfileCard />
      <NavList />
      <button
        className="w-full text-white font-medium h-12 rounded-full hover:opacity-90"
        style={{ background: PURPLE }}
      >
        Create Post
      </button>
    </aside>
  );
}
